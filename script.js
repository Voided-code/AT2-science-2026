function $(id){return document.getElementById(id);}
function clamp(value,min,max){return Math.min(max,Math.max(min,value));}

var periodicInfo = {
  1:{name:'Hydrogen',mass:'1.008'},2:{name:'Helium',mass:'4.003'},3:{name:'Lithium',mass:'6.94'},4:{name:'Beryllium',mass:'9.012'},5:{name:'Boron',mass:'10.81'},6:{name:'Carbon',mass:'12.01'},7:{name:'Nitrogen',mass:'14.01'},8:{name:'Oxygen',mass:'16.00'},9:{name:'Fluorine',mass:'19.00'},10:{name:'Neon',mass:'20.18'},11:{name:'Sodium',mass:'22.99'},12:{name:'Magnesium',mass:'24.31'},13:{name:'Aluminium',mass:'26.98'},14:{name:'Silicon',mass:'28.09'},15:{name:'Phosphorus',mass:'30.97'},16:{name:'Sulfur',mass:'32.06'},17:{name:'Chlorine',mass:'35.45'},18:{name:'Argon',mass:'39.95'},19:{name:'Potassium',mass:'39.10'},20:{name:'Calcium',mass:'40.08'},21:{name:'Scandium',mass:'44.96'},22:{name:'Titanium',mass:'47.87'},23:{name:'Vanadium',mass:'50.94'},24:{name:'Chromium',mass:'52.00'},25:{name:'Manganese',mass:'54.94'},26:{name:'Iron',mass:'55.85'},27:{name:'Cobalt',mass:'58.93'},28:{name:'Nickel',mass:'58.69'},29:{name:'Copper',mass:'63.55'},30:{name:'Zinc',mass:'65.38'},31:{name:'Gallium',mass:'69.72'},32:{name:'Germanium',mass:'72.63'},33:{name:'Arsenic',mass:'74.92'},34:{name:'Selenium',mass:'78.97'},35:{name:'Bromine',mass:'79.90'},36:{name:'Krypton',mass:'83.80'},37:{name:'Rubidium',mass:'85.47'},38:{name:'Strontium',mass:'87.62'},39:{name:'Yttrium',mass:'88.91'},40:{name:'Zirconium',mass:'91.22'},41:{name:'Niobium',mass:'92.91'},42:{name:'Molybdenum',mass:'95.95'},43:{name:'Technetium',mass:'98.00'},44:{name:'Ruthenium',mass:'101.07'},45:{name:'Rhodium',mass:'102.91'},46:{name:'Palladium',mass:'106.42'},47:{name:'Silver',mass:'107.87'},48:{name:'Cadmium',mass:'112.41'},49:{name:'Indium',mass:'114.82'},50:{name:'Tin',mass:'118.71'},51:{name:'Antimony',mass:'121.76'},52:{name:'Tellurium',mass:'127.60'},53:{name:'Iodine',mass:'126.90'},54:{name:'Xenon',mass:'131.29'},55:{name:'Caesium',mass:'132.91'},56:{name:'Barium',mass:'137.33'},57:{name:'Lanthanum',mass:'138.91'},58:{name:'Cerium',mass:'140.12'},59:{name:'Praseodymium',mass:'140.91'},60:{name:'Neodymium',mass:'144.24'},61:{name:'Promethium',mass:'145.00'},62:{name:'Samarium',mass:'150.36'},63:{name:'Europium',mass:'151.96'},64:{name:'Gadolinium',mass:'157.25'},65:{name:'Terbium',mass:'158.93'},66:{name:'Dysprosium',mass:'162.50'},67:{name:'Holmium',mass:'164.93'},68:{name:'Erbium',mass:'167.26'},69:{name:'Thulium',mass:'168.93'},70:{name:'Ytterbium',mass:'173.05'},71:{name:'Lutetium',mass:'174.97'},72:{name:'Hafnium',mass:'178.49'},73:{name:'Tantalum',mass:'180.95'},74:{name:'Tungsten',mass:'183.84'},75:{name:'Rhenium',mass:'186.21'},76:{name:'Osmium',mass:'190.23'},77:{name:'Iridium',mass:'192.22'},78:{name:'Platinum',mass:'195.08'},79:{name:'Gold',mass:'196.97'},80:{name:'Mercury',mass:'200.59'},81:{name:'Thallium',mass:'204.38'},82:{name:'Lead',mass:'207.20'},83:{name:'Bismuth',mass:'208.98'},84:{name:'Polonium',mass:'209.00'},85:{name:'Astatine',mass:'210.00'},86:{name:'Radon',mass:'222.00'},87:{name:'Francium',mass:'223.00'},88:{name:'Radium',mass:'226.00'},89:{name:'Actinium',mass:'227.00'},90:{name:'Thorium',mass:'232.04'},91:{name:'Protactinium',mass:'231.04'},92:{name:'Uranium',mass:'238.03'},93:{name:'Neptunium',mass:'237.00'},94:{name:'Plutonium',mass:'244.00'},95:{name:'Americium',mass:'243.00'},96:{name:'Curium',mass:'247.00'},97:{name:'Berkelium',mass:'247.00'},98:{name:'Californium',mass:'251.00'},99:{name:'Einsteinium',mass:'252.00'},100:{name:'Fermium',mass:'257.00'},101:{name:'Mendelevium',mass:'258.00'},102:{name:'Nobelium',mass:'259.00'},103:{name:'Lawrencium',mass:'266.00'},104:{name:'Rutherfordium',mass:'267.00'},105:{name:'Dubnium',mass:'268.00'},106:{name:'Seaborgium',mass:'269.00'},107:{name:'Bohrium',mass:'270.00'},108:{name:'Hassium',mass:'269.00'},109:{name:'Meitnerium',mass:'278.00'},110:{name:'Darmstadtium',mass:'281.00'},111:{name:'Roentgenium',mass:'282.00'},112:{name:'Copernicium',mass:'285.00'},113:{name:'Nihonium',mass:'286.00'},114:{name:'Flerovium',mass:'289.00'},115:{name:'Moscovium',mass:'290.00'},116:{name:'Livermorium',mass:'293.00'},117:{name:'Tennessine',mass:'294.00'},118:{name:'Oganesson',mass:'294.00'}};

var interactiveElements = [
  {n:1,s:'H',group:1,period:1,category:'nonmetal',state:'Gas',conductivity:'Poor',use:'Water, acids and fuels'},
  {n:2,s:'He',group:18,period:1,category:'noble',state:'Gas',conductivity:'Poor',use:'Balloons and cooling'},
  {n:3,s:'Li',group:1,period:2,category:'metal',state:'Solid',conductivity:'Good',use:'Rechargeable batteries'},
  {n:4,s:'Be',group:2,period:2,category:'metal',state:'Solid',conductivity:'Good',use:'Strong lightweight alloys'},
  {n:5,s:'B',group:13,period:2,category:'metalloid',state:'Solid',conductivity:'Semi-conductor',use:'Borosilicate glass'},
  {n:6,s:'C',group:14,period:2,category:'nonmetal',state:'Solid',conductivity:'Varies',use:'Living things and graphite'},
  {n:7,s:'N',group:15,period:2,category:'nonmetal',state:'Gas',conductivity:'Poor',use:'Air and fertilisers'},
  {n:8,s:'O',group:16,period:2,category:'nonmetal',state:'Gas',conductivity:'Poor',use:'Breathing and combustion'},
  {n:9,s:'F',group:17,period:2,category:'nonmetal',state:'Gas',conductivity:'Poor',use:'Fluoride compounds'},
  {n:10,s:'Ne',group:18,period:2,category:'noble',state:'Gas',conductivity:'Poor',use:'Signs and lasers'},
  {n:11,s:'Na',group:1,period:3,category:'metal',state:'Solid',conductivity:'Good',use:'Salt compounds'},
  {n:12,s:'Mg',group:2,period:3,category:'metal',state:'Solid',conductivity:'Good',use:'Light alloys and flares'},
  {n:13,s:'Al',group:13,period:3,category:'metal',state:'Solid',conductivity:'Good',use:'Cans, foil and aircraft'},
  {n:14,s:'Si',group:14,period:3,category:'metalloid',state:'Solid',conductivity:'Semi-conductor',use:'Computer chips and glass'},
  {n:15,s:'P',group:15,period:3,category:'nonmetal',state:'Solid',conductivity:'Poor',use:'Fertilisers and matches'},
  {n:16,s:'S',group:16,period:3,category:'nonmetal',state:'Solid',conductivity:'Poor',use:'Fertilisers and rubber'},
  {n:17,s:'Cl',group:17,period:3,category:'nonmetal',state:'Gas',conductivity:'Poor',use:'Disinfectants and salts'},
  {n:18,s:'Ar',group:18,period:3,category:'noble',state:'Gas',conductivity:'Poor',use:'Light bulbs and welding'},
  {n:19,s:'K',group:1,period:4,category:'metal',state:'Solid',conductivity:'Good',use:'Fertilisers'},
  {n:20,s:'Ca',group:2,period:4,category:'metal',state:'Solid',conductivity:'Good',use:'Bones, limestone and cement'},
  {n:21,s:'Sc',group:3,period:4,category:'metal',state:'Solid',conductivity:'Good',use:'Aluminium alloys'},
  {n:22,s:'Ti',group:4,period:4,category:'metal',state:'Solid',conductivity:'Good',use:'Aircraft and implants'},
  {n:23,s:'V',group:5,period:4,category:'metal',state:'Solid',conductivity:'Good',use:'Steel alloys'},
  {n:24,s:'Cr',group:6,period:4,category:'metal',state:'Solid',conductivity:'Good',use:'Stainless steel'},
  {n:25,s:'Mn',group:7,period:4,category:'metal',state:'Solid',conductivity:'Good',use:'Steel making'},
  {n:26,s:'Fe',group:8,period:4,category:'metal',state:'Solid',conductivity:'Good',use:'Steel, buildings and tools'},
  {n:27,s:'Co',group:9,period:4,category:'metal',state:'Solid',conductivity:'Good',use:'Magnets and batteries'},
  {n:28,s:'Ni',group:10,period:4,category:'metal',state:'Solid',conductivity:'Good',use:'Coins and stainless steel'},
  {n:29,s:'Cu',group:11,period:4,category:'metal',state:'Solid',conductivity:'Excellent',use:'Electrical wiring'},
  {n:30,s:'Zn',group:12,period:4,category:'metal',state:'Solid',conductivity:'Good',use:'Galvanising iron'},
  {n:31,s:'Ga',group:13,period:4,category:'metal',state:'Solid',conductivity:'Good',use:'Semiconductors'},
  {n:32,s:'Ge',group:14,period:4,category:'metalloid',state:'Solid',conductivity:'Semi-conductor',use:'Electronics and optics'},
  {n:33,s:'As',group:15,period:4,category:'metalloid',state:'Solid',conductivity:'Semi-conductor',use:'Special semiconductors'},
  {n:34,s:'Se',group:16,period:4,category:'nonmetal',state:'Solid',conductivity:'Poor',use:'Photocells and glass'},
  {n:35,s:'Br',group:17,period:4,category:'nonmetal',state:'Liquid',conductivity:'Poor',use:'Flame retardants'},
  {n:36,s:'Kr',group:18,period:4,category:'noble',state:'Gas',conductivity:'Poor',use:'Lighting'}
];

var extraElementLayout = [
  [37,'Rb',1,5],[38,'Sr',2,5],[39,'Y',3,5],[40,'Zr',4,5],[41,'Nb',5,5],[42,'Mo',6,5],[43,'Tc',7,5],[44,'Ru',8,5],[45,'Rh',9,5],[46,'Pd',10,5],[47,'Ag',11,5],[48,'Cd',12,5],[49,'In',13,5],[50,'Sn',14,5],[51,'Sb',15,5],[52,'Te',16,5],[53,'I',17,5],[54,'Xe',18,5],
  [55,'Cs',1,6],[56,'Ba',2,6],[57,'La',4,8],[58,'Ce',5,8],[59,'Pr',6,8],[60,'Nd',7,8],[61,'Pm',8,8],[62,'Sm',9,8],[63,'Eu',10,8],[64,'Gd',11,8],[65,'Tb',12,8],[66,'Dy',13,8],[67,'Ho',14,8],[68,'Er',15,8],[69,'Tm',16,8],[70,'Yb',17,8],[71,'Lu',18,8],
  [72,'Hf',4,6],[73,'Ta',5,6],[74,'W',6,6],[75,'Re',7,6],[76,'Os',8,6],[77,'Ir',9,6],[78,'Pt',10,6],[79,'Au',11,6],[80,'Hg',12,6],[81,'Tl',13,6],[82,'Pb',14,6],[83,'Bi',15,6],[84,'Po',16,6],[85,'At',17,6],[86,'Rn',18,6],
  [87,'Fr',1,7],[88,'Ra',2,7],[89,'Ac',4,9],[90,'Th',5,9],[91,'Pa',6,9],[92,'U',7,9],[93,'Np',8,9],[94,'Pu',9,9],[95,'Am',10,9],[96,'Cm',11,9],[97,'Bk',12,9],[98,'Cf',13,9],[99,'Es',14,9],[100,'Fm',15,9],[101,'Md',16,9],[102,'No',17,9],[103,'Lr',18,9],
  [104,'Rf',4,7],[105,'Db',5,7],[106,'Sg',6,7],[107,'Bh',7,7],[108,'Hs',8,7],[109,'Mt',9,7],[110,'Ds',10,7],[111,'Rg',11,7],[112,'Cn',12,7],[113,'Nh',13,7],[114,'Fl',14,7],[115,'Mc',15,7],[116,'Lv',16,7],[117,'Ts',17,7],[118,'Og',18,7]
];

function inferElementCategory(number, group){
  if([2,10,18,36,54,86,118].indexOf(number) !== -1) return 'noble';
  if([5,14,32,33,51,52,84].indexOf(number) !== -1) return 'metalloid';
  if([1,6,7,8,9,15,16,17,34,35,53,85,117].indexOf(number) !== -1) return 'nonmetal';
  return 'metal';
}

function inferElementState(number){
  if([1,2,7,8,9,10,17,18,36,54,86,118].indexOf(number) !== -1) return 'Gas';
  if([35,80].indexOf(number) !== -1) return 'Liquid';
  return 'Solid';
}

function inferElementConductivity(category){
  if(category === 'metal') return 'Good';
  if(category === 'metalloid') return 'Semi-conductor';
  return 'Poor';
}

function inferElementUse(number, category){
  var uses = {
    47:'Jewellery, mirrors and electronics',79:'Jewellery and electronics',80:'Thermometers and lamps',
    82:'Batteries and radiation shielding',92:'Nuclear fuel',53:'Disinfectants and nutrition',
    78:'Catalysts and jewellery',74:'Light bulb filaments and tools'
  };
  if(uses[number]) return uses[number];
  if(category === 'metal') return 'Alloys, structures or electronics';
  if(category === 'metalloid') return 'Semiconductors or special materials';
  if(category === 'noble') return 'Lighting or specialist gases';
  return 'Compounds and everyday materials';
}

extraElementLayout.forEach(function(item){
  var category = inferElementCategory(item[0], item[2]);
  interactiveElements.push({
    n:item[0],
    s:item[1],
    group:item[2],
    period:item[3],
    category:category,
    state:inferElementState(item[0]),
    conductivity:inferElementConductivity(category),
    use:inferElementUse(item[0], category)
  });
});

var selectedElementNumber = 6;
var selectedPeriodicProperty = 'conductivity';

function enhancePeriodicTable(){
  var cells = document.querySelectorAll('.periodic-table .element');
  cells.forEach(function(cell){
    var symbolEl = cell.querySelector('strong');
    var numberEl = cell.querySelector('span');
    if(!symbolEl || !numberEl) return;
    var number = parseInt(numberEl.textContent, 10);
    if(!number || !periodicInfo[number]) return;
    var info = periodicInfo[number];
    cell.title = info.name + ' · Atomic number ' + number + ' · Mass ' + info.mass;
  });
}

function getElementInfo(element){
  return periodicInfo[element.n] || {name:'Unknown',mass:'-'};
}

function getPeriodicPropertyValue(element, property){
  var info = getElementInfo(element);
  if(property === 'mass') return info.mass;
  if(property === 'protons') return element.n + ' p+';
  if(property === 'state') return element.state;
  if(property === 'shells') return getElectronShells(element.n).join('-');
  if(property === 'uses') return element.use;
  return element.conductivity;
}

function getPeriodicPropertyLabel(property){
  var labels = {
    conductivity: 'Conductivity',
    mass: 'Atomic mass',
    protons: 'Proton number',
    state: 'State',
    shells: 'Electron shells',
    uses: 'Common use'
  };
  return labels[property] || 'Property';
}

function estimateNeutrons(element){
  var info = getElementInfo(element);
  var roundedMass = Math.round(parseFloat(info.mass));
  if(!Number.isFinite(roundedMass)) return '-';
  return Math.max(0, roundedMass - element.n);
}

function renderInteractivePeriodicTable(){
  var table = $('periodicTable');
  var details = $('elementDetails');
  if(!table || !details) return;

  document.querySelectorAll('.property-tab').forEach(function(button){
    button.classList.toggle('active', button.dataset.property === selectedPeriodicProperty);
    button.onclick = function(){
      selectedPeriodicProperty = button.dataset.property;
      renderInteractivePeriodicTable();
    };
  });

  table.innerHTML = interactiveElements.map(function(element){
    var info = getElementInfo(element);
    var activeClass = element.n === selectedElementNumber ? ' selected' : '';
    var propertyValue = getPeriodicPropertyValue(element, selectedPeriodicProperty);
    return '<button class="element-tile '+element.category+activeClass+'" style="grid-column:'+element.group+';grid-row:'+element.period+'" onclick="selectElement('+element.n+')" title="'+escapeHtml(info.name)+'">' +
      '<span class="element-number">'+element.n+'</span>' +
      '<strong>'+escapeHtml(element.s)+'</strong>' +
      '<span class="element-name">'+escapeHtml(info.name)+'</span>' +
      '<span class="element-property">'+escapeHtml(propertyValue)+'</span>' +
    '</button>';
  }).join('');

  var selected = interactiveElements.find(function(element){return element.n === selectedElementNumber;}) || interactiveElements[0];
  var info = getElementInfo(selected);
  var electronShells = getElectronShells(selected.n).join(', ');
  details.innerHTML =
    '<div class="element-detail-top">' +
      '<div class="detail-symbol '+selected.category+'">'+escapeHtml(selected.s)+'</div>' +
      '<div><h3>'+escapeHtml(info.name)+'</h3><p>'+escapeHtml(selected.category.replace(/^./, function(letter){return letter.toUpperCase();}))+' element</p></div>' +
    '</div>' +
    '<dl class="property-grid">' +
      '<div><dt>Proton number</dt><dd>'+selected.n+'</dd></div>' +
      '<div><dt>Electrons</dt><dd>'+selected.n+' in a neutral atom</dd></div>' +
      '<div><dt>Approx. neutrons</dt><dd>'+estimateNeutrons(selected)+'</dd></div>' +
      '<div><dt>Atomic mass</dt><dd>'+escapeHtml(info.mass)+'</dd></div>' +
      '<div><dt>Group</dt><dd>'+selected.group+'</dd></div>' +
      '<div><dt>Period</dt><dd>'+selected.period+'</dd></div>' +
      '<div><dt>Electron shells</dt><dd>'+electronShells+'</dd></div>' +
      '<div><dt>Conductivity</dt><dd>'+escapeHtml(selected.conductivity)+'</dd></div>' +
      '<div><dt>State at room temp.</dt><dd>'+escapeHtml(selected.state)+'</dd></div>' +
      '<div><dt>Common use</dt><dd>'+escapeHtml(selected.use)+'</dd></div>' +
      '<div><dt>Current view</dt><dd>'+escapeHtml(getPeriodicPropertyLabel(selectedPeriodicProperty))+': '+escapeHtml(getPeriodicPropertyValue(selected, selectedPeriodicProperty))+'</dd></div>' +
    '</dl>';
}

function getElectronShells(protonNumber){
  var remaining = protonNumber;
  var capacities = [2,8,8,18];
  var shells = [];
  capacities.forEach(function(capacity){
    if(remaining <= 0) return;
    var used = Math.min(capacity, remaining);
    shells.push(used);
    remaining -= used;
  });
  if(remaining > 0) shells.push(remaining);
  return shells;
}

function selectElement(number){
  selectedElementNumber = number;
  renderInteractivePeriodicTable();
}

function setupPeriodicToggle(){
  var toggle = $('periodicToggle');
  var content = $('periodicContent');
  if(!toggle || !content) return;
  toggle.addEventListener('click', function(){
    var isCollapsed = content.classList.toggle('collapsed');
    toggle.setAttribute('aria-expanded', String(!isCollapsed));
    var icon = toggle.querySelector('.periodic-toggle-icon');
    if(icon) icon.textContent = isCollapsed ? '+' : '-';
    if(!isCollapsed) renderInteractivePeriodicTable();
  });
}

// AI GRADING OPTIONS (in priority order)

// 1. PUTER CLOUD AI (NO INSTALL, NO API KEY)
var puterAiAvailable = false;

// 2. LOCAL OLLAMA (FREE, NO INTERNET, FASTEST - optional)
var OLLAMA_ENDPOINT = 'http://localhost:11434/api/generate'; // local Ollama endpoint
var OLLAMA_MODEL = 'llama2';
var ollamaAvailable = false;
var browserAiAvailable = false;
var miniMarkerAvailable = true;

// 3. HUGGING FACE FREE CLOUD API (legacy fallback)
// Using a free open-source model endpoint (rate limited but free)
var HF_MODEL_ENDPOINT = 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1';
var hfAvailable = true; // always try unless rate limited
var POLLINATIONS_ENDPOINT = 'https://text.pollinations.ai/openai';
var pollinationsAvailable = true;

// 4. OPENAI (optional, if you have credits)
var OPENAI_API_KEY_PLAINTEXT = ''; // paste your OpenAI key here if you have credits
var ENCRYPTED_OPENAI_KEY = ''; // OR paste the encrypted JSON blob here
var apiKeyValid = false;
var lastAiProvider = '';

function b64ToBuf(b64){
  return Uint8Array.from(atob(b64), c=>c.charCodeAt(0));
}

function bufToB64(buf){
  return btoa(String.fromCharCode.apply(null, new Uint8Array(buf)));
}

async function deriveKeyFromPass(pass){
  const enc = new TextEncoder().encode(pass);
  const hash = await crypto.subtle.digest('SHA-256', enc);
  return crypto.subtle.importKey('raw', hash, {name:'AES-GCM'}, false, ['decrypt']);
}

async function decryptOpenAIKey(encJsonString, passphrase){
  try{
    const obj = JSON.parse(encJsonString);
    const iv = b64ToBuf(obj.iv);
    const tag = b64ToBuf(obj.tag);
    const data = b64ToBuf(obj.data);
    // concatenate data + tag for WebCrypto
    const cipherBytes = new Uint8Array(data.length + tag.length);
    cipherBytes.set(data, 0);
    cipherBytes.set(tag, data.length);
    const key = await deriveKeyFromPass(passphrase);
    const plainBuf = await crypto.subtle.decrypt({name:'AES-GCM', iv: iv, tagLength: 128}, key, cipherBytes);
    return new TextDecoder().decode(plainBuf);
  }catch(e){
    throw new Error('Decryption failed: '+e.message);
  }
}

// Grade using local Ollama
async function gradeWithOllama(answer, guidance){
  const prompt = `You are a Year 8 Science teacher grading student answers.\n\n${assessmentContext}\n\nExpected guidance: ${guidance}\n\nStudent answer: ${answer}\n\nGrade this answer as either correct (1) or incorrect (0). Give helpful teaching feedback: say what was right or missing, then give one specific way to improve the answer. Keep it to 2 short sentences.\nRespond ONLY with valid JSON in this exact format:\n{"score": 0 or 1, "explanation": "2 short instructive sentences"}\n\nJSON:`;
  
  const res = await fetch(OLLAMA_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: OLLAMA_MODEL,
      prompt: prompt,
      stream: false,
      temperature: 0,
      num_predict: 100
    })
  });
  
  if(!res.ok){
    throw new Error('Ollama error '+res.status);
  }
  
  const data = await res.json();
  const txt = data.response ? data.response.trim() : '';
  try{
    return JSON.parse(txt);
  } catch(e){
    return { score: 0, explanation: 'Ollama: '+txt.substring(0, 80) };
  }
}

function checkPuterAiAvailable(){
  return !!(window.puter && window.puter.ai && typeof window.puter.ai.chat === 'function');
}

async function gradeWithPuterAI(answer, guidance){
  if(!checkPuterAiAvailable()) throw new Error('Puter AI is not loaded');
  var prompt = 'You are a Year 8 Science teacher grading a quiz answer.\n\n' +
    assessmentContext + '\n\n' +
    'Expected guidance: ' + guidance + '\n\n' +
    'Student answer: ' + answer + '\n\n' +
    'Mark the answer correct if it shows the same scientific idea, even if the wording is different.\n' +
    'Give helpful teaching feedback: say what was right or missing, then give one specific way to improve the answer. Keep it to 2 short sentences.\n' +
    'Return ONLY valid JSON in this format: {"score":0,"explanation":"2 short instructive sentences"}';
  var response = await window.puter.ai.chat(prompt, {model: 'gpt-4o-mini'});
  var txt = typeof response === 'string' ? response : (response && response.message && response.message.content) || String(response || '');
  txt = txt.trim().replace(/^```json\s*/i,'').replace(/^```\s*/,'').replace(/\s*```$/,'');
  try{
    return JSON.parse(txt);
  }catch(e){
    return {score: /correct/i.test(txt) && !/incorrect|not correct/i.test(txt) ? 1 : 0, explanation: txt.slice(0, 120) || 'AI returned feedback but not JSON.'};
  }
}

async function gradeWithPollinationsAI(answer, guidance){
  var body = {
    model: 'openai',
    messages: [
      {
        role: 'system',
        content: 'You are a Year 8 Science teacher. Return only JSON: {"score":0|1,"explanation":"2 short instructive sentences"}.'
      },
      {
        role: 'user',
        content: assessmentContext + '\n\nExpected guidance: ' + guidance + '\n\nStudent answer: ' + answer + '\n\nMark correct if the same science idea is shown. Explain what was right or missing and give one specific improvement.'
      }
    ],
    temperature: 0,
    max_tokens: 180
  };
  var res = await fetch(POLLINATIONS_ENDPOINT, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(body)
  });
  if(!res.ok) throw new Error('Pollinations error '+res.status);
  var data = await res.json();
  var txt = data && data.choices && data.choices[0] && data.choices[0].message ? data.choices[0].message.content : '';
  txt = String(txt || '').trim().replace(/^```json\s*/i,'').replace(/^```\s*/,'').replace(/\s*```$/,'');
  try{
    return JSON.parse(txt);
  }catch(e){
    return {score: /correct/i.test(txt) && !/incorrect|not correct/i.test(txt) ? 1 : 0, explanation: txt.slice(0, 140) || 'AI returned feedback but not JSON.'};
  }
}

function getBrowserLanguageModel(){
  if(window.LanguageModel && typeof window.LanguageModel.availability === 'function'){
    return window.LanguageModel;
  }
  if(window.ai && window.ai.languageModel && typeof window.ai.languageModel.capabilities === 'function'){
    return window.ai.languageModel;
  }
  return null;
}

async function checkBrowserAiAvailable(){
  try{
    var model = getBrowserLanguageModel();
    if(!model) return false;
    if(model.availability){
      var availability = await model.availability();
      return availability === 'available' || availability === 'readily';
    }
    var capabilities = await model.capabilities();
    return !!(capabilities && capabilities.available !== 'no');
  }catch(e){
    return false;
  }
}

async function gradeWithBrowserAI(answer, guidance){
  var model = getBrowserLanguageModel();
  if(!model) throw new Error('Browser AI is not available');

  var prompt = 'You are a Year 8 Science teacher. Grade the student answer as correct or incorrect.\n\n' +
    assessmentContext + '\n\n' +
    'Expected guidance: ' + guidance + '\n\n' +
    'Student answer: ' + answer + '\n\n' +
    'Give helpful teaching feedback: say what was right or missing, then give one specific way to improve the answer. Keep it to 2 short sentences.\n' +
    'Return only JSON like {"score":1,"explanation":"2 short instructive sentences"}';

  var session = null;
  if(model.create){
    session = await model.create({temperature: 0});
  } else if(model.createTextSession){
    session = await model.createTextSession({temperature: 0});
  }
  if(!session || !session.prompt) throw new Error('Browser AI session could not start');

  var txt = await session.prompt(prompt);
  if(session.destroy) session.destroy();
  try{
    return JSON.parse(String(txt).trim());
  }catch(e){
    return {score: /correct/i.test(txt) && !/incorrect|not correct/i.test(txt) ? 1 : 0, explanation: String(txt).slice(0, 120)};
  }
}

// Grade using OpenAI (if API key available)
async function clientGradeWithOpenAI(answer, guidance){
  var apiKey = null;
  if(OPENAI_API_KEY_PLAINTEXT){
    apiKey = OPENAI_API_KEY_PLAINTEXT;
  } else if(ENCRYPTED_OPENAI_KEY){
    const pass = prompt('Enter decryption passphrase to use OpenAI (not stored):');
    if(!pass) throw new Error('No passphrase entered');
    apiKey = await decryptOpenAIKey(ENCRYPTED_OPENAI_KEY, pass);
  } else {
    throw new Error('No OpenAI API key available');
  }
  const body = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a Year 8 Science teacher. Return JSON: {"score":0|1, "explanation":"2 short instructive sentences"}. Explain what was right or missing and give one specific improvement.' },
      { role: 'user', content: `${assessmentContext}\n\nGuidance: ${guidance}\n\nStudent answer: ${answer}\n\nMark correct if the same science idea is shown and it fits the assessed outcomes. Return only valid JSON.` }
    ],
    max_tokens: 200,
    temperature: 0
  };
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiKey },
    body: JSON.stringify(body)
  });
  if(!res.ok){
    const errData = await res.text();
    throw new Error('OpenAI API error '+res.status+': '+(errData.substring(0, 100)));
  }
  const data = await res.json();
  if(data.error){
    throw new Error('OpenAI error: '+(data.error.message || JSON.stringify(data.error)));
  }
  const txt = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content ? data.choices[0].message.content.trim() : '';
  try{ return JSON.parse(txt); } catch(e){ return { score:0, explanation: txt || 'API returned: '+txt.substring(0, 50) }; }
}

var questionBank = buildQuestionBank();
var totals={answered:0,correct:0};
var currentQuestionIndex=0;
var questionCount=0;
var questionHistory=[];
var historyPosition=0;
var answeredLast=false;
var autoNextTimeout = null;
var debugMenuOpen = false;
var aiEnabled = true;
var seenQuestionKeys = {};
var generatedQuestionCount = 0;
var aiConnectionTestResults = [];
var aiConnectionTesting = false;

var assessmentContext = [
  'NESA syllabus outcomes to be assessed:',
  '- SC4-PRT-01: explains how uses of elements and compounds are influenced by scientific understanding and discoveries relating to their properties.',
  '- SC5-WS-01: selects and uses scientific tools and instruments for accurate observations.',
  '- SC4-WS-02: identifies questions and makes predictions to guide scientific investigations.',
  '- SC4-WS-04: follows a planned procedure to undertake safe and valid investigations.',
  '- SC4-WS-05: uses a variety of ways to process and represent data.',
  '- SC4-WS-06: uses data to identify trends, patterns and relationships, and draw conclusions.',
  'Topic outcomes assessed:',
  '1. Identify common elements in everyday objects.',
  '2. Investigate and compare physical properties of metals, non-metals and metalloids.',
  '3. Explain how properties of elements, compounds and alloys relate to their uses.',
  '4. Identify the atom as the smallest unit of an element that retains the properties of that element.',
  '5. Identify protons, neutrons and electrons as subatomic particles.',
  '6. Describe the location, relative charge and mass of protons, neutrons and electrons using the planetary atomic model.',
  '7. Model the atomic structure of the first 18 elements and connect changes to increasing atomic number.',
  '8. Outline how models of atomic structure have changed over time.',
  '9. Explain how new technologies and observations led to a more detailed understanding of atomic structure.',
  '10. Outline patterns and relationships in the periodic table, including reactivity.',
  '11. Predict element properties from their position in the periodic table.',
  '12. Identify unique symbols of elements.',
  '14. Investigate tests used to identify metal and non-metal elements.'
].join('\n');

// Check if Ollama is running locally
async function checkOllamaAvailable(){
  try {
    const res = await fetch('http://localhost:11434/api/tags', { method: 'GET' });
    return res.ok;
  } catch(e) {
    return false;
  }
}

// Validate OpenAI API key (if using OpenAI)
async function validateOpenAIKey(){
  try {
    var apiKey = OPENAI_API_KEY_PLAINTEXT || (ENCRYPTED_OPENAI_KEY ? null : null);
    if(!apiKey) return false;
    const res = await fetch('https://api.openai.com/v1/models', {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + apiKey }
    });
    return res.ok;
  } catch(e) {
    return false;
  }
}

function buildQuestionBank(){
  var bank=[];

  var matter=[
    {question:'Sam dissolved table salt in water and then evaporated the water. Which statement best describes the original mixture?',choices:['It was a heterogeneous mixture','It was a homogeneous mixture','It was a pure element','It was a compound'],answer:1,explanation:'Salt dissolved evenly in water, making a homogeneous mixture.'},
    {question:'A student says that a sample containing only one type of atom is a compound. What is the correct classification?',choices:['Element','Mixture','Solution','Alloy'],answer:0,explanation:'A substance made of only one kind of atom is an element.'},
    {question:'A bottle is labelled H2O. What does this formula represent?',choices:['Water','Hydrogen gas','Oxygen gas','Hydrogen peroxide'],answer:0,explanation:'H2O is the chemical formula for water, a compound of hydrogen and oxygen.'},
    {question:'One sample is made of only O2 molecules. How should this sample be described?',choices:['Element','Compound','Mixture','Alloy'],answer:0,explanation:'O2 is comprised of only oxygen atoms, so it is an element.'},
    {question:'A student places crushed rock and iron filings into water and then uses a magnet to separate them. This is an example of:',choices:['A heterogeneous mixture','A homogeneous mixture','A compound','A pure substance'],answer:0,explanation:'The parts remain physically separate, so it is a heterogeneous mixture.'},
    {question:'Which description fits gold metal?',choices:['Element','Compound','Mixture','Solution'],answer:0,explanation:'Gold is an element made of only gold atoms.'},
    {question:'Which description fits sodium chloride (table salt)?',choices:['Compound','Element','Mixture','Pure gas'],answer:0,explanation:'Sodium chloride is a compound made from sodium and chlorine atoms.'},
    {question:'When sugar dissolves in water and can be recovered by evaporation, the process is:',choices:['Physical change','Chemical change','Nuclear change','Biological change'],answer:0,explanation:'The sugar remains the same substance, so the change is physical.'},
    {question:'Paper burns and leaves ash behind. This is best described as:',choices:['Chemical change','Physical change','Reversible change','Dissolution'],answer:0,explanation:'Burning paper produces new substances, so it is a chemical change.'},
    {question:'A clear, uniform vinegar solution is an example of a:',choices:['Homogeneous mixture','Heterogeneous mixture','Element','Compound'],answer:0,explanation:'Vinegar is evenly mixed, making it a homogeneous mixture.'},
    {question:'Which of these is not matter?',choices:['Heat','Water','Air','Sand'],answer:0,explanation:'Heat is energy, not matter.'},
    {question:'Which sample can be separated by physical methods without changing the substances?',choices:['Salt water','Carbon dioxide','Gold','Helium'],answer:0,explanation:'Salt water is a mixture that can be separated physically.'},
    {question:'Which term describes a material made from two or more metals combined?',choices:['Alloy','Compound','Element','Gas'],answer:0,explanation:'An alloy is a mixture of metals.'},
    {question:'Which of these is a chemical formula?',choices:['CO2','Bronze','Air','Steel'],answer:0,explanation:'CO2 is the chemical formula for carbon dioxide.'},
    {question:'Which is a physical property of a substance?',choices:['Colour','Reactivity','Flammability','Oxidation state'],answer:0,explanation:'Colour is a physical property that can be observed without changing the substance.'},
    {question:'Which is a chemical property?',choices:['Flammability','Melting point','Density','Colour'],answer:0,explanation:'Flammability describes how a substance reacts chemically.'}
  ];
  matter.forEach(function(item){ bank.push({topic:'Matter',outcomes:['SC4-PRT-01'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});});

  var atomic=[
    {question:'A neutral atom has 8 protons. How many electrons does it also have?',choices:['8','6','10','2'],answer:0,explanation:'A neutral atom has equal numbers of protons and electrons.'},
    {question:'An element has atomic number 12. What does this number tell you?',choices:['It has 12 protons','It has 12 neutrons','It has 12 atoms','It has 12 molecules'],answer:0,explanation:'Atomic number equals the number of protons in the atom.'},
    {question:'If an atom has equal numbers of protons and electrons, the atom is:',choices:['Neutral','Positive','Negative','A molecule'],answer:0,explanation:'Equal charges cancel and make the atom neutral.'},
    {question:'Which particles are found in the nucleus of every atom?',choices:['Protons and neutrons','Electrons and protons','Electrons and neutrons','Only electrons'],answer:0,explanation:'The nucleus contains protons and neutrons.'},
    {question:'Which particle is negatively charged and orbits the nucleus?',choices:['Electron','Proton','Neutron','Photon'],answer:0,explanation:'Electrons are negatively charged and move around the nucleus.'},
    {question:'Which particle has no charge?',choices:['Neutron','Proton','Electron','Atom'],answer:0,explanation:'Neutrons are electrically neutral.'},
    {question:'In the planetary model, electrons are arranged in:',choices:['Shells','Bones','Rings','Clouds'],answer:0,explanation:'Electrons occupy shells around the nucleus in this model.'},
    {question:'Which element is most likely represented by an atom with 2 protons?',choices:['Helium','Oxygen','Hydrogen','Carbon'],answer:0,explanation:'Helium has atomic number 2 and therefore 2 protons.'},
    {question:'To make a positive ion from a neutral sodium atom, you remove one:',choices:['Electron','Proton','Neutron','Nucleus'],answer:0,explanation:'Removing an electron leaves a positive ion.'},
    {question:'Which subatomic particles have almost equal mass?',choices:['Proton and neutron','Electron and proton','Electron and neutron','Electron and atom'],answer:0,explanation:'Protons and neutrons have similar mass.'},
    {question:'Which scientist proposed electrons in fixed orbits around the nucleus?',choices:['Bohr','Dalton','Thomson','Rutherford'],answer:0,explanation:'Niels Bohr suggested electrons orbit the nucleus in shells.'},
    {question:'Which scientist discovered the electron using cathode rays?',choices:['Thomson','Bohr','Rutherford','Chadwick'],answer:0,explanation:'J.J. Thomson discovered the electron.'},
    {question:'Which scientist discovered the neutron?',choices:['Chadwick','Bohr','Thomson','Rutherford'],answer:0,explanation:'James Chadwick discovered the neutron in 1932.'},
    {question:'Which particle is exchanged during ionic bonding?',choices:['Electron','Proton','Neutron','Molecule'],answer:0,explanation:'Ionic bonds form when electrons are transferred between atoms.'},
    {question:'Which part of the atom contains most of its mass?',choices:['Nucleus','Electron cloud','Outer shell','Valence shell'],answer:0,explanation:'The nucleus contains protons and neutrons and most of the atom\'s mass.'}
  ];
  atomic.forEach(function(item){ bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});});

  var history=[
    {question:'An ancient philosopher named his tiny particles atomos. Who was he?',choices:['Bohr','Rutherford','Democritus','Thomson'],answer:2,explanation:'Democritus proposed that matter was made of indivisible particles called atomos.'},
    {question:'A model showed electrons in a cloud of positive charge. Which atomic model was this?',choices:['Plum pudding','Bohr model','Dalton model','Modern model'],answer:0,explanation:'Thomson\'s plum pudding model pictured electrons embedded in a positive cloud.'},
    {question:'A gold foil experiment revealed a small dense nucleus. Who performed it?',choices:['Rutherford','Thomson','Bohr','Dalton'],answer:0,explanation:'Rutherford used the gold foil experiment to discover the nucleus.'},
    {question:'Which scientist discovered the electron with a cathode ray tube?',choices:['Thomson','Bohr','Rutherford','Chadwick'],answer:0,explanation:'J.J. Thomson discovered the electron using cathode rays.'},
    {question:'Which scientist discovered the neutron in 1932?',choices:['Chadwick','Bohr','Thomson','Rutherford'],answer:0,explanation:'James Chadwick discovered the neutron.'},
    {question:'Which model pictured electrons in fixed shells around the nucleus?',choices:['Bohr model','Plum pudding','Dalton model','Modern model'],answer:0,explanation:'The Bohr model placed electrons in fixed orbits or shells.'},
    {question:'Dalton imagined atoms as tiny indivisible spheres. What was this model called?',choices:['Dalton\'s model','Bohr model','Plum pudding','Quantum model'],answer:0,explanation:'Dalton described atoms as tiny indivisible spheres.'},
    {question:'Which model came directly after the plum pudding model?',choices:['Bohr model','Dalton\'s model','Quantum model','Nuclear model'],answer:0,explanation:'The Bohr model followed Thomson\'s plum pudding model.'}
  ];
  history.forEach(function(item){ bank.push({topic:'History',outcomes:['SC4-PRT-01'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});});

  var periodic=[
    {question:'A column of elements with similar chemistry is called what?',choices:['Group','Period','Row','Block'],answer:0,explanation:'Columns on the periodic table are called groups.'},
    {question:'The noble gas in period 2 is which element?',choices:['Neon','Argon','Helium','Krypton'],answer:0,explanation:'Neon is the period 2 noble gas.'},
    {question:'Which element is in group 1 and period 3?',choices:['Sodium','Lithium','Potassium','Magnesium'],answer:0,explanation:'Sodium is in group 1, period 3.'},
    {question:'A student checks the symbol K on the periodic table. Which element is it?',choices:['Potassium','Krypton','Calcium','Sulfur'],answer:0,explanation:'K is the chemical symbol for potassium.'},
    {question:'An element has atomic number 8. Which one is it?',choices:['Oxygen','Carbon','Nitrogen','Fluorine'],answer:0,explanation:'Oxygen is element number 8.'},
    {question:'Which period contains the element chlorine?',choices:['Period 3','Period 2','Period 4','Period 1'],answer:0,explanation:'Chlorine is in period 3 of the periodic table.'},
    {question:'Which element is a metalloid commonly used in computer chips?',choices:['Silicon','Oxygen','Iron','Sodium'],answer:0,explanation:'Silicon is a metalloid used in electronics.'},
    {question:'Which group contains the noble gases?',choices:['18','17','1','2'],answer:0,explanation:'Group 18 contains the noble gases.'},
    {question:'Argon is unreactive because it is in which part of the periodic table?',choices:['Group 18','Group 1','Period 2','Transition metals'],answer:0,explanation:'Argon is a noble gas in group 18 and is unreactive.'},
    {question:'Elements in the same period share the same number of:',choices:['Electron shells','Protons','Neutrons','Molecules'],answer:0,explanation:'Elements in a period have the same number of electron shells.'},
    {question:'Which element is in group 17 and period 3?',choices:['Chlorine','Neon','Argon','Potassium'],answer:0,explanation:'Chlorine is a group 17 element in period 3.'},
    {question:'Which element is a liquid metal at room temperature?',choices:['Mercury','Iron','Gold','Helium'],answer:0,explanation:'Mercury is the only metal liquid at room temperature.'},
    {question:'Which element is a halogen gas at room temperature?',choices:['Chlorine','Argon','Oxygen','Carbon'],answer:0,explanation:'Chlorine is a halogen gas.'},
    {question:'Which element has the symbol Al?',choices:['Aluminium','Argon','Gold','Silver'],answer:0,explanation:'Al is the symbol for aluminium.'},
    {question:'Which element in period 2 is a non-metal gas used for breathing?',choices:['Oxygen','Nitrogen','Neon','Carbon'],answer:0,explanation:'Oxygen is a non-metal gas in period 2.'},
    {question:'Which element in the periodic table readily forms a +1 ion?',choices:['Sodium','Oxygen','Carbon','Argon'],answer:0,explanation:'Sodium commonly forms +1 ions.'}
  ];
  periodic.forEach(function(item){ bank.push({topic:'Periodic table',outcomes:['SC4-PRT-01'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});});

  var reactivity=[
    {question:'A strip of sodium metal is dropped into water and bursts into flame. Why did this happen?',choices:['Sodium is very reactive with water','Sodium is not reactive','Water is a base','The metal is a noble gas'],answer:0,explanation:'Sodium reacts explosively with water because it is a very reactive alkali metal.'},
    {question:'A gas from group 17 is the most reactive of all the halogens. Which gas is it?',choices:['Fluorine','Chlorine','Bromine','Iodine'],answer:0,explanation:'Fluorine is the most reactive halogen.'},
    {question:'As you move down group 1 of the periodic table, how does reactivity change?',choices:['Increases','Decreases','Stays the same','Becomes zero'],answer:0,explanation:'Alkali metals become more reactive as you go down group 1.'},
    {question:'Iron reacts with oxygen and water to form rust. This is an example of what kind of change?',choices:['Chemical change','Physical change','Reversible change','Dissolving'],answer:0,explanation:'Rusting produces a new substance, so it is a chemical change.'},
    {question:'When magnesium reacts with an acid, which gas is produced?',choices:['Hydrogen','Oxygen','Nitrogen','Carbon dioxide'],answer:0,explanation:'Hydrogen gas forms when magnesium reacts with acid.'},
    {question:'Which everyday metal is least likely to react and tarnish quickly?',choices:['Gold','Sodium','Potassium','Calcium'],answer:0,explanation:'Gold is very unreactive and does not tarnish easily.'},
    {question:'A student compares chlorine and argon. Which one is least reactive?',choices:['Argon','Chlorine','Both are equally reactive','Neither reacts'],answer:0,explanation:'Argon is a noble gas and is much less reactive than chlorine.'},
    {question:'Which reaction releases heat and is described as exothermic?',choices:['Burning hydrogen','Melting ice','Evaporating water','Dissolving salt'],answer:0,explanation:'Burning hydrogen releases heat, so it is exothermic.'},
    {question:'A pale green solution turns cloudy with solid when two solutions are mixed. What has likely happened?',choices:['A precipitate formed','A physical change occurred','A gas escaped','The temperature dropped only'],answer:0,explanation:'Cloudiness and solid formation indicate a precipitate in a chemical reaction.'},
    {question:'Which substance is a noble gas and rarely reacts?',choices:['Argon','Chlorine','Sodium','Iron'],answer:0,explanation:'Argon is a noble gas and does not react easily.'},
    {question:'Which group contains the most reactive metals?',choices:['Alkali metals','Noble gases','Halogens','Transition metals'],answer:0,explanation:'Alkali metals are the most reactive metals.'},
    {question:'Which atom is most likely to lose one electron to form a +1 ion?',choices:['Sodium','Oxygen','Neon','Magnesium'],answer:0,explanation:'Sodium commonly loses one electron to become Na+.'},
    {question:'Why would a scientist classify fluorine as highly reactive?',choices:['It has a strong pull on electrons','It has a low boiling point','It is a metal','It has no valence electrons'],answer:0,explanation:'Fluorine strongly attracts electrons and reacts easily.'},
    {question:'What happens when a metal reacts with oxygen to form a metal oxide?',choices:['A new substance is formed','The metal melts only','The metal becomes a gas','The mixture separates'],answer:0,explanation:'Metal reacting with oxygen produces a new compound, a metal oxide.'},
    {question:'Which gas forms when an acid reacts with a metal like zinc?',choices:['Hydrogen','Oxygen','Chlorine','Nitrogen'],answer:0,explanation:'Hydrogen gas is produced from acid-metal reactions.'}
  ];
  reactivity.forEach(function(item){ bank.push({topic:'Reactivity',outcomes:['SC4-PRT-01'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});});

  var change=[
    {question:'A candle wax melts and becomes liquid, but the wax remains wax. What kind of change is this?',choices:['Physical change','Chemical change','Nuclear change','Biological change'],answer:0,explanation:'Melting changes state, not the substance itself.'},
    {question:'Baking bread changes the ingredients into a new substance. This is an example of:',choices:['Chemical change','Physical change','Mechanical change','Dissolving'],answer:0,explanation:'Baking produces new substances, so it is a chemical change.'},
    {question:'A student dissolves salt in water and evaporates the water to recover the salt. What does this show?',choices:['Physical change','Chemical change','Nuclear change','Biological change'],answer:0,explanation:'The salt is unchanged, so the process is a physical change.'},
    {question:'A clear solution turns cloudy and a solid forms when two liquids are mixed. What happened?',choices:['A precipitate formed','A physical change occurred','A gas escaped','The liquid boiled'],answer:0,explanation:'Cloudiness and solid formation indicate a precipitate, a chemical change.'},
    {question:'Water freezes into ice when heat is removed. This change is called:',choices:['Freezing','Melting','Evaporation','Condensation'],answer:0,explanation:'Freezing is the change from liquid to solid.'},
    {question:'When an acid reacts with metal to produce bubbles, this usually means:',choices:['A chemical reaction is happening','Only a physical change is happening','The metal is melting','The solution is evaporating'],answer:0,explanation:'Bubbles typically show a gas is produced in a chemical reaction.'},
    {question:'Which change is usually endothermic?',choices:['Melting ice','Burning wood','Rusting iron','Freezing water'],answer:0,explanation:'Melting absorbs heat, so it is endothermic.'},
    {question:'Which change is usually exothermic?',choices:['Burning','Melting','Dissolving sugar','Evaporating water'],answer:0,explanation:'Burning releases heat, so it is exothermic.'},
    {question:'Which process uses boiling point differences to separate a mixture?',choices:['Distillation','Filtration','Magnetism','Sieving'],answer:0,explanation:'Distillation separates substances based on boiling points.'},
    {question:'Sugar dissolves in water and can be recovered unchanged. This change is:',choices:['Physical','Chemical','Nuclear','Thermal'],answer:0,explanation:'Dissolving sugar is a physical change because the sugar remains the same substance.'}
  ];
  change.forEach(function(item){ bank.push({topic:'Change',outcomes:['SC4-PRT-01'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});});

  var working=[
    {question:'A student writes a plan before starting an experiment. What is this plan called?',choices:['Procedure','Hypothesis','Conclusion','Data table'],answer:0,explanation:'A procedure is the planned set of steps for an experiment.'},
    {question:'A scientist wants to compare how temperature affects solubility. Which variable should be changed deliberately?',choices:['Temperature','Volume of solution','Colour of container','Type of paper'],answer:0,explanation:'The independent variable is the one changed intentionally, such as temperature.'},
    {question:'A student measures the amount of gas produced in a reaction. Which variable is this?',choices:['Dependent variable','Independent variable','Control variable','Random variable'],answer:0,explanation:'The dependent variable is what is measured in the experiment.'},
    {question:'A group uses the same size sample and same equipment each time. What are they keeping constant?',choices:['Control variables','Independent variables','Dependent variables','Hypotheses'],answer:0,explanation:'Control variables are kept the same to make the test fair.'},
    {question:'They record temperature every minute and plot it on a line graph. Why is a line graph a good choice?',choices:['It shows change over time','It compares categories','It shows parts of a whole','It records single values'],answer:0,explanation:'Line graphs are best for showing how a measurement changes over time.'},
    {question:'Which graph would be best to compare the mass of different metals?',choices:['Bar graph','Line graph','Pie chart','Scatterplot'],answer:0,explanation:'Bar graphs compare values for different categories.'},
    {question:'A student repeats the same measurement three times and gets similar results. This improves:',choices:['Reliability','Accuracy','Speed','Creativity'],answer:0,explanation:'Repeating measurements improves reliability.'},
    {question:'Which tool is most suitable for measuring the mass of a sample?',choices:['Balance','Thermometer','Ruler','Beaker'],answer:0,explanation:'A balance is designed to measure mass.'},
    {question:'Which practice helps make an investigation valid?',choices:['Following a planned procedure','Changing many variables at once','Ignoring data','Using broken equipment'],answer:0,explanation:'Valid investigations follow a planned method and proper safety rules.'},
    {question:'Why are predictions useful in investigations?',choices:['They help guide what you test','They give the final answer','They replace data collection','They are only for homework'],answer:0,explanation:'Predictions guide the experiment and help scientists compare results to expectations.'}
  ];
  working.forEach(function(item){ bank.push({topic:'Working science',outcomes:['SC5-WS-01','SC4-WS-02','SC4-WS-04','SC4-WS-05','SC4-WS-06'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});});

  var longQuestions = [
    {question:'Explain how the structure of the periodic table helps scientists predict the properties of elements using groups and periods.',type:'long',keywords:['groups','periods','properties','predict','atomic number','reactive','noble gas'],minMatches:3,explanation:'The periodic table arranges elements by atomic number and groups elements with similar chemistry together, so scientists can predict properties from position.'},
    {question:'Describe how a student planning an investigation on reactions between acids and metals would use working scientifically skills.',type:'long',keywords:['plan','hypothesis','acid','metal','reaction','evidence','observe','procedure'],minMatches:3,explanation:'A student uses working scientifically skills to plan the experiment, predict outcomes, observe reactions, and explain results using evidence.'},
    {question:'Explain why elements in the same group have similar properties and why properties change across a period.',type:'long',keywords:['group','period','similar','properties','outer shell','reactivity','trend'],minMatches:3,explanation:'Elements in a group share outer-shell structure, so they behave similarly, while properties vary across a period as electron shells fill.'},
    {question:'A student says copper is used for electrical wiring only because it is cheap. Do you agree? Explain which property makes copper suitable and why that property matters.',type:'long',keywords:['copper','conductivity','electrical','wiring','property','use','because'],minMatches:3,explanation:'Copper is suitable for electrical wiring mainly because it conducts electricity very well. Cost may matter, but the key scientific property is conductivity, which lets electrical energy move through the wire efficiently.'},
    {question:'A student tests four unknown solids and records whether they are shiny, brittle, malleable and conductive. How could the student use these observations to decide which samples are metals, non-metals or metalloids? Explain why.',type:'long',keywords:['shiny','brittle','malleable','conductive','metal','non-metal','metalloid','observations'],minMatches:4,explanation:'The student can compare the observations with known properties. Metals are usually shiny, malleable and conductive, non-metals are often brittle and poor conductors, and metalloids can show mixed properties such as limited conductivity.'},
    {question:'A graph shows that one metal produces bubbles much faster than another when placed in acid. What conclusion could you draw, and why is the graph useful evidence?',type:'long',keywords:['graph','bubbles','metal','acid','reaction speed','data','trend','conclusion','evidence'],minMatches:4,explanation:'The graph can show which metal reacts faster by comparing the rate of bubble production. It is useful evidence because the data reveals a trend or pattern, allowing a conclusion about relative reactivity.'},
    {question:'How did new evidence and technology help scientists improve models of atomic structure over time? Give at least one example and explain why the model changed.',type:'long',keywords:['evidence','technology','model','atomic structure','electron','nucleus','neutron','changed'],minMatches:4,explanation:'Atomic models changed when new evidence became available. For example, cathode ray experiments supported the electron, gold foil evidence supported the nucleus, and later experiments supported the neutron, so scientists updated models to better match observations.'},
    {question:'An atom has 11 protons. Explain what this tells you about the element, its atomic number and the number of electrons if the atom is neutral.',type:'long',keywords:['11','protons','atomic number','sodium','electrons','neutral'],minMatches:3,explanation:'An atom with 11 protons has atomic number 11, so it is sodium. If it is neutral, it has 11 electrons because neutral atoms have equal numbers of protons and electrons.'}
  ];
  longQuestions.forEach(function(item){ bank.push({topic:'Periodic table',outcomes:['SC4-PRT-01'],type:item.type,question:item.question,keywords:item.keywords,minMatches:item.minMatches,explanation:item.explanation});});

  var shortQuestions = [
    {question:'Describe in one sentence how a student could tell whether a change is chemical or physical.',type:'short',keywords:['chemical','new substance','physical','state','shape'],minMatches:2,explanation:'A chemical change makes a new substance and often shows gas, colour change, or a precipitate, while a physical change only alters shape or state without creating a new substance.'},
    {question:'Explain why sodium and potassium are more reactive than calcium.',type:'short',keywords:['alkali','outer shell','electron','lose','easily'],minMatches:2,explanation:'Sodium and potassium are alkali metals with one electron in their outer shell, so they lose that electron more easily than calcium, making them more reactive.'},
    {question:'A student observes a clear solution become cloudy after mixing two liquids. What does this tell you happened?',type:'short',keywords:['precipitate','solid','insoluble','chemical','cloudy'],minMatches:2,explanation:'It suggests a chemical reaction produced an insoluble solid, called a precipitate, which makes the mixture cloudy.'},
    {question:'Write a short explanation of what an independent variable is in a scientific investigation.',type:'short',keywords:['changed','deliberately','intentionally','independent','variable'],minMatches:1,explanation:'The independent variable is the one factor that is changed deliberately to see how it affects the outcome.'},
    {question:'In your own words, describe why repeating trials makes results more reliable.',type:'short',keywords:['repeat','reliability','random error','confirm','consistent'],minMatches:2,explanation:'Repeating trials reduces the effect of random error and helps confirm that the pattern is real, not just a one-off result.'}
  ];
  shortQuestions.forEach(function(item){ bank.push({topic:'Working science',outcomes:['SC4-WS-05','SC4-WS-06'],type:item.type,question:item.question,keywords:item.keywords,minMatches:item.minMatches,explanation:item.explanation});});

  return bank;
}

function shuffle(array){
  for(var i=array.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var temp=array[i];array[i]=array[j];array[j]=temp;
  }
  return array;
}

var offlineQuestionTemplates = [
  {
    topic:'Periodic table',
    type:'mcq',
    make:function(){
      var items = [
        ['chlorine', 'group 17 and period 3', ['group 17 and period 3','group 18 and period 3','group 1 and period 2','group 2 and period 4']],
        ['sodium', 'group 1 and period 3', ['group 1 and period 3','group 17 and period 3','group 18 and period 2','group 2 and period 3']],
        ['neon', 'group 18 and period 2', ['group 18 and period 2','group 17 and period 2','group 1 and period 2','group 18 and period 3']],
        ['silicon', 'a metalloid in period 3', ['a metalloid in period 3','a noble gas in period 3','an alkali metal in period 2','a halogen in period 4']]
      ];
      var item = items[Math.floor(Math.random()*items.length)];
      return {
        topic:this.topic,
        outcomes:['SC4-PRT-01'],
        type:'mcq',
        generated:true,
        question:'Which description correctly matches '+item[0]+' on the periodic table?',
        choices:item[2],
        answer:0,
        explanation:item[0][0].toUpperCase()+item[0].slice(1)+' is '+item[1]+'.'
      };
    }
  },
  {
    topic:'Atomic structure',
    type:'mcq',
    make:function(){
      var atomicNumber = 2 + Math.floor(Math.random()*16);
      return {
        topic:this.topic,
        outcomes:['SC4-PRT-01'],
        type:'mcq',
        generated:true,
        question:'A neutral atom has atomic number '+atomicNumber+'. How many protons and electrons does it have?',
        choices:[atomicNumber+' protons and '+atomicNumber+' electrons', atomicNumber+' protons and '+(atomicNumber+2)+' electrons', (atomicNumber+1)+' protons and '+atomicNumber+' electrons', atomicNumber+' neutrons and 0 electrons'],
        answer:0,
        explanation:'Atomic number equals the number of protons, and a neutral atom has the same number of electrons as protons.'
      };
    }
  },
  {
    topic:'Materials and properties',
    type:'mcq',
    make:function(){
      var examples = [
        ['copper', 'electrical wiring', 'it conducts electricity well'],
        ['aluminium', 'drink cans and aircraft', 'it is lightweight and corrosion resistant'],
        ['silicon', 'computer chips', 'it is a semiconductor'],
        ['gold', 'jewellery and electronics', 'it is unreactive and conducts electricity']
      ];
      var item = examples[Math.floor(Math.random()*examples.length)];
      return {
        topic:this.topic,
        outcomes:['SC4-PRT-01'],
        type:'mcq',
        generated:true,
        question:'Why is '+item[0]+' useful for '+item[1]+'?',
        choices:[item[2], 'it is always a gas', 'it reacts explosively with water', 'it has no protons'],
        answer:0,
        explanation:item[0][0].toUpperCase()+item[0].slice(1)+' is useful for '+item[1]+' because '+item[2]+'.'
      };
    }
  },
  {
    topic:'Working science',
    type:'short',
    make:function(){
      var prompts = [
        ['Explain why keeping control variables the same makes an investigation valid.', ['control','same','valid','fair'], 'Control variables are kept the same so the test is fair and only the independent variable affects the result.'],
        ['Explain why a line graph is useful when temperature is measured over time.', ['line graph','time','trend','data'], 'A line graph shows how data changes over time, making trends and patterns easier to see.'],
        ['Describe why repeating measurements improves reliability.', ['repeat','reliability','consistent','random error'], 'Repeating measurements improves reliability because consistent results are less likely to be caused by random error.']
      ];
      var item = prompts[Math.floor(Math.random()*prompts.length)];
      return {
        topic:this.topic,
        outcomes:['SC4-WS-05','SC4-WS-06'],
        type:'short',
        generated:true,
        question:item[0],
        keywords:item[1],
        minMatches:2,
        explanation:item[2]
      };
    }
  },
  {
    topic:'Everyday elements',
    type:'mcq',
    make:function(){
      var items = [
        ['oxygen', 'breathing and water', 'O'],
        ['carbon', 'living things and graphite', 'C'],
        ['iron', 'steel tools and buildings', 'Fe'],
        ['aluminium', 'cans and foil', 'Al']
      ];
      var item = items[Math.floor(Math.random()*items.length)];
      return {
        topic:this.topic,
        outcomes:['SC4-PRT-01'],
        type:'mcq',
        generated:true,
        question:'Which element is commonly found in '+item[1]+'?',
        choices:[item[0]+' ('+item[2]+')','neon (Ne)','argon (Ar)','fluorine (F)'],
        answer:0,
        explanation:item[0][0].toUpperCase()+item[0].slice(1)+' has the symbol '+item[2]+' and is commonly linked with '+item[1]+'.'
      };
    }
  },
  {
    topic:'Atomic models',
    type:'mcq',
    make:function(){
      var items = [
        ['Thomson', 'discovered the electron using cathode rays'],
        ['Rutherford', 'used gold foil evidence to propose a small dense nucleus'],
        ['Bohr', 'placed electrons in shells around the nucleus'],
        ['Chadwick', 'discovered the neutron']
      ];
      var item = items[Math.floor(Math.random()*items.length)];
      return {
        topic:this.topic,
        outcomes:['SC4-PRT-01'],
        type:'mcq',
        generated:true,
        question:'Which scientist '+item[1]+'?',
        choices:[item[0], 'Dalton', 'Democritus', 'Mendeleev'],
        answer:0,
        explanation:item[0]+' '+item[1]+', helping scientists improve atomic models.'
      };
    }
  },
  {
    topic:'Particle properties',
    type:'mcq',
    make:function(){
      var items = [
        ['proton', 'positive charge and is found in the nucleus'],
        ['neutron', 'no charge and is found in the nucleus'],
        ['electron', 'negative charge and is found in shells']
      ];
      var item = items[Math.floor(Math.random()*items.length)];
      return {
        topic:this.topic,
        outcomes:['SC4-PRT-01'],
        type:'mcq',
        generated:true,
        question:'Which subatomic particle has '+item[1]+'?',
        choices:[item[0], 'molecule', 'compound', 'period'],
        answer:0,
        explanation:'A '+item[0]+' has '+item[1]+'.'
      };
    }
  },
  {
    topic:'Metal tests',
    type:'short',
    make:function(){
      return {
        topic:this.topic,
        outcomes:['SC5-WS-01','SC4-WS-04','SC4-WS-06'],
        type:'short',
        generated:true,
        question:'Describe one test that could help identify whether a sample is a metal or non-metal.',
        keywords:['conductivity','shiny','malleable','brittle','metal'],
        minMatches:2,
        explanation:'A student could test electrical conductivity because metals usually conduct electricity, while most non-metals do not.'
      };
    }
  },
  {
    topic:'First 18 elements',
    type:'short',
    make:function(){
      var number = 3 + Math.floor(Math.random()*16);
      return {
        topic:this.topic,
        outcomes:['SC4-PRT-01'],
        type:'short',
        generated:true,
        question:'Explain what changes in atomic structure as atomic number increases up to element '+number+'.',
        keywords:['protons','electrons','atomic number','shells','increases'],
        minMatches:2,
        explanation:'As atomic number increases, atoms have more protons and neutral atoms have more electrons arranged into shells.'
      };
    }
  }
];

function makeBankExpansionQuestion(serial){
  var elementUses = [
    ['oxygen','O','breathing and water','it supports breathing and forms water compounds'],
    ['carbon','C','living things, graphite and fuels','it bonds in many structures and compounds'],
    ['iron','Fe','steel tools, buildings and bridges','it is strong when made into steel'],
    ['aluminium','Al','cans, foil and aircraft','it is lightweight and corrosion resistant'],
    ['copper','Cu','electrical wiring','it conducts electricity very well'],
    ['silicon','Si','computer chips','it is a metalloid semiconductor'],
    ['gold','Au','jewellery and electronics','it is unreactive and conducts electricity'],
    ['calcium','Ca','bones, limestone and cement','its compounds are hard and useful in structures'],
    ['chlorine','Cl','disinfectants and salt compounds','it is reactive and forms useful compounds'],
    ['neon','Ne','bright signs','it is a noble gas that glows in tubes']
  ];
  var particles = [
    ['proton','positive','nucleus','about 1 atomic mass unit'],
    ['neutron','no charge','nucleus','about 1 atomic mass unit'],
    ['electron','negative','shells around the nucleus','much smaller mass than protons']
  ];
  var scientists = [
    ['Thomson','electron','cathode ray observations'],
    ['Rutherford','nucleus','gold foil experiment evidence'],
    ['Bohr','electron shells','a model with electrons in fixed shells'],
    ['Chadwick','neutron','experiments showing a neutral particle in the nucleus'],
    ['Dalton','solid sphere atom','early evidence about elements combining in fixed ratios']
  ];
  var investigations = [
    ['temperature affects solubility','temperature','amount dissolved','same volume of water'],
    ['metal type affects reaction speed with acid','type of metal','bubbles produced','same acid concentration'],
    ['surface area affects dissolving rate','surface area','time to dissolve','same water temperature'],
    ['heating affects temperature change','time heated','temperature','same volume of liquid'],
    ['material affects conductivity','material','whether the bulb lights','same circuit']
  ];
  var periodic = [
    ['sodium','Na','group 1','period 3','reactive metal'],
    ['magnesium','Mg','group 2','period 3','metal'],
    ['aluminium','Al','group 13','period 3','metal'],
    ['silicon','Si','group 14','period 3','metalloid'],
    ['phosphorus','P','group 15','period 3','non-metal'],
    ['sulfur','S','group 16','period 3','non-metal'],
    ['chlorine','Cl','group 17','period 3','reactive non-metal'],
    ['argon','Ar','group 18','period 3','noble gas']
  ];
  var type = serial % 12;
  var item;
  if(type === 0){
    item = elementUses[serial % elementUses.length];
    return {topic:'Everyday elements',outcomes:['SC4-PRT-01'],type:'mcq',generated:true,generatedId:serial,question:'Which element is linked with '+item[2]+'?',choices:[item[0]+' ('+item[1]+')','argon (Ar)','fluorine (F)','helium (He)'],answer:0,explanation:item[0][0].toUpperCase()+item[0].slice(1)+' is linked with '+item[2]+' because '+item[3]+'.'};
  }
  if(type === 1){
    item = elementUses[serial % elementUses.length];
    return {topic:'Materials and properties',outcomes:['SC4-PRT-01'],type:'short',generated:true,generatedId:serial,question:'Explain why '+item[0]+' is useful for '+item[2]+'.',keywords:[item[0],'properties','use','useful','because','suitable'],minMatches:2,explanation:item[0][0].toUpperCase()+item[0].slice(1)+' is useful for '+item[2]+' because '+item[3]+'.'};
  }
  if(type === 2){
    item = particles[serial % particles.length];
    return {topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'mcq',generated:true,generatedId:serial,question:'Which particle has '+item[1]+' and is found in the '+item[2]+'?',choices:[item[0],'compound','molecule','period'],answer:0,explanation:'A '+item[0]+' has '+item[1]+' and is found in the '+item[2]+'.'};
  }
  if(type === 3){
    var atomicNumber = 1 + (serial % 18);
    return {topic:'First 18 elements',outcomes:['SC4-PRT-01'],type:'mcq',generated:true,generatedId:serial,question:'A neutral atom has atomic number '+atomicNumber+'. What does this tell you?',choices:['It has '+atomicNumber+' protons and '+atomicNumber+' electrons','It has '+atomicNumber+' neutrons only','It has no electrons','It is always a noble gas'],answer:0,explanation:'Atomic number is the number of protons, and a neutral atom has the same number of electrons.'};
  }
  if(type === 4){
    item = scientists[serial % scientists.length];
    return {topic:'Atomic models',outcomes:['SC4-PRT-01'],type:'mcq',generated:true,generatedId:serial,question:'Which scientist is linked with the '+item[1]+' through '+item[2]+'?',choices:[item[0],'Mendeleev','Newton','Curie'],answer:0,explanation:item[0]+' is linked with the '+item[1]+' through '+item[2]+'.'};
  }
  if(type === 5){
    item = periodic[serial % periodic.length];
    return {topic:'Periodic table',outcomes:['SC4-PRT-01'],type:'mcq',generated:true,generatedId:serial,question:'Which statement correctly describes '+item[0]+' ('+item[1]+')?',choices:['It is in '+item[2]+' and '+item[3],'It is in group 18 and period 1','It has no protons','It is not an element'],answer:0,explanation:item[0][0].toUpperCase()+item[0].slice(1)+' is in '+item[2]+' and '+item[3]+'.'};
  }
  if(type === 6){
    item = periodic[serial % periodic.length];
    return {topic:'Periodic table',outcomes:['SC4-PRT-01'],type:'short',generated:true,generatedId:serial,question:'Predict one property of '+item[0]+' from its position on the periodic table.',keywords:['group','period','property','predict','position','periodic table','reactivity'],minMatches:2,explanation:item[0][0].toUpperCase()+item[0].slice(1)+' can be predicted from its position: it is a '+item[4]+' in '+item[2]+' and '+item[3]+'.'};
  }
  if(type === 7){
    item = investigations[serial % investigations.length];
    return {topic:'Working science',outcomes:['SC4-WS-02','SC4-WS-04'],type:'mcq',generated:true,generatedId:serial,question:'In an investigation of how '+item[0]+', what is the independent variable?',choices:[item[1],item[2],item[3],'the conclusion'],answer:0,explanation:'The independent variable is deliberately changed, so it is '+item[1]+'.'};
  }
  if(type === 8){
    item = investigations[serial % investigations.length];
    return {topic:'Working science',outcomes:['SC4-WS-05','SC4-WS-06'],type:'short',generated:true,generatedId:serial,question:'Explain how data could be used to identify a trend when testing how '+item[0]+'.',keywords:['data','trend','pattern','relationship','correlate','prediction','conclusion'],minMatches:2,explanation:'Data can be placed in a table or graph so patterns, trends or relationships can be identified and used to draw a conclusion or make a prediction.'};
  }
  if(type === 9){
    var samples = [['copper','metal','conducts electricity and is shiny'],['sulfur','non-metal','is brittle and a poor conductor'],['silicon','metalloid','has semiconductor properties'],['aluminium','metal','is malleable and conducts electricity']];
    item = samples[serial % samples.length];
    return {topic:'Metal tests',outcomes:['SC5-WS-01','SC4-WS-04'],type:'mcq',generated:true,generatedId:serial,question:'A sample of '+item[0]+' is tested. Which result best supports that it is a '+item[1]+'?',choices:[item[2],'it has no mass','it changes atomic number','it becomes a noble gas'],answer:0,explanation:item[0][0].toUpperCase()+item[0].slice(1)+' is a '+item[1]+' because it '+item[2]+'.'};
  }
  if(type === 10){
    var changes = [['ice melting','physical','the substance remains water'],['paper burning','chemical','new substances such as ash form'],['salt dissolving then being recovered','physical','the salt remains the same substance'],['iron rusting','chemical','a new substance, rust, forms']];
    item = changes[serial % changes.length];
    return {topic:'Change',outcomes:['SC4-PRT-01'],type:'mcq',generated:true,generatedId:serial,question:'Is '+item[0]+' a chemical or physical change?',choices:[item[1]+' change because '+item[2], 'nuclear change because atoms vanish', 'biological change because it is alive', 'no change because matter is not involved'],answer:0,explanation:item[0][0].toUpperCase()+item[0].slice(1)+' is a '+item[1]+' change because '+item[2]+'.'};
  }
  item = scientists[serial % scientists.length];
  return {topic:'Atomic models',outcomes:['SC4-PRT-01'],type:'short',generated:true,generatedId:serial,question:'Explain how evidence from '+item[2]+' improved the model of atomic structure.',keywords:['evidence','model','atomic','structure','technology','observation','improved'],minMatches:2,explanation:'Evidence from '+item[2]+' helped scientists improve the atomic model by supporting the idea of the '+item[1]+'.'};
}

function questionTypeBucket(item){
  return item && item.type === 'mcq' ? 'mcq' : 'word';
}

function questionTypeCounts(){
  return questionBank.reduce(function(counts,item){
    counts[questionTypeBucket(item)]++;
    return counts;
  },{mcq:0,word:0});
}

function makeBankExpansionQuestionOfType(serial, desiredType){
  for(var offset=0;offset<24;offset++){
    var item = makeBankExpansionQuestion(serial + offset);
    if(!desiredType || questionTypeBucket(item) === desiredType) return item;
  }
  var fallback = makeBankExpansionQuestion(serial);
  if(desiredType === 'word' && questionTypeBucket(fallback) !== 'word'){
    return {
      topic:'Working science',
      outcomes:['SC4-WS-05','SC4-WS-06'],
      type:'short',
      generated:true,
      generatedId:serial,
      question:'Explain how data and observations can be used to draw a conclusion in a valid science investigation.',
      keywords:['data','observations','conclusion','valid','evidence'],
      minMatches:2,
      explanation:'Data and observations provide evidence. Scientists can look for patterns or trends in that evidence and use them to draw a valid conclusion.'
    };
  }
  return fallback;
}

function expandQuestionBankToTarget(targetSize){
  var existing = {};
  questionBank.forEach(function(item){ existing[questionKey(item)] = true; });
  var targetMcq = Math.round(targetSize / 4);
  var targetWord = targetSize - targetMcq;
  var serial = 1;
  while(questionBank.length < targetSize && serial < targetSize * 5){
    var counts = questionTypeCounts();
    var desiredType = counts.mcq < targetMcq ? 'mcq' : (counts.word < targetWord ? 'word' : null);
    var item = makeBankExpansionQuestionOfType(serial, desiredType);
    var key = questionKey(item);
    if(existing[key]){
      if(/\?$/.test(item.question)){
        item.question = item.question.replace(/\?$/, ' (variant '+serial+')?');
      } else {
        item.question += ' (variant '+serial+')';
      }
      key = questionKey(item);
    }
    if(!existing[key]){
      questionBank.push(item);
      existing[key] = true;
      generatedQuestionCount++;
    }
    serial++;
  }
}

function questionKey(item){
  return String(item && item.question ? item.question : '').trim().toLowerCase();
}

function markQuestionSeen(index){
  var key = questionKey(questionBank[index]);
  if(key) seenQuestionKeys[key] = true;
}

function unseenQuestionIndexes(filterFn){
  var indexes = [];
  for(var i=0;i<questionBank.length;i++){
    var item = questionBank[i];
    if(seenQuestionKeys[questionKey(item)]) continue;
    if(filterFn && !filterFn(item)) continue;
    indexes.push(i);
  }
  return indexes;
}

function chooseNextUnseenQuestion(filterFn){
  var unseen = unseenQuestionIndexes(filterFn);
  if(unseen.length){
    return unseen[Math.floor(Math.random()*unseen.length)];
  }
  seenQuestionKeys = {};
  if(currentQuestionIndex >= 0) markQuestionSeen(currentQuestionIndex);
  unseen = unseenQuestionIndexes(filterFn);
  if(unseen.length){
    return unseen[Math.floor(Math.random()*unseen.length)];
  }
  return 0;
}

function startQuiz(){
  currentQuestionIndex = chooseNextUnseenQuestion();
  markQuestionSeen(currentQuestionIndex);
  resetQuestionState(questionBank[currentQuestionIndex]);
  questionHistory = [currentQuestionIndex];
  historyPosition = 0;
  questionCount = 1;
  answeredLast = false;
  renderCurrentQuestion();
  updateProgress();
}

function currentQuestion(){
  return questionBank[currentQuestionIndex];
}

function resetQuestionState(item){
  if(!item) return;
  delete item._selected;
  delete item._correct;
  delete item._aiFeedback;
  delete item._aiUsed;
}

function prevQuestion(){
  if(historyPosition <= 0) return;
  historyPosition--;
  currentQuestionIndex = questionHistory[historyPosition];
  questionCount = historyPosition + 1;
  answeredLast = false;
  renderCurrentQuestion();
}

function advanceQuestion(){
  clearTimeout(autoNextTimeout);
  answeredLast = false;
  var nextIndex = chooseNextUnseenQuestion();
  markQuestionSeen(nextIndex);
  questionHistory = questionHistory.slice(0, historyPosition + 1);
  questionHistory.push(nextIndex);
  historyPosition = questionHistory.length - 1;
  currentQuestionIndex = nextIndex;
  resetQuestionState(questionBank[currentQuestionIndex]);
  questionCount = historyPosition + 1;
  renderCurrentQuestion();
}

function skipToWordedQuestion(){
  clearTimeout(autoNextTimeout);
  answeredLast = false;
  var nextIndex = chooseNextUnseenQuestion(function(item){
    return item.type === 'short' || item.type === 'long';
  });
  markQuestionSeen(nextIndex);
  questionHistory = questionHistory.slice(0, historyPosition + 1);
  questionHistory.push(nextIndex);
  historyPosition = questionHistory.length - 1;
  currentQuestionIndex = nextIndex;
  resetQuestionState(questionBank[currentQuestionIndex]);
  questionCount = historyPosition + 1;
  renderCurrentQuestion();
  renderDebugMenu();
}

function forwardQuestion(){
  if(historyPosition < questionHistory.length - 1){
    historyPosition++;
    currentQuestionIndex = questionHistory[historyPosition];
    questionCount = historyPosition + 1;
    answeredLast = false;
    renderCurrentQuestion();
  } else {
    advanceQuestion();
  }
}

function renderCurrentQuestion(){
  var card=$('questionCard');
  var item=currentQuestion();
  var answered = item._selected !== undefined;
  var feedbackHtml='';

  if(answered){
    var wasCorrect = item.type==='mcq' ? item._selected===item.answer : item._correct;
    var message = item.type==='mcq'
      ? (wasCorrect ? 'Correct! ' : 'Not quite. ')
      : (wasCorrect ? 'Good work! ' : 'Not quite. ');
    if(item.type === 'mcq' || !item._aiUsed){
      feedbackHtml = '<div class="feedback '+(wasCorrect?'positive':'negative')+'">'+message+escapeHtml(item.explanation)+'</div>';
    }
  }

  var aiStatus = getAiStatus();
  var aiDot = '<span class="ai-dot '+aiStatus.className+'" title="'+aiStatus.title+'"></span>';

  var choicesHtml='';
  if(item.type==='mcq'){
    choicesHtml='<div class="options">'+item.choices.map(function(choice,index){
      var classes='option-button'+((answered&&item._selected===index)?(index===item.answer?' correct':' wrong'):'')+((answered)?' disabled':'');
      return '<button class="'+classes+'" '+((answered)?'disabled':'onclick="submitAnswer('+index+')"')+'><span class="option-letter">'+String.fromCharCode(65+index)+'</span>'+escapeHtml(choice)+'</button>';
    }).join('')+'</div>';
  } else {
    var promptText = item.type === 'long'
      ? 'Write your answer, then press Submit.'
      : 'Write your answer, then press Submit.';
    var textAreaClass = 'short-answer' + (item.type === 'long' ? ' long-answer' : '');

    if(answered){
      choicesHtml = '<p class="question-detail">You answered:</p>' +
        '<textarea id="shortReply" class="'+textAreaClass+'" rows="5" disabled>'+escapeHtml(item._selected)+'</textarea>';
      if(item._aiFeedback){
        choicesHtml += '<div class="feedback '+(item._correct?'positive':'negative')+'" style="margin-top:12px;">AI feedback: '+escapeHtml(item._aiFeedback)+'</div>';
      }
    } else {
      choicesHtml = '<p class="question-detail">'+promptText+'</p><textarea id="shortReply" class="'+textAreaClass+'" rows="8" placeholder="Your answer"></textarea><div class="controls"><button class="btn primary" id="submitShortBtn" onclick="submitShort()">Submit</button></div>';
    }
  }

  var navButtons = '<button class="btn secondary" onclick="prevQuestion()"'+(historyPosition<=0?' disabled':'')+'>Back</button>' +
                   '<button class="btn secondary" onclick="forwardQuestion()">'+(historyPosition < questionHistory.length - 1 ? 'Forward' : 'Next')+'</button>';

  card.innerHTML =
    '<div class="question-meta">' +
      '<span>'+escapeHtml(item.topic)+'</span>' +
      '<span>Question '+questionCount+' '+aiDot+'</span>' +
    '</div>' +
    '<div class="question-text">'+escapeHtml(item.question)+'</div>' +
    choicesHtml +
    feedbackHtml +
    '<div class="controls">'+navButtons+'</div>';
  renderDebugMenu();
}

function escapeHtml(str){
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function submitAnswer(choiceIndex){
  if(answeredLast) return;
  var item=currentQuestion();
  item._selected=choiceIndex;
  answeredLast=true;
  totals.answered++;
  var wasCorrect = choiceIndex===item.answer;
  if(wasCorrect) totals.correct++;
  renderCurrentQuestion();
  updateProgress();
  if(wasCorrect){
    clearTimeout(autoNextTimeout);
    autoNextTimeout = setTimeout(function(){
      if(answeredLast){
        nextQuestion();
      }
    }, 1000);
  }
}

function evaluateShortAnswer(text,item){
  if(!item.keywords || !item.keywords.length) return false;
  var normalized=text.toLowerCase();
  var matchCount=item.keywords.reduce(function(count,keyword){
    return count + (normalized.indexOf(keyword) !== -1 ? 1 : 0);
  },0);
  var threshold = item.minMatches || Math.max(1, Math.ceil(item.keywords.length / 2));
  return matchCount >= threshold;
}

function copiedQuestionScore(answer,item){
  if(!item || !item.question) return 0;
  var answerWords = normalizeWords(answer).filter(function(word){return word.length > 3;});
  var questionWords = normalizeWords(item.question).filter(function(word){return word.length > 3;});
  if(answerWords.length < 4 || questionWords.length < 4) return 0;
  var questionSet = {};
  questionWords.forEach(function(word){questionSet[word] = true;});
  var copied = answerWords.reduce(function(total,word){
    return total + (questionSet[word] ? 1 : 0);
  },0);
  return copied / answerWords.length;
}

function answerAddsModelContent(answer,item){
  var modelWords = normalizeWords(item.explanation || '').filter(function(word){return word.length > 3;});
  if(!modelWords.length) return false;
  var answerSet = {};
  normalizeWords(answer).forEach(function(word){answerSet[word] = true;});
  var modelHits = modelWords.reduce(function(total,word){
    return total + (answerSet[word] ? 1 : 0);
  },0);
  return modelHits / modelWords.length >= 0.24;
}

function isQuestionCopyAnswer(answer,item){
  var copyScore = copiedQuestionScore(answer,item);
  var answerWords = normalizeWords(answer).filter(function(word){return word.length > 3;});
  var questionWords = normalizeWords(item && item.question ? item.question : '').filter(function(word){return word.length > 3;});
  var addsSubstantialAnswer = answerAddsModelContent(answer,item) && answerWords.length >= questionWords.length + 6;
  return copyScore >= 0.62 && !addsSubstantialAnswer;
}

function normalizeWords(text){
  var extras = {
    atom:['atomic','element'],
    atoms:['atomic','element'],
    proton:['protons','positive','nucleus','atomic','number'],
    protons:['positive','nucleus','atomic','number'],
    neutron:['neutrons','neutral','nucleus','mass'],
    neutrons:['neutral','nucleus','mass'],
    electron:['electrons','negative','shell'],
    electrons:['negative','shell'],
    nucleus:['protons','neutrons','mass'],
    group:['column','properties','reactivity'],
    groups:['column','properties','reactivity'],
    period:['row','shells'],
    periods:['row','shells'],
    metal:['conductive','malleable','shiny'],
    metals:['conductive','malleable','shiny'],
    nonmetal:['poor','conductor','brittle'],
    nonmetals:['poor','conductor','brittle'],
    metalloid:['semiconductor','properties'],
    metalloids:['semiconductor','properties'],
    conductor:['conductivity','metal'],
    conductive:['conductivity','metal'],
    correlate:['relationship','trend','pattern'],
    correlated:['relationship','trend','pattern'],
    correlation:['relationship','trend','pattern'],
    relationship:['trend','pattern'],
    relationships:['trend','pattern'],
    predict:['prediction','conclusion','trend'],
    prediction:['predict','conclusion','trend'],
    future:['prediction','predict'],
    reation:['reaction'],
    concluson:['conclusion'],
    graph:['data','trend','pattern'],
    table:['data','organise','trend'],
    measured:['dependent','variable','data'],
    measure:['dependent','variable','data'],
    result:['data','evidence','conclusion'],
    results:['data','evidence','conclusion'],
    evidence:['data','observation','conclusion'],
    observation:['evidence','data'],
    observations:['evidence','data'],
    accurate:['measurement','tool','instrument'],
    accuracy:['measurement','tool','instrument'],
    valid:['fair','control','procedure'],
    reliable:['repeat','consistent'],
    reliability:['repeat','consistent'],
    consistent:['repeat','reliable'],
    solubility:['dissolve','solution'],
    acid:['reaction','chemical'],
    alloy:['mixture','metal','properties'],
    compound:['substance','elements','bonded'],
    molecule:['atoms','bonded'],
    symbol:['element','periodic'],
    cloudy:['precipitate','solid'],
    bubbles:['gas','reaction'],
    fizzing:['gas','reaction'],
    trial:['repeat','reliability'],
    trials:['repeat','reliability'],
    same:['constant','control'],
    changed:['independent','variable'],
    deliberately:['independent','variable'],
    new:['chemical','substance'],
    state:['physical'],
    shell:['electron'],
    shells:['electron'],
    column:['group'],
    row:['period']
  };
  var words = String(text).toLowerCase()
    .replace(/[^a-z0-9+\s]/g,' ')
    .split(/\s+/)
    .filter(function(word){return word.length > 2;})
    .map(function(word){
      return word.replace(/ies$/,'y').replace(/ing$/,'').replace(/ed$/,'').replace(/s$/,'');
    });
  var expanded = words.slice();
  words.forEach(function(word){
    if(extras[word]) expanded = expanded.concat(extras[word]);
  });
  return expanded;
}

function countOverlap(words, targets){
  var seen = {};
  words.forEach(function(word){ seen[word] = true; });
  return targets.reduce(function(total, target){
    return total + (seen[target] ? 1 : 0);
  }, 0);
}

var miniMarkerParams = {
  conceptWeight: 0.34,
  rubricWeight: 0.28,
  keywordWeight: 0.16,
  explanationWeight: 0.14,
  detailWeight: 0.08,
  passScore: 0.58
};

var scienceConcepts = [
  {name:'chemical change', terms:['chemical','reaction','new substance','gas','precipitate','colour change','heat','rust','burn']},
  {name:'physical change', terms:['physical','state','shape','dissolve','melting','freezing','evaporate','same substance']},
  {name:'atomic structure', terms:['atom','proton','neutron','electron','nucleus','shell','charge','mass','atomic number']},
  {name:'periodic table patterns', terms:['group','period','reactivity','properties','atomic number','shell','noble gas','halogen','alkali']},
  {name:'investigation skills', terms:['hypothesis','prediction','variable','independent','dependent','control','procedure','valid','reliable','data','trend','conclusion']},
  {name:'materials and properties', terms:['metal','nonmetal','metalloid','conductivity','malleable','brittle','shiny','alloy','compound','element']}
];

var contradictionPairs = [
  ['chemical','physical'],
  ['proton','electron'],
  ['proton','neutron'],
  ['group','period'],
  ['independent','dependent'],
  ['increase','decrease'],
  ['metal','nonmetal'],
  ['element','compound'],
  ['homogeneous','heterogeneous']
];

var misconceptionRules = [
  {name:'atoms are not the same as molecules', when:['atom'], wrong:['molecule'], note:'Do not swap atom and molecule; an atom is the smallest unit of an element.'},
  {name:'protons identify the element', when:['atomic number','proton'], wrong:['electron','neutron'], note:'Atomic number is the number of protons, not electrons or neutrons.'},
  {name:'groups are columns', when:['group'], wrong:['row','period'], note:'Groups are columns; periods are rows.'},
  {name:'periods show shells', when:['period','shell'], wrong:['group'], note:'Periods relate to electron shells; groups relate to similar properties.'},
  {name:'chemical change makes a new substance', when:['chemical','new substance'], wrong:['same substance','only state','shape only'], note:'Chemical changes form new substances.'},
  {name:'physical change keeps the same substance', when:['physical','same substance'], wrong:['new substance','reaction'], note:'Physical changes do not create a new substance.'},
  {name:'independent variable is changed', when:['independent'], wrong:['measured','dependent'], note:'The independent variable is changed deliberately; the dependent variable is measured.'},
  {name:'reliability is about repeats', when:['reliable','reliability'], wrong:['accuracy','validity'], note:'Reliability improves when repeated results are consistent.'}
];

function textHasTerm(text, term){
  return new RegExp('\\b'+term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/\s+/g,'\\s+')+'\\b','i').test(text);
}

function conceptHits(text, concepts){
  return concepts.filter(function(concept){
    return concept.terms.some(function(term){return textHasTerm(text, term);});
  });
}

function expectedConceptsFor(item){
  var source = (item.question + ' ' + (item.explanation || '') + ' ' + (item.keywords || []).join(' ')).toLowerCase();
  var hits = conceptHits(source, scienceConcepts);
  return hits.length ? hits : scienceConcepts;
}

function contradictionPenalty(answer, expected){
  var penalty = 0;
  contradictionPairs.forEach(function(pair){
    var expectsFirst = textHasTerm(expected, pair[0]);
    var expectsSecond = textHasTerm(expected, pair[1]);
    var saysFirst = textHasTerm(answer, pair[0]);
    var saysSecond = textHasTerm(answer, pair[1]);
    if(expectsFirst && !expectsSecond && saysSecond && !saysFirst) penalty += 0.22;
    if(expectsSecond && !expectsFirst && saysFirst && !saysSecond) penalty += 0.22;
  });
  if(/\b(no|not|never|doesn'?t|isn'?t|without)\b/i.test(answer) && !/\b(no|not|never|doesn'?t|isn'?t|without)\b/i.test(expected)){
    penalty += 0.08;
  }
  return Math.min(0.5, penalty);
}

function findMisconceptions(answer, expected){
  return misconceptionRules.filter(function(rule){
    var expectedRule = rule.when.some(function(term){ return textHasTerm(expected, term); });
    var saysWrong = rule.wrong.some(function(term){ return textHasTerm(answer, term); });
    var saysRight = rule.when.some(function(term){ return textHasTerm(answer, term); });
    return expectedRule && saysWrong && !saysRight;
  });
}

function answerQuality(words, reasonScore){
  if(words.length < 3) return {level:'empty', score:0, note:'Write a complete answer, not just one word.'};
  if(words.length < 6) return {level:'vague', score:0.25, note:'Add more science detail.'};
  if(words.length < 11 && reasonScore < 0.5) return {level:'partial', score:0.55, note:'Add a because/therefore explanation.'};
  if(reasonScore >= 0.5 && words.length >= 10) return {level:'strong', score:1, note:'This includes explanation structure.'};
  return {level:'solid', score:0.8, note:'This has enough detail but could explain the link more clearly.'};
}

function exactPhraseScore(answer, phrases){
  if(!phrases || !phrases.length) return 0;
  var hits = phrases.reduce(function(total, phrase){
    if(textHasTerm(answer, phrase)) return total + 1;
    var parts = normalizeWords(phrase).filter(function(part){ return part.length > 2; });
    if(!parts.length) return total;
    var answerWords = normalizeWords(answer);
    var partHits = parts.reduce(function(count, part){ return count + (answerWords.indexOf(part) !== -1 ? 1 : 0); },0);
    return total + (partHits / parts.length >= 0.75 ? 0.8 : 0);
  },0);
  return hits / phrases.length;
}

var miniMarkerRubrics = [
  {
    match:/chemical or physical/i,
    required:['chemical change','physical change','new substance','same substance'],
    bonus:['gas','precipitate','colour change','state','shape'],
    ideas:[
      {name:'chemical change creates a new substance', terms:['chemical','new substance','gas','precipitate','colour change','bubbles','ash','rust']},
      {name:'physical change keeps the same substance', terms:['physical','same substance','state','shape','melting','freezing','dissolve','evaporate']}
    ],
    relationships:[['chemical','new substance'],['physical','same substance']]
  },
  {
    match:/sodium and potassium.*more reactive than calcium/i,
    required:['sodium','potassium','calcium','outer electron','lose'],
    bonus:['alkali','group 1','group 2','easily'],
    ideas:[
      {name:'sodium and potassium are group 1 alkali metals', terms:['sodium','potassium','alkali','group 1']},
      {name:'they lose one outer electron easily', terms:['one electron','outer shell','valence','lose','easily']},
      {name:'calcium is less reactive because it is group 2', terms:['calcium','group 2','two electron','less reactive']}
    ],
    relationships:[['outer','electron'],['lose','easily']]
  },
  {
    match:/clear solution become cloudy/i,
    required:['cloudy','solid','precipitate'],
    bonus:['chemical reaction','insoluble','new substance'],
    ideas:[
      {name:'a precipitate formed', terms:['precipitate','solid','insoluble']},
      {name:'the change suggests a chemical reaction', terms:['chemical','reaction','new substance']},
      {name:'cloudiness is evidence of the solid', terms:['cloudy','cloudiness','solid']}
    ],
    relationships:[['cloudy','solid'],['chemical','reaction']]
  },
  {
    match:/independent variable/i,
    required:['changed','deliberately'],
    bonus:['test','effect','dependent variable'],
    ideas:[
      {name:'the independent variable is changed deliberately', terms:['changed','deliberately','intentionally','independent']},
      {name:'it is changed to test its effect', terms:['effect','affect','test','measure','dependent']}
    ],
    relationships:[['changed','deliberately']]
  },
  {
    match:/repeating trials/i,
    required:['repeat','reliable'],
    bonus:['consistent','random error','average','confirm'],
    ideas:[
      {name:'repeating improves reliability', terms:['repeat','trial','reliability','reliable']},
      {name:'repeats reduce random error', terms:['random error','mistake','outlier','average']},
      {name:'consistent results confirm a pattern', terms:['consistent','confirm','pattern','not one-off']}
    ],
    relationships:[['repeat','reliable']]
  },
  {
    match:/structure of the periodic table helps scientists predict/i,
    required:['group','period','properties','predict'],
    bonus:['atomic number','reactivity','shell','noble gas'],
    ideas:[
      {name:'groups have similar properties', terms:['group','column','similar','properties']},
      {name:'periods show shell patterns', terms:['period','row','shell']},
      {name:'atomic number orders elements', terms:['atomic number','proton','order','increases']},
      {name:'position predicts reactivity or properties', terms:['predict','reactivity','noble gas','halogen','alkali']}
    ],
    relationships:[['group','properties'],['period','shell'],['position','predict']]
  },
  {
    match:/planning an investigation.*acids and metals/i,
    required:['procedure','safe','variable','evidence'],
    bonus:['hypothesis','prediction','control variable','conclusion','data'],
    ideas:[
      {name:'plan a safe procedure', terms:['plan','procedure','safe','method']},
      {name:'make a hypothesis or prediction', terms:['hypothesis','prediction','predict']},
      {name:'control variables', terms:['control variable','same','fair test','valid']},
      {name:'observe or measure evidence', terms:['observe','measure','data','evidence','gas','bubbles']},
      {name:'use evidence to conclude', terms:['conclusion','trend','pattern','result']}
    ],
    relationships:[['evidence','conclusion'],['variable','fair']]
  },
  {
    match:/data could be used to identify a trend/i,
    required:['data','trend','relationship'],
    bonus:['graph','table','pattern','prediction','conclusion','correlate'],
    ideas:[
      {name:'data is used to find a trend or relationship', terms:['data','trend','pattern','relationship','correlate']},
      {name:'the trend links metal type with reaction speed', terms:['metal type','reaction speed','metal','speed','acid']},
      {name:'the trend can support a prediction or conclusion', terms:['prediction','predict','future','conclusion']}
    ],
    relationships:[['data','trend'],['metal','speed'],['trend','prediction']]
  },
  {
    match:/explain why .* useful for/i,
    required:['property','use'],
    bonus:['conduct','reactive','unreactive','lightweight','semiconductor','strong','corrosion'],
    ideas:[
      {name:'the answer links a material property to a use', terms:['property','use','useful','because']},
      {name:'the answer names a relevant physical or chemical property', terms:['conduct','reactive','unreactive','lightweight','semiconductor','strong','corrosion','hard']},
      {name:'the explanation connects the property to the job', terms:['because','so','therefore','suitable']}
    ],
    relationships:[['property','use'],['because','useful']]
  },
  {
    match:/what changes in atomic structure as atomic number increases/i,
    required:['atomic number','protons','electrons'],
    bonus:['shells','neutral atom','increases','first 18'],
    ideas:[
      {name:'atomic number means proton number', terms:['atomic number','protons','proton number']},
      {name:'neutral atoms have matching electrons', terms:['electrons','neutral','same number']},
      {name:'electrons fill shells as number increases', terms:['shells','electron shells','arranged']}
    ],
    relationships:[['atomic number','protons'],['protons','electrons'],['electrons','shells']]
  },
  {
    match:/test.*metal or non-metal|identify whether a sample is a metal/i,
    required:['test','metal','non-metal'],
    bonus:['conductivity','shiny','malleable','brittle','circuit'],
    ideas:[
      {name:'conductivity can identify metals', terms:['conductivity','circuit','conduct electricity','bulb']},
      {name:'metals and non-metals have different properties', terms:['metal','non-metal','shiny','malleable','brittle']},
      {name:'the test uses observations', terms:['test','observe','compare','result']}
    ],
    relationships:[['metal','conduct'],['non-metal','poor conductor'],['test','observe']]
  },
  {
    match:/independent variable|dependent variable|control variable|fair test/i,
    required:['variable'],
    bonus:['independent','dependent','control','changed','measured','same','fair'],
    ideas:[
      {name:'independent variable is changed', terms:['independent','changed','deliberately']},
      {name:'dependent variable is measured', terms:['dependent','measured','result','data']},
      {name:'control variables are kept the same', terms:['control','same','fair','valid']}
    ],
    relationships:[['independent','changed'],['dependent','measured'],['control','same']]
  },
  {
    match:/predict.*property|position on the periodic table|from its position/i,
    required:['predict','property','periodic table'],
    bonus:['group','period','reactivity','shell','metal','non-metal','noble gas'],
    ideas:[
      {name:'position helps predict properties', terms:['position','predict','properties']},
      {name:'groups show similar properties', terms:['group','similar','properties','reactivity']},
      {name:'periods relate to shells', terms:['period','shells','row']}
    ],
    relationships:[['position','predict'],['group','properties'],['period','shell']]
  },
  {
    match:/same group have similar properties/i,
    required:['group','outer shell','electron','properties'],
    bonus:['reactivity','period','trend','shell fill'],
    ideas:[
      {name:'same group means similar outer-shell electrons', terms:['group','outer shell','valence','electron']},
      {name:'outer electrons affect reactivity', terms:['reactivity','properties','electron']},
      {name:'period trends change as shells fill', terms:['period','trend','across','shell','fill']}
    ],
    relationships:[['outer','electron'],['electron','reactivity'],['period','trend']]
  }
];

function rubricForItem(item){
  var question = item.question || '';
  for(var i=0;i<miniMarkerRubrics.length;i++){
    if(miniMarkerRubrics[i].match.test(question)) return miniMarkerRubrics[i];
  }
  return null;
}

function termGroupHit(text, words, group){
  return group.terms.some(function(term){
    return textHasTerm(text, term) || words.indexOf(normalizeWords(term)[0]) !== -1;
  });
}

function relationshipScore(text, relationships){
  if(!relationships || !relationships.length) return 0.5;
  var hits = relationships.reduce(function(total, pair){
    var first = textHasTerm(text, pair[0]);
    var second = textHasTerm(text, pair[1]);
    var firstPattern = pair[0].replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    var secondPattern = pair[1].replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    var near = new RegExp(firstPattern+'.{0,45}'+secondPattern+'|'+secondPattern+'.{0,45}'+firstPattern, 'i').test(text);
    return total + (first && second ? (near ? 1 : 0.75) : 0);
  }, 0);
  return hits / relationships.length;
}

function reasoningScore(text){
  var markers = [
    /\bbecause\b/i,
    /\bso\b/i,
    /\btherefore\b/i,
    /\bthis means\b/i,
    /\bwhich means\b/i,
    /\bas a result\b/i,
    /\bfor example\b/i,
    /\bcompared with\b/i,
    /\bmore\b.+\bthan\b/i,
    /\bless\b.+\bthan\b/i
  ];
  var hits = markers.reduce(function(total, pattern){ return total + (pattern.test(text) ? 1 : 0); }, 0);
  return Math.min(1, hits / 2);
}

function gradeWithMiniMarker(answer,item){
  var words = normalizeWords(answer);
  var expectedText = (item.explanation || item.question).toLowerCase();
  var answerText = answer.toLowerCase();
  var guidanceWords = normalizeWords(expectedText);
  var keywordWords = normalizeWords((item.keywords || []).join(' '));
  var targets = keywordWords.length ? keywordWords : guidanceWords.filter(function(word){
    return ['the','and','for','with','that','this','from','are','because','student','answer','show','make','kind','what','why','how'].indexOf(word) === -1;
  });
  var uniqueTargets = targets.filter(function(word,index){ return targets.indexOf(word) === index; });
  var expectedConcepts = expectedConceptsFor(item);
  var answerConcepts = conceptHits(answerText, expectedConcepts);
  var rubric = rubricForItem(item);
  var rubricHits = [];
  var missingRubricIdeas = [];
  var rubricScore = 0;
  var requiredScore = 0;
  var bonusScore = 0;
  var relationScore = 0.5;
  if(rubric){
    rubric.ideas.forEach(function(idea){
      if(termGroupHit(answerText, words, idea)){
        rubricHits.push(idea.name);
      } else {
        missingRubricIdeas.push(idea.name);
      }
    });
    rubricScore = rubric.ideas.length ? rubricHits.length / rubric.ideas.length : 0;
    requiredScore = exactPhraseScore(answerText, rubric.required);
    bonusScore = exactPhraseScore(answerText, rubric.bonus);
    relationScore = relationshipScore(answerText, rubric.relationships);
  }
  var keywordOverlap = item.keywords ? countOverlap(words, keywordWords) : 0;
  var guidanceOverlap = countOverlap(words, uniqueTargets);
  var threshold = item.minMatches || Math.max(1, Math.ceil((item.keywords || []).length / 2));
  var conceptScore = expectedConcepts.length ? answerConcepts.length / expectedConcepts.length : 0;
  var keywordScore = keywordWords.length ? Math.min(1, keywordOverlap / threshold) : 0;
  var meaningScore = uniqueTargets.length ? Math.min(1, guidanceOverlap / Math.max(2, Math.ceil(uniqueTargets.length * 0.38))) : 0;
  var detailScore = Math.min(1, words.length / (item.type === 'long' ? 28 : 10));
  var explanationScore = reasoningScore(answerText);
  var penalty = contradictionPenalty(answerText, expectedText);
  var misconceptions = findMisconceptions(answerText, expectedText);
  var quality = answerQuality(words, explanationScore);
  var smartConceptScore = rubric ? Math.max(conceptScore, rubricScore, requiredScore * 0.9) : conceptScore;
  var rubricEvidenceScore = rubric ? Math.max(rubricScore, (requiredScore * 0.78) + (bonusScore * 0.22)) : 0;
  var total = (smartConceptScore * miniMarkerParams.conceptWeight) +
    (rubricEvidenceScore * miniMarkerParams.rubricWeight) +
    (Math.max(keywordScore, meaningScore) * miniMarkerParams.keywordWeight) +
    (Math.max(explanationScore, relationScore) * miniMarkerParams.explanationWeight) +
    (Math.max(detailScore, quality.score) * miniMarkerParams.detailWeight) -
    penalty -
    (misconceptions.length ? 0.18 : 0);
  var score = total >= miniMarkerParams.passScore ? 1 : 0;
  var matched = uniqueTargets.filter(function(word){ return words.indexOf(word) !== -1; }).slice(0, 3);
  var missing = uniqueTargets.filter(function(word){ return words.indexOf(word) === -1; }).slice(0, 3);
  var conceptNames = answerConcepts.map(function(concept){return concept.name;}).slice(0,2);
  var missingConceptNames = expectedConcepts.filter(function(concept){return answerConcepts.indexOf(concept) === -1;}).map(function(concept){return concept.name;}).slice(0,2);
  var explanation = score
    ? 'Mini marker: this looks correct because it matches ' + (rubricHits.length ? rubricHits.slice(0,2).join(' and ') : (conceptNames.join(' and ') || 'the main idea')) + '. ' + (quality.level === 'strong' ? 'Good explanation structure.' : quality.note)
    : 'Mini marker: this is not quite there yet because it needs ' + (missingRubricIdeas.length ? missingRubricIdeas.slice(0,2).join(' and ') : (missingConceptNames.join(' or ') || 'more science detail')) + '. ' + (misconceptions.length ? misconceptions[0].note : (penalty ? 'Check that you have not mixed up two opposite ideas.' : (missing.length ? 'Add terms like ' + missing.join(', ') + ' and explain them.' : quality.note)));
  return Promise.resolve({score: score, explanation: explanation + ' Confidence: ' + Math.round(clamp(total,0,1) * 100) + '%.', _aiProvider: 'Mini marker'});
}

var OfflineMarkerEngine = (function(){
  var stopWords = [
    'the','and','for','with','that','this','from','are','because','student','answer',
    'show','make','kind','what','why','how','then','they','their','there','when',
    'which','would','could','should','about','into','onto','only','also','very'
  ];

  var conceptGroups = [
    {
      id:'chemical_change',
      label:'chemical change',
      strong:['chemical reaction','new substance','forms a gas','forms a precipitate','colour change','rusting','burning'],
      soft:['chemical','reaction','gas','precipitate','cloudy','bubbles','heat','ash','rust']
    },
    {
      id:'physical_change',
      label:'physical change',
      strong:['same substance','change of state','change in shape','can be reversed','no new substance'],
      soft:['physical','state','shape','melting','freezing','evaporation','dissolving','evaporate']
    },
    {
      id:'atomic_structure',
      label:'atomic structure',
      strong:['protons in the nucleus','neutrons in the nucleus','electrons in shells','atomic number is protons'],
      soft:['atom','proton','neutron','electron','nucleus','shell','charge','mass','atomic']
    },
    {
      id:'periodic_patterns',
      label:'periodic table patterns',
      strong:['groups have similar properties','periods show shells','atomic number increases','position predicts properties'],
      soft:['group','period','column','row','reactivity','properties','predict','halogen','alkali','noble']
    },
    {
      id:'investigation',
      label:'working scientifically',
      strong:['independent variable is changed','dependent variable is measured','control variables stay the same','repeat trials improve reliability'],
      soft:['hypothesis','prediction','variable','independent','dependent','control','procedure','valid','reliable','data','trend','conclusion']
    },
    {
      id:'materials',
      label:'materials and properties',
      strong:['metals conduct electricity','metalloids are semiconductors','non-metals are poor conductors','properties relate to uses'],
      soft:['metal','nonmetal','metalloid','conductivity','malleable','brittle','shiny','alloy','compound','element','use']
    }
  ];

  var questionProfiles = [
    {
      match:/chemical or physical/i,
      label:'chemical versus physical change',
      must:['chemical change','new substance','physical change','same substance'],
      should:['gas','precipitate','colour change','state','shape'],
      avoid:['all changes make new substances','physical changes make new substances'],
      relationships:[['chemical','new substance'],['physical','same substance']],
      minimumIdeas:2
    },
    {
      match:/sodium and potassium.*more reactive than calcium/i,
      label:'alkali metal reactivity',
      must:['sodium','potassium','calcium','outer electron','lose'],
      should:['alkali metal','group 1','group 2','easily','reactive'],
      avoid:['calcium is group 1','reactivity is about neutrons'],
      relationships:[['outer','electron'],['lose','easily'],['group 1','reactive']],
      minimumIdeas:3
    },
    {
      match:/clear solution become cloudy/i,
      label:'precipitate evidence',
      must:['cloudy','solid','precipitate'],
      should:['chemical reaction','insoluble','new substance','evidence'],
      avoid:['it only dissolved','it only evaporated'],
      relationships:[['cloudy','solid'],['chemical','reaction']],
      minimumIdeas:2
    },
    {
      match:/independent variable/i,
      label:'independent variable',
      must:['changed','deliberately'],
      should:['test','effect','dependent variable','measure'],
      avoid:['independent variable is measured','dependent variable is changed deliberately'],
      relationships:[['changed','deliberately'],['changed','test']],
      minimumIdeas:1
    },
    {
      match:/repeating trials/i,
      label:'reliability from repeats',
      must:['repeat','reliable'],
      should:['consistent','random error','average','confirm','one-off'],
      avoid:['repeating makes it accurate automatically','repeating changes the independent variable'],
      relationships:[['repeat','reliable'],['consistent','confirm']],
      minimumIdeas:2
    },
    {
      match:/structure of the periodic table helps scientists predict/i,
      label:'periodic table predictions',
      must:['group','period','properties','predict'],
      should:['atomic number','reactivity','shell','noble gas','halogen','alkali'],
      avoid:['groups are rows','periods are columns'],
      relationships:[['group','properties'],['period','shell'],['position','predict']],
      minimumIdeas:3
    },
    {
      match:/planning an investigation.*acids and metals/i,
      label:'planning acid-metal investigation',
      must:['procedure','safe','variable','evidence'],
      should:['hypothesis','prediction','control variable','conclusion','data','gas','bubbles'],
      avoid:['change many variables','ignore safety','no measurements'],
      relationships:[['evidence','conclusion'],['variable','fair'],['procedure','safe']],
      minimumIdeas:3
    },
    {
      match:/data could be used to identify a trend/i,
      label:'using data to identify trends',
      must:['data','trend','relationship'],
      should:['graph','table','pattern','prediction','conclusion','correlate'],
      avoid:['guess without data','ignore the results'],
      relationships:[['data','trend'],['metal','speed'],['trend','prediction']],
      minimumIdeas:2
    },
    {
      match:/explain why .* useful for/i,
      label:'linking properties to uses',
      must:['property','use'],
      should:['conduct','reactive','unreactive','lightweight','semiconductor','strong','corrosion','because'],
      avoid:['random use','no property'],
      relationships:[['property','use'],['because','useful']],
      minimumIdeas:1
    },
    {
      match:/what changes in atomic structure as atomic number increases/i,
      label:'atomic number and structure',
      must:['atomic number','protons','electrons'],
      should:['shells','neutral atom','increases','first 18'],
      avoid:['atomic number is neutrons','electrons are in nucleus'],
      relationships:[['atomic number','protons'],['protons','electrons'],['electrons','shells']],
      minimumIdeas:2
    },
    {
      match:/test.*metal or non-metal|identify whether a sample is a metal/i,
      label:'testing metals and non-metals',
      must:['test','metal','non-metal'],
      should:['conductivity','shiny','malleable','brittle','circuit','observe'],
      avoid:['atomic number changes','no observation'],
      relationships:[['metal','conduct'],['test','observe']],
      minimumIdeas:2
    },
    {
      match:/line graph|graph.*time|data changes over time/i,
      label:'representing data with graphs',
      must:['data','time','trend'],
      should:['line graph','graph','pattern','change','over time'],
      avoid:['pie chart for time','ignore data'],
      relationships:[['graph','trend'],['time','change'],['data','pattern']],
      minimumIdeas:2
    },
    {
      match:/repeating measurements|repeating trials|improves reliability/i,
      label:'reliability from repeated trials',
      must:['repeat','reliable'],
      should:['consistent','random error','average','confirm','one-off'],
      avoid:['accuracy only','validity only'],
      relationships:[['repeat','reliable'],['consistent','confirm'],['random error','average']],
      minimumIdeas:2
    },
    {
      match:/evidence.*improved the model of atomic structure|atomic model|models of atomic structure/i,
      label:'evidence and atomic models',
      must:['evidence','model','atomic structure'],
      should:['observation','technology','improved','electron','nucleus','neutron','shell'],
      avoid:['models never change','no evidence needed'],
      relationships:[['evidence','model'],['observation','improved'],['technology','understanding']],
      minimumIdeas:2
    },
    {
      match:/independent variable|dependent variable|control variable|fair test/i,
      label:'investigation variables',
      must:['variable'],
      should:['independent','dependent','control','changed','measured','same','fair'],
      avoid:['change many variables','dependent is changed deliberately'],
      relationships:[['independent','changed'],['dependent','measured'],['control','same']],
      minimumIdeas:1
    },
    {
      match:/predict.*property|position on the periodic table|from its position/i,
      label:'predicting properties from periodic position',
      must:['predict','property','periodic table'],
      should:['group','period','reactivity','shell','metal','non-metal','noble gas'],
      avoid:['position does not matter','groups are rows'],
      relationships:[['position','predict'],['group','properties'],['period','shell']],
      minimumIdeas:2
    },
    {
      match:/same group have similar properties/i,
      label:'groups and period trends',
      must:['group','outer shell','electron','properties'],
      should:['reactivity','period','trend','shell','across'],
      avoid:['periods have same properties','groups mean same mass'],
      relationships:[['outer','electron'],['electron','reactivity'],['period','trend']],
      minimumIdeas:3
    }
  ];

  var misconceptionChecks = [
    {ifExpected:['atomic number','proton'], wrong:['electron','neutron'], note:'Atomic number is about protons.'},
    {ifExpected:['group'], wrong:['row','period'], note:'A group is a column, not a row.'},
    {ifExpected:['period'], wrong:['column','group'], note:'A period is a row and is linked to shells.'},
    {ifExpected:['chemical','new substance'], wrong:['same substance','only state'], note:'A chemical change creates a new substance.'},
    {ifExpected:['physical','same substance'], wrong:['new substance','chemical reaction'], note:'A physical change keeps the same substance.'},
    {ifExpected:['independent'], wrong:['measured','dependent'], note:'The independent variable is changed deliberately.'},
    {ifExpected:['reliable','repeat'], wrong:['validity','accuracy'], note:'Reliability is about repeatable, consistent results.'},
    {ifExpected:['metal'], wrong:['poor conductor','brittle only'], note:'Most metals conduct and are malleable.'},
    {ifExpected:['metalloid'], wrong:['always metal','always nonmetal'], note:'Metalloids have mixed properties.'}
  ];

  var reasoningPatterns = [
    /\bbecause\b/i,
    /\btherefore\b/i,
    /\bso\b/i,
    /\bthis means\b/i,
    /\bwhich means\b/i,
    /\bas a result\b/i,
    /\bfor example\b/i,
    /\bevidence\b/i,
    /\bcorrelat(e|es|ed|ion)\b/i,
    /\brelationship\b/i,
    /\bprediction\b/i,
    /\bcompared with\b/i,
    /\bmore\b.+\bthan\b/i,
    /\bless\b.+\bthan\b/i
  ];

  function clean(text){
    return String(text || '').toLowerCase().replace(/[^a-z0-9+\s]/g,' ').replace(/\s+/g,' ').trim();
  }

  function stem(word){
    return word.replace(/ies$/,'y').replace(/ing$/,'').replace(/ed$/,'').replace(/s$/,'');
  }

  function tokens(text){
    return clean(text).split(' ').filter(function(word){
      return word.length > 2 && stopWords.indexOf(word) === -1;
    }).map(stem);
  }

  function tokenSet(text){
    var set = {};
    normalizeWords(text).concat(tokens(text)).forEach(function(word){
      if(word && stopWords.indexOf(word) === -1) set[word] = true;
    });
    return set;
  }

  function has(text, phrase){
    if(!phrase) return false;
    var escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/\s+/g,'\\s+');
    return new RegExp('\\b'+escaped+'\\b','i').test(text);
  }

  function flexiblePhraseScore(text, phrase){
    if(has(text, phrase)) return 1;
    var set = tokenSet(text);
    var parts = tokens(phrase);
    if(!parts.length) return 0;
    var hits = parts.reduce(function(total, part){ return total + (set[part] ? 1 : 0); },0);
    var ratio = hits / parts.length;
    if(ratio >= 0.9) return 0.95;
    if(ratio >= 0.75) return 0.8;
    if(ratio >= 0.5) return 0.45;
    return 0;
  }

  function listScore(text, phrases){
    if(!phrases || !phrases.length) return 0;
    var total = phrases.reduce(function(sum, phrase){ return sum + flexiblePhraseScore(text, phrase); },0);
    return total / phrases.length;
  }

  function relationshipCoverage(text, relationships){
    if(!relationships || !relationships.length) return 0.5;
    var total = relationships.reduce(function(sum, pair){
      var first = flexiblePhraseScore(text, pair[0]);
      var second = flexiblePhraseScore(text, pair[1]);
      var nearPattern = pair[0].replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'.{0,55}'+pair[1].replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      var reversePattern = pair[1].replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'.{0,55}'+pair[0].replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      var near = new RegExp(nearPattern+'|'+reversePattern,'i').test(text);
      if(first && second && near) return sum + 1;
      if(first && second) return sum + 0.72;
      if(first || second) return sum + 0.25;
      return sum;
    },0);
    return total / relationships.length;
  }

  function reasoning(text){
    var count = reasoningPatterns.reduce(function(total, pattern){ return total + (pattern.test(text) ? 1 : 0); },0);
    var sentenceCount = String(text).split(/[.!?]+/).filter(function(part){ return part.trim().length > 0; }).length;
    var structure = sentenceCount > 1 ? 0.2 : 0;
    return clamp((count / 2) + structure, 0, 1);
  }

  function profileFor(item){
    var question = item.question || '';
    for(var i=0;i<questionProfiles.length;i++){
      if(questionProfiles[i].match.test(question)) return questionProfiles[i];
    }
    var keywords = item.keywords || [];
    return {
      label:item.topic || 'science answer',
      must:keywords.length ? keywords : tokens(item.explanation || item.question).slice(0,5),
      should:tokens(item.explanation || '').slice(0,6),
      avoid:[],
      relationships:[],
      minimumIdeas:item.minMatches || 2
    };
  }

  function conceptCoverage(text, expectedText){
    var relevant = conceptGroups.filter(function(group){
      return group.strong.concat(group.soft).some(function(term){ return flexiblePhraseScore(expectedText, term) > 0.5; });
    });
    if(!relevant.length) relevant = conceptGroups;
    var hits = relevant.filter(function(group){
      var strong = listScore(text, group.strong);
      var soft = listScore(text, group.soft);
      return strong >= 0.25 || soft >= 0.28;
    });
    return {
      score:hits.length / relevant.length,
      hitLabels:hits.map(function(group){ return group.label; }),
      missingLabels:relevant.filter(function(group){ return hits.indexOf(group) === -1; }).map(function(group){ return group.label; })
    };
  }

  function misconceptionHits(answerText, expectedText){
    return misconceptionChecks.filter(function(rule){
      var expected = rule.ifExpected.some(function(term){ return flexiblePhraseScore(expectedText, term) > 0.5; });
      var wrong = rule.wrong.some(function(term){ return flexiblePhraseScore(answerText, term) > 0.65; });
      var right = rule.ifExpected.some(function(term){ return flexiblePhraseScore(answerText, term) > 0.55; });
      return expected && wrong && !right;
    });
  }

  function contradictionScore(answerText, expectedText){
    var score = 0;
    contradictionPairs.forEach(function(pair){
      var expectedFirst = flexiblePhraseScore(expectedText, pair[0]) > 0.6;
      var expectedSecond = flexiblePhraseScore(expectedText, pair[1]) > 0.6;
      var saidFirst = flexiblePhraseScore(answerText, pair[0]) > 0.6;
      var saidSecond = flexiblePhraseScore(answerText, pair[1]) > 0.6;
      if(expectedFirst && !expectedSecond && saidSecond && !saidFirst) score += 0.2;
      if(expectedSecond && !expectedFirst && saidFirst && !saidSecond) score += 0.2;
    });
    if(/\b(no|not|never|without|isn'?t|doesn'?t)\b/i.test(answerText) && !/\b(no|not|never|without|isn'?t|doesn'?t)\b/i.test(expectedText)){
      score += 0.08;
    }
    return clamp(score, 0, 0.5);
  }

  function qualityScore(words, reasonScore, type){
    var target = type === 'long' ? 32 : 12;
    var lengthScore = clamp(words.length / target, 0, 1);
    var completeSentence = words.length >= 6 ? 0.2 : 0;
    var explanation = reasonScore * 0.5;
    return clamp((lengthScore * 0.3) + completeSentence + explanation, 0, 1);
  }

  function markBand(total){
    if(total >= 0.86) return 'excellent';
    if(total >= 0.70) return 'strong';
    if(total >= 0.58) return 'sound';
    if(total >= 0.42) return 'partial';
    return 'limited';
  }

  function topMissing(profile, answerText){
    var missing = profile.must.filter(function(phrase){ return flexiblePhraseScore(answerText, phrase) < 0.55; });
    if(missing.length) return missing.slice(0,2);
    return profile.should.filter(function(phrase){ return flexiblePhraseScore(answerText, phrase) < 0.55; }).slice(0,2);
  }

  function modelAnswerSimilarity(answerText, modelText){
    var answerTokens = tokens(answerText);
    var modelTokens = tokens(modelText);
    if(!answerTokens.length || !modelTokens.length) return 0;
    var answerSet = {};
    var modelSet = {};
    answerTokens.forEach(function(token){ answerSet[token] = true; });
    modelTokens.forEach(function(token){ modelSet[token] = true; });
    var shared = Object.keys(answerSet).filter(function(token){ return modelSet[token]; }).length;
    var precision = shared / Math.max(1, Object.keys(answerSet).length);
    var recall = shared / Math.max(1, Object.keys(modelSet).length);
    var phraseBoost = modelTokens.length >= 4 && answerText.indexOf(modelText) !== -1 ? 0.25 : 0;
    return clamp(((precision * 0.45) + (recall * 0.55) + phraseBoost), 0, 1);
  }

  function makeFeedback(result){
    if(result.score){
      return 'Mini marker: this is ' + result.band + ' because it covers ' + result.bestEvidence + '. ' +
        (result.reasonScore >= 0.55 ? 'Your explanation links ideas clearly.' : 'To improve, add a clearer because/therefore link.') +
        ' Confidence: ' + result.confidence + '%.';
    }
    var missing = result.missing.length ? result.missing.join(', ') : 'the main science idea';
    var warning = result.misconception ? result.misconception.note : (result.contradiction ? 'Check that you have not mixed up two opposite ideas.' : 'Add the missing idea and explain why it matters.');
    return 'Mini marker: this is ' + result.band + ' because it needs ' + missing + '. ' + warning +
      ' Confidence: ' + result.confidence + '%.';
  }

  function grade(answer, item){
    var profile = profileFor(item);
    var answerText = clean(answer);
    if(isQuestionCopyAnswer(answer,item)){
      return {
        score: 0,
        explanation: 'Mini marker: this mostly repeats the question rather than answering it. Add the science idea from the model answer and explain why it answers the question.',
        _aiProvider: 'Mini marker'
      };
    }
    var modelText = clean(item.explanation || '');
    var expectedText = clean((item.explanation || '') + ' ' + (item.question || '') + ' ' + (item.keywords || []).join(' '));
    var words = tokens(answer);
    var modelScore = modelAnswerSimilarity(answerText, modelText);
    var mustScore = listScore(answerText, profile.must);
    var shouldScore = listScore(answerText, profile.should);
    var relationScore = relationshipCoverage(answerText, profile.relationships);
    var reasonScore = reasoning(answerText);
    var quality = qualityScore(words, reasonScore, item.type);
    var concepts = conceptCoverage(answerText, expectedText);
    var misconceptions = misconceptionHits(answerText, expectedText);
    var contradiction = contradictionScore(answerText, expectedText);
    var avoidPenalty = listScore(answerText, profile.avoid) * 0.22;
    var enoughCoreIdeas = profile.must.filter(function(phrase){ return flexiblePhraseScore(answerText, phrase) >= 0.55; }).length >= profile.minimumIdeas;
    var total = (mustScore * 0.34) +
      (shouldScore * 0.13) +
      (relationScore * 0.16) +
      (reasonScore * 0.13) +
      (quality * 0.09) +
      (concepts.score * 0.15) +
      (modelScore * 0.18) -
      contradiction -
      avoidPenalty -
      (misconceptions.length ? 0.18 : 0);
    total = clamp(total, 0, 1);
    var matchesModel = modelScore >= 0.62 || (modelText && answerText === modelText);
    if(matchesModel) total = Math.max(total, 0.72);
    var passed = matchesModel || (total >= 0.54 && (enoughCoreIdeas || mustScore >= 0.5 || relationScore >= 0.45 || concepts.score >= 0.5));
    var bestEvidence = profile.must.filter(function(phrase){ return flexiblePhraseScore(answerText, phrase) >= 0.55; }).slice(0,2).join(' and ');
    if(!bestEvidence && matchesModel) bestEvidence = 'the model answer closely';
    if(!bestEvidence) bestEvidence = concepts.hitLabels.slice(0,2).join(' and ') || profile.label;
    var result = {
      score: passed ? 1 : 0,
      band: markBand(total),
      confidence: Math.round(total * 100),
      reasonScore: reasonScore,
      contradiction: contradiction > 0,
      misconception: misconceptions[0],
      missing: topMissing(profile, answerText),
      bestEvidence: bestEvidence
    };
    return {
      score: result.score,
      explanation: makeFeedback(result),
      _aiProvider: 'Mini marker'
    };
  }

  return {grade: grade};
})();

function gradeWithMiniMarker(answer,item){
  return Promise.resolve(OfflineMarkerEngine.grade(answer,item));
}

function getAiStatus(){
  if(!aiEnabled) return {className:'amber', title:'AI providers disabled in debug menu'};
  if(puterAiAvailable) return {className:'green', title:'Puter cloud AI ready - no download needed'};
  if(pollinationsAvailable) return {className:'green', title:'Backup cloud AI will be tried if Puter is blocked'};
  if(browserAiAvailable) return {className:'green', title:'Browser AI ready'};
  if(ollamaAvailable) return {className:'green', title:'Ollama AI ready (local)'};
  if(apiKeyValid || OPENAI_API_KEY_PLAINTEXT || ENCRYPTED_OPENAI_KEY) return {className:'green', title:'OpenAI API ready'};
  if(miniMarkerAvailable) return {className:'amber', title:'Mini marker ready - works offline on school computers'};
  return {className:'red', title:'No AI grading available'};
}

function hasConnectedAI(){
  return !!(aiEnabled && (puterAiAvailable || pollinationsAvailable || browserAiAvailable || ollamaAvailable || OPENAI_API_KEY_PLAINTEXT || ENCRYPTED_OPENAI_KEY));
}

async function gradeWithBestAI(text,item){
  var guidance = item.explanation || item.question;
  var providers = [];
  if(aiEnabled && puterAiAvailable) providers.push({name:'Puter', grade:function(){return gradeWithPuterAI(text, guidance);}, fail:function(){puterAiAvailable=false;}});
  if(aiEnabled && pollinationsAvailable) providers.push({name:'Backup cloud', grade:function(){return gradeWithPollinationsAI(text, guidance);}, fail:function(){pollinationsAvailable=false;}});
  if(aiEnabled && browserAiAvailable) providers.push({name:'Browser AI', grade:function(){return gradeWithBrowserAI(text, guidance);}, fail:function(){browserAiAvailable=false;}});
  if(aiEnabled && ollamaAvailable) providers.push({name:'Ollama', grade:function(){return gradeWithOllama(text, guidance);}, fail:function(){ollamaAvailable=false;}});
  if(aiEnabled && (OPENAI_API_KEY_PLAINTEXT || ENCRYPTED_OPENAI_KEY)) providers.push({name:'OpenAI', grade:function(){return clientGradeWithOpenAI(text, guidance);}, fail:function(){apiKeyValid=false;}});
  if(miniMarkerAvailable) providers.push({name:'Mini marker', grade:function(){return gradeWithMiniMarker(text, item);}, fail:function(){}});

  var errors = [];
  for(var i=0;i<providers.length;i++){
    try{
      var result = await providers[i].grade();
      result._aiProvider = providers[i].name;
      lastAiProvider = providers[i].name;
      return result;
    }catch(err){
      errors.push(providers[i].name + ': ' + err.message);
      providers[i].fail();
      console.log('AI provider failed: '+providers[i].name+' - '+err.message);
    }
  }
  lastAiProvider = '';
  throw new Error(errors.join(' | ') || 'No marker available');
}

function submitShort(){
  if(answeredLast) return;
  var text=$('shortReply').value.trim();
  if(!text){alert('Please type an answer before submitting.');$('shortReply').focus();return;}
  var submitBtn = $('submitShortBtn');
  if(submitBtn){
    submitBtn.disabled = true;
    submitBtn.textContent = 'Checking with AI...';
  }
  var item=currentQuestion();
  item._selected=text;
  answeredLast=true;
  totals.answered++;
  if(isQuestionCopyAnswer(text,item)){
    item._correct = false;
    item._aiUsed = true;
    item._aiFeedback = 'Mini marker: this mostly repeats the question rather than answering it. Add the science idea from the model answer and explain why it answers the question.';
    lastAiProvider = 'Copy check';
    renderCurrentQuestion();
    updateProgress();
    return;
  }
  gradeWithBestAI(text,item)
    .then(function(result){
      item._correct = !!(result && result.score);
      item._aiUsed = !!(result && result._aiProvider);
      item._aiFeedback = item._aiUsed && result && result.explanation ? result.explanation : '';
      if(item._correct) totals.correct++;
      renderCurrentQuestion();
      updateProgress();
    })
    .catch(function(err){
      console.log('AI grading failed: '+err.message+", using mini marker");
      return gradeWithMiniMarker(text,item).then(function(result){
        item._correct = !!(result && result.score);
        item._aiFeedback = result && result.explanation ? result.explanation : '';
        item._aiUsed = true;
        if(item._correct) totals.correct++;
        renderCurrentQuestion();
        updateProgress();
      });
    });
}

function nextQuestion(){
  advanceQuestion();
}

function updateProgress(){
  var percent = 0;
  if(totals.answered > 0){
    percent = clamp(Math.round(totals.correct / totals.answered * 100),0,100);
  }
  $('progFill').style.width = percent + '%';
  $('scorePercent').textContent = percent + '%';
  $('scoreLabel').textContent = totals.answered + ' answered';
  renderDebugMenu();
}

function providerDebugRows(){
  return [
    ['Puter cloud', puterAiAvailable],
    ['Backup cloud', pollinationsAvailable],
    ['Browser AI', browserAiAvailable],
    ['Ollama', ollamaAvailable],
    ['OpenAI key', !!(apiKeyValid || OPENAI_API_KEY_PLAINTEXT || ENCRYPTED_OPENAI_KEY)],
    ['Mini marker', miniMarkerAvailable]
  ].map(function(row){
    return '<div><dt>'+escapeHtml(row[0])+'</dt><dd class="'+(row[1]?'debug-ok':'debug-off')+'">'+(row[1]?'on':'off')+'</dd></div>';
  }).join('');
}

function withTimeout(promise, ms){
  return new Promise(function(resolve, reject){
    var timeout = setTimeout(function(){ reject(new Error('timeout')); }, ms);
    promise.then(function(value){
      clearTimeout(timeout);
      resolve(value);
    }).catch(function(err){
      clearTimeout(timeout);
      reject(err);
    });
  });
}

async function runAiConnectionTest(){
  if(aiConnectionTesting) return;
  aiConnectionTesting = true;
  aiConnectionTestResults = [{name:'Status', status:'testing', detail:'Running connection checks...'}];
  renderDebugMenu();
  var testAnswer = 'A chemical change creates a new substance.';
  var testGuidance = 'A chemical change makes a new substance.';
  var tests = [
    {
      name:'Puter cloud',
      run:function(){
        if(!checkPuterAiAvailable()) throw new Error('Puter script not loaded');
        return gradeWithPuterAI(testAnswer, testGuidance);
      }
    },
    {
      name:'Backup cloud',
      run:function(){
        return gradeWithPollinationsAI(testAnswer, testGuidance);
      }
    },
    {
      name:'Browser AI',
      run:function(){
        if(!browserAiAvailable) throw new Error('Browser AI not available');
        return gradeWithBrowserAI(testAnswer, testGuidance);
      }
    },
    {
      name:'Ollama',
      run:function(){
        if(!ollamaAvailable) throw new Error('Ollama not available');
        return gradeWithOllama(testAnswer, testGuidance);
      }
    },
    {
      name:'Mini marker',
      run:function(){
        return gradeWithMiniMarker(testAnswer, {
          type:'short',
          topic:'Debug',
          question:'How can you tell a chemical change happened?',
          keywords:['chemical','new substance'],
          minMatches:1,
          explanation:testGuidance
        });
      }
    }
  ];
  aiConnectionTestResults = [];
  for(var i=0;i<tests.length;i++){
    try{
      var result = await withTimeout(Promise.resolve().then(tests[i].run), 4500);
      aiConnectionTestResults.push({name:tests[i].name, status:'ok', detail:result && result.explanation ? result.explanation : 'Connected'});
    }catch(err){
      aiConnectionTestResults.push({name:tests[i].name, status:'blocked', detail:err.message || String(err)});
    }
    renderDebugMenu();
  }
  aiConnectionTesting = false;
  renderDebugMenu();
}

function aiConnectionTestHtml(){
  if(!aiConnectionTestResults.length){
    return '<pre>No test run yet. Press "Test AI connections".</pre>';
  }
  return '<dl class="debug-grid providers">'+aiConnectionTestResults.map(function(result){
    var cls = result.status === 'ok' ? 'debug-ok' : (result.status === 'testing' ? '' : 'debug-off');
    return '<div><dt>'+escapeHtml(result.name)+'</dt><dd class="'+cls+'">'+escapeHtml(result.status)+': '+escapeHtml(result.detail).slice(0,120)+'</dd></div>';
  }).join('')+'</dl>';
}

function renderDebugMenu(){
  var panel = $('debugMenu');
  if(!panel) return;
  if(!debugMenuOpen){
    panel.classList.add('hidden');
    return;
  }
  var item = currentQuestion();
  var answered = item && item._selected !== undefined;
  var aiStatus = getAiStatus();
  var points = totals.correct + ' / ' + totals.answered;
  var percent = totals.answered ? clamp(Math.round(totals.correct / totals.answered * 100),0,100) : 0;
  var bankCounts = questionTypeCounts();
  panel.classList.remove('hidden');
  panel.innerHTML =
    '<div class="debug-head">' +
      '<strong>Debug Menu</strong>' +
      '<button type="button" onclick="toggleDebugMenu(false)">Close</button>' +
    '</div>' +
    '<div class="debug-actions">' +
      '<button type="button" onclick="setAiEnabled('+(!aiEnabled)+')">'+(aiEnabled?'Disable AI providers':'Enable AI providers')+'</button>' +
      '<button type="button" onclick="skipToWordedQuestion()">Skip to worded question</button>' +
      '<button type="button" onclick="forceMiniMarkerForCurrent()">Test local marker</button>' +
      '<button type="button" onclick="runAiConnectionTest()"'+(aiConnectionTesting?' disabled':'')+'>'+(aiConnectionTesting?'Testing AI...':'Test AI connections')+'</button>' +
    '</div>' +
    '<dl class="debug-grid">' +
      '<div><dt>Question</dt><dd>'+questionCount+' / history '+questionHistory.length+'</dd></div>' +
      '<div><dt>Topic</dt><dd>'+escapeHtml(item ? item.topic : '-').slice(0,80)+'</dd></div>' +
      '<div><dt>Type</dt><dd>'+escapeHtml(item ? item.type : '-')+'</dd></div>' +
      '<div><dt>Generated</dt><dd>'+String(!!(item && item.generated))+(item && item.generatedId ? ' #'+item.generatedId : '')+'</dd></div>' +
      '<div><dt>Answered</dt><dd>'+String(answered)+'</dd></div>' +
      '<div><dt>Correct</dt><dd>'+String(item && item._correct !== undefined ? item._correct : '-')+'</dd></div>' +
      '<div><dt>Points</dt><dd>'+points+' ('+percent+'%)</dd></div>' +
      '<div><dt>Selected</dt><dd>'+escapeHtml(answered ? item._selected : '-').slice(0,120)+'</dd></div>' +
      '<div><dt>AI enabled</dt><dd class="'+(aiEnabled?'debug-ok':'debug-off')+'">'+String(aiEnabled)+'</dd></div>' +
      '<div><dt>AI status</dt><dd>'+escapeHtml(aiStatus.title)+'</dd></div>' +
      '<div><dt>Last provider</dt><dd>'+escapeHtml(lastAiProvider || '-')+'</dd></div>' +
      '<div><dt>Periodic element</dt><dd>'+selectedElementNumber+' / '+escapeHtml(selectedPeriodicProperty)+'</dd></div>' +
      '<div><dt>Seen questions</dt><dd>'+Object.keys(seenQuestionKeys).length+' / '+questionBank.length+'</dd></div>' +
      '<div><dt>Bank ratio</dt><dd>'+bankCounts.mcq+' MCQ / '+bankCounts.word+' word</dd></div>' +
      '<div><dt>Bank generated</dt><dd>'+generatedQuestionCount+'</dd></div>' +
    '</dl>' +
    '<h3>Providers</h3>' +
    '<dl class="debug-grid providers">'+providerDebugRows()+'</dl>' +
    '<h3>AI Connection Test</h3>' +
    aiConnectionTestHtml() +
    '<h3>Current Question</h3>' +
    '<pre>'+escapeHtml(item ? item.question : '-')+'</pre>' +
    '<h3>Model Answer</h3>' +
    '<pre>'+escapeHtml(item && item.explanation ? item.explanation : '-')+'</pre>' +
    '<h3>Keywords</h3>' +
    '<pre>'+escapeHtml(item && item.keywords ? item.keywords.join(', ') : '-')+'</pre>' +
    '<h3>Feedback</h3>' +
    '<pre>'+escapeHtml(item && item._aiFeedback ? item._aiFeedback : '-')+'</pre>';
}

function toggleDebugMenu(force){
  debugMenuOpen = typeof force === 'boolean' ? force : !debugMenuOpen;
  renderDebugMenu();
}

function setAiEnabled(enabled){
  aiEnabled = !!enabled;
  renderCurrentQuestion();
  renderDebugMenu();
}

function forceMiniMarkerForCurrent(){
  var item = currentQuestion();
  var answer = item && item._selected !== undefined ? item._selected : ($('shortReply') ? $('shortReply').value.trim() : '');
  if(!item || !answer){
    alert('Type or submit an answer first.');
    return;
  }
  gradeWithMiniMarker(answer,item).then(function(result){
    item._correct = !!result.score;
    item._aiUsed = true;
    item._aiFeedback = result.explanation;
    lastAiProvider = 'Mini marker';
    renderCurrentQuestion();
    renderDebugMenu();
  });
}

function setupDebugMenu(){
  var panel = document.createElement('aside');
  panel.id = 'debugMenu';
  panel.className = 'debug-menu hidden';
  panel.setAttribute('aria-live','polite');
  document.body.appendChild(panel);
  document.addEventListener('keydown', function(event){
    var target = event.target;
    var typing = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
    if(typing) return;
    if(event.key === '\\' || event.code === 'Backslash'){
      event.preventDefault();
      toggleDebugMenu();
    }
  });
}

window.addEventListener('DOMContentLoaded', async function(){
  puterAiAvailable = checkPuterAiAvailable();
  browserAiAvailable = await checkBrowserAiAvailable();
  if(!puterAiAvailable && !pollinationsAvailable && !browserAiAvailable){
    ollamaAvailable = await checkOllamaAvailable();
  }
  if(!puterAiAvailable && !pollinationsAvailable && !browserAiAvailable && !ollamaAvailable){
    apiKeyValid = await validateOpenAIKey();
  }
  expandQuestionBankToTarget(1000);
  setupDebugMenu();
  startQuiz();
  setupPeriodicToggle();
  enhancePeriodicTable();
  renderInteractivePeriodicTable();
});
