const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 3000);
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const GROQ_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';
const POLLINATIONS_ENDPOINT = 'https://text.pollinations.ai/openai';
const ROOT = __dirname;

function sendJson(res, status, body){
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(body));
}

function readBody(req){
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if(body.length > 30000){
        reject(new Error('Request too large'));
        req.destroy();
      }
    });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

function extractJson(text){
  const cleaned = String(text || '').trim().replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '');
  try{
    return JSON.parse(cleaned);
  }catch(err){
    const match = cleaned.match(/\{[\s\S]*\}/);
    if(match) return JSON.parse(match[0]);
    throw err;
  }
}

function clamp(value, min, max){
  return Math.min(max, Math.max(min, value));
}

function normaliseMark(result, maxMark){
  const resultMax = typeof result.maxMark === 'number' && result.maxMark > 0 ? result.maxMark : maxMark;
  const rawMark = typeof result.mark === 'number' ? result.mark : (result.score ? resultMax : 0);
  const scaled = resultMax === maxMark ? rawMark : (rawMark / resultMax) * maxMark;
  const mark = clamp(Math.round(scaled), 0, maxMark);
  return {
    score: mark >= Math.ceil(maxMark * 0.6) ? 1 : 0,
    mark,
    maxMark,
    explanation: String(result.explanation || 'Marked by AI.').slice(0, 420)
  };
}

function words(text){
  return String(text || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
}

function markWithLocalFallback(payload, reason){
  const maxMark = payload.type === 'long' ? 5 : 3;
  const answerWords = new Set(words(payload.answer).filter(word => word.length > 2));
  const keywordHits = (payload.keywords || []).filter(keyword => {
    const parts = words(keyword);
    return parts.length ? parts.some(part => answerWords.has(part)) : answerWords.has(String(keyword).toLowerCase());
  }).length;
  const guidanceWords = words(payload.guidance).filter(word => word.length > 4);
  const guidanceHits = guidanceWords.filter(word => answerWords.has(word)).length;
  const lengthScore = clamp(answerWords.size / (payload.type === 'long' ? 28 : 10), 0, 1);
  const keywordScore = (payload.keywords || []).length ? keywordHits / Math.max(2, Math.ceil(payload.keywords.length * 0.45)) : 0;
  const guidanceScore = guidanceWords.length ? guidanceHits / Math.max(3, Math.ceil(guidanceWords.length * 0.25)) : 0;
  const total = clamp((keywordScore * 0.45) + (guidanceScore * 0.35) + (lengthScore * 0.2), 0, 1);
  const cap = answerWords.size <= 1 ? 1 : (answerWords.size <= 5 ? Math.min(2, maxMark) : maxMark);
  const mark = Math.min(cap, clamp(Math.round(total * maxMark), 0, maxMark));
  const missing = (payload.keywords || []).filter(keyword => !words(keyword).some(part => answerWords.has(part))).slice(0, 2);
  return {
    score: mark >= Math.ceil(maxMark * 0.6) ? 1 : 0,
    mark,
    maxMark,
    explanation: 'Hosted AI was busy, so backup marking was used. ' + (missing.length ? 'Improve it by adding ' + missing.join(' and ') + ' and explaining why it matters.' : 'Improve it by making the because/therefore link clearer.'),
    fallback: true,
    fallbackReason: String(reason || 'hosted AI unavailable').slice(0, 120)
  };
}

async function markWithGemini(payload){
  if(!GEMINI_API_KEY) throw new Error('GEMINI_API_KEY is not set');
  const maxMark = payload.type === 'long' ? 5 : 3;
  const prompt = [
    'You are a fair but strict Year 8 Science teacher marking a student answer.',
    'Topic: elements, compounds, properties, atomic structure, investigations, data trends, and the periodic table.',
    'Question: ' + (payload.question || ''),
    'Expected guidance/model answer: ' + (payload.guidance || ''),
    'Keywords: ' + ((payload.keywords || []).join(', ') || '-'),
    'Student answer: ' + (payload.answer || ''),
    'Mark out of ' + maxMark + '. Award partial marks. Do not give full marks for one-word or vague answers.',
    'Score is 1 only if the answer earns at least 60% of the marks.',
    'Give feedback in two short sentences: what was right or missing, then one specific improvement.',
    'Return only JSON exactly like {"score":0,"mark":1,"maxMark":' + maxMark + ',"explanation":"feedback"}'
  ].join('\n\n');

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      contents: [{parts: [{text: prompt}]}],
      generationConfig: {
        temperature: 0,
        maxOutputTokens: 220,
        responseMimeType: 'application/json'
      }
    })
  });
  if(!response.ok){
    const detail = await response.text();
    throw new Error('Gemini error ' + response.status + ': ' + detail.slice(0, 160));
  }
  const data = await response.json();
  const parts = data?.candidates?.[0]?.content?.parts || [];
  const text = parts.map(part => part.text || '').join('');
  return normaliseMark(extractJson(text), maxMark);
}

async function markWithGroq(payload){
  if(!GROQ_API_KEY) throw new Error('GROQ_API_KEY is not set');
  const maxMark = payload.type === 'long' ? 5 : 3;
  const prompt = [
    'You are a fair but strict Year 8 Science teacher marking a student answer.',
    'Topic: elements, compounds, properties, atomic structure, investigations, data trends, and the periodic table.',
    'Question: ' + (payload.question || ''),
    'Expected guidance/model answer: ' + (payload.guidance || ''),
    'Keywords: ' + ((payload.keywords || []).join(', ') || '-'),
    'Student answer: ' + (payload.answer || ''),
    'Mark out of ' + maxMark + '. Award partial marks. Do not give full marks for one-word or vague answers.',
    'Score is 1 only if the answer earns at least 60% of the marks.',
    'Give feedback in two short sentences: what was right or missing, then one specific improvement.',
    'Return only JSON exactly like {"score":0,"mark":1,"maxMark":' + maxMark + ',"explanation":"feedback"}'
  ].join('\n\n');

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + GROQ_API_KEY},
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        {role: 'system', content: 'Return only JSON. Be strict but fair for a Year 8 Science answer.'},
        {role: 'user', content: prompt}
      ],
      temperature: 0,
      max_tokens: 350
    })
  });
  if(!response.ok){
    const detail = await response.text();
    throw new Error('Groq error ' + response.status + ': ' + detail.slice(0, 160));
  }
  const data = await response.json();
  const text = data && data.choices && data.choices[0] && data.choices[0].message
    ? data.choices[0].message.content
    : '';
  return normaliseMark(extractJson(text), maxMark);
}

async function markWithFreeAI(payload){
  const maxMark = payload.type === 'long' ? 5 : 3;
  const prompt = [
    'You are a fair but strict Year 8 Science teacher marking a student answer.',
    'Topic: elements, compounds, properties, atomic structure, investigations, data trends, and the periodic table.',
    'Question: ' + (payload.question || ''),
    'Expected guidance/model answer: ' + (payload.guidance || ''),
    'Keywords: ' + ((payload.keywords || []).join(', ') || '-'),
    'Student answer: ' + (payload.answer || ''),
    'Mark out of ' + maxMark + '. Award partial marks. Do not give full marks for one-word or vague answers.',
    'Score is 1 only if the answer earns at least 60% of the marks.',
    'Give feedback in two short sentences: what was right or missing, then one specific improvement.',
    'Return only JSON exactly like {"score":0,"mark":1,"maxMark":' + maxMark + ',"explanation":"feedback"}'
  ].join('\n\n');

  const response = await fetch(POLLINATIONS_ENDPOINT, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      model: 'openai',
      messages: [
        {role: 'system', content: 'Return only JSON. Be strict but fair for a Year 8 Science answer.'},
        {role: 'user', content: prompt}
      ],
      temperature: 0,
      max_tokens: 220
    })
  });
  if(!response.ok){
    const detail = await response.text();
    throw new Error('Free AI error ' + response.status + ': ' + detail.slice(0, 160));
  }
  const data = await response.json();
  const text = data && data.choices && data.choices[0] && data.choices[0].message
    ? data.choices[0].message.content
    : '';
  return normaliseMark(extractJson(text), maxMark);
}

async function markWithFreeTextAI(payload){
  const maxMark = payload.type === 'long' ? 5 : 3;
  const prompt = [
    'Return only JSON. You are a fair but strict Year 8 Science teacher marking a student answer.',
    'Question: ' + (payload.question || ''),
    'Expected answer: ' + (payload.guidance || ''),
    'Keywords: ' + ((payload.keywords || []).join(', ') || '-'),
    'Student answer: ' + (payload.answer || ''),
    'Mark out of ' + maxMark + '. Do not give full marks for one-word or vague answers.',
    'Return exactly {"score":0,"mark":1,"maxMark":' + maxMark + ',"explanation":"two short feedback sentences"}'
  ].join('\n\n');
  const response = await fetch('https://text.pollinations.ai/' + encodeURIComponent(prompt), {
    method: 'GET',
    headers: {'Accept': 'text/plain'}
  });
  if(!response.ok){
    const detail = await response.text();
    throw new Error('Free text AI error ' + response.status + ': ' + detail.slice(0, 160));
  }
  const text = await response.text();
  return normaliseMark(extractJson(text), maxMark);
}

async function markWithBestHostedAI(payload){
  try{
    if(GEMINI_API_KEY) return await markWithGemini(payload);
    if(GROQ_API_KEY) return await markWithGroq(payload);
    try{
      return await markWithFreeAI(payload);
    }catch(firstErr){
      try{
        return await markWithFreeTextAI(payload);
      }catch(secondErr){
        throw new Error(firstErr.message + ' | ' + secondErr.message);
      }
    }
  }catch(err){
    return markWithLocalFallback(payload, err.message);
  }
}

async function handleApi(req, res){
  if(req.method === 'OPTIONS'){
    sendJson(res, 204, {});
    return;
  }
  if(req.url === '/api/health'){
    sendJson(res, 200, {
      ok: true,
      provider: GEMINI_API_KEY ? 'Gemini' : GROQ_API_KEY ? 'Groq' : 'Free hosted AI',
      model: GEMINI_API_KEY ? GEMINI_MODEL : GROQ_API_KEY ? GROQ_MODEL : 'pollinations/openai',
      message: GEMINI_API_KEY ? 'Gemini backend ready' : GROQ_API_KEY ? 'Groq backend ready' : 'Free hosted AI ready, no API key set'
    });
    return;
  }
  if(req.url === '/api/mark' && req.method === 'POST'){
    try{
      const payload = JSON.parse(await readBody(req) || '{}');
      if(!payload.answer || !payload.question){
        sendJson(res, 400, {error: 'Missing answer or question'});
        return;
      }
      sendJson(res, 200, await markWithBestHostedAI(payload));
    }catch(err){
      sendJson(res, 200, markWithLocalFallback({}, err.message || 'AI marking failed'));
    }
    return;
  }
  sendJson(res, 404, {error: 'Not found'});
}

function serveStatic(req, res){
  const requestPath = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html';
  const filePath = path.resolve(ROOT, requestPath);
  if(!filePath.startsWith(ROOT)){
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  fs.readFile(filePath, (err, data) => {
    if(err){
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath);
    const type = ext === '.html' ? 'text/html; charset=utf-8'
      : ext === '.css' ? 'text/css; charset=utf-8'
      : ext === '.js' ? 'text/javascript; charset=utf-8'
      : 'application/octet-stream';
    res.writeHead(200, {'Content-Type': type});
    res.end(data);
  });
}

http.createServer((req, res) => {
  if(req.url.startsWith('/api/')){
    handleApi(req, res);
    return;
  }
  serveStatic(req, res);
}).listen(PORT, () => {
  console.log(`Science quiz running at http://localhost:${PORT}`);
});
