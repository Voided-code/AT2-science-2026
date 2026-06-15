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
var pollinationsAvailable = false;
var aiStartupChecking = true;
var BACKEND_AI_ENDPOINT = '/api/mark';
var BACKEND_HEALTH_ENDPOINT = '/api/health';
var backendAiAvailable = false;

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
  const prompt = `You are a Year 8 Science teacher grading student answers.\n\n${assessmentContext}\n\nExpected guidance: ${guidance}\n\nStudent answer: ${answer}\n\nGive a mark out of 3 for normal short answers, or out of 5 for extended explanations. One-word answers can receive small credit for one useful idea, but cannot receive full marks. Score is 1 only when the answer earns at least 60% of the marks. Give helpful teaching feedback: say what was right or missing, then give one specific way to improve the answer. Keep it to 2 short sentences.\nRespond ONLY with valid JSON in this exact format:\n{"score": 0 or 1, "mark": 0, "maxMark": 3, "explanation": "2 short instructive sentences"}\n\nJSON:`;
  
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

async function checkBackendAiAvailable(){
  try{
    var res = await withTimeout(fetch(BACKEND_HEALTH_ENDPOINT, {method:'GET'}), 3500);
    if(!res.ok) return false;
    var data = await res.json();
    return !!(data && data.ok);
  }catch(e){
    return false;
  }
}

async function gradeWithBackendAI(answer,item,options){
  var maxMark = maxMarkForItem(item);
  var res = await withTimeout(fetch(BACKEND_AI_ENDPOINT, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      answer: answer,
      question: item.question,
      guidance: item.explanation || '',
      keywords: item.keywords || [],
      type: item.type,
      maxMark: maxMark
    })
  }), 12000);
  if(!res.ok){
    var detail = await res.text();
    throw new Error('Backend AI error '+res.status+': '+detail.slice(0, 120));
  }
  var data = await res.json();
  var hasOtherAiProvider = puterAiAvailable || pollinationsAvailable || browserAiAvailable || ollamaAvailable || OPENAI_API_KEY_PLAINTEXT || ENCRYPTED_OPENAI_KEY;
  if(data && data.fallback && hasOtherAiProvider && !(options && options.acceptFallback)){
    throw new Error('Hosted AI used backup marking, trying another AI provider');
  }
  return data;
}

async function checkPuterAiUsable(){
  if(!checkPuterAiAvailable()) return false;
  try{
    var response = await withTimeout(window.puter.ai.chat('Reply only with OK if AI is available.', {model: 'gpt-4o-mini'}), 5500);
    return String(typeof response === 'string' ? response : JSON.stringify(response || '')).length > 0;
  }catch(e){
    return false;
  }
}

async function gradeWithPuterAI(answer, guidance){
  if(!checkPuterAiAvailable()) throw new Error('Puter AI is not loaded');
  var prompt = 'You are a Year 8 Science teacher grading a quiz answer.\n\n' +
    assessmentContext + '\n\n' +
    'Expected guidance: ' + guidance + '\n\n' +
    'Student answer: ' + answer + '\n\n' +
    'Give a mark out of 3 for normal short answers, or out of 5 for extended explanations.\n' +
    'One-word answers can receive small credit for one useful idea, but cannot receive full marks.\n' +
    'Mark score as 1 only if the answer earns at least 60% of the marks and shows the same scientific idea, even if the wording is different.\n' +
    'Give helpful teaching feedback: say what was right or missing, then give one specific way to improve the answer. Keep it to 2 short sentences.\n' +
    'Return ONLY valid JSON in this format: {"score":0,"mark":0,"maxMark":3,"explanation":"2 short instructive sentences"}';
  var response = await window.puter.ai.chat(prompt, {model: 'gpt-4o-mini'});
  var txt = typeof response === 'string' ? response : (response && response.message && response.message.content) || String(response || '');
  txt = txt.trim().replace(/^```json\s*/i,'').replace(/^```\s*/,'').replace(/\s*```$/,'');
  try{
    return JSON.parse(txt);
  }catch(e){
    return {score: /correct/i.test(txt) && !/incorrect|not correct/i.test(txt) ? 1 : 0, explanation: txt.slice(0, 120) || 'AI returned feedback but not JSON.'};
  }
}

async function checkPollinationsAvailable(){
  try{
    var res = await withTimeout(fetch(POLLINATIONS_ENDPOINT, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        model: 'openai',
        messages: [{role:'user', content:'Reply only with OK.'}],
        temperature: 0,
        max_tokens: 5
      })
    }), 5500);
    if(!res.ok) return false;
    var data = await res.json();
    var txt = data && data.choices && data.choices[0] && data.choices[0].message ? data.choices[0].message.content : '';
    return /ok/i.test(String(txt || '')) || !!txt;
  }catch(e){
    return false;
  }
}

async function gradeWithPollinationsAI(answer, guidance){
  var body = {
    model: 'openai',
    messages: [
      {
        role: 'system',
        content: 'You are a Year 8 Science teacher. Return only JSON: {"score":0|1,"mark":0,"maxMark":3,"explanation":"2 short instructive sentences"}. Give marks out of 3, or out of 5 for extended explanations. One-word answers cannot receive full marks.'
      },
      {
        role: 'user',
        content: assessmentContext + '\n\nExpected guidance: ' + guidance + '\n\nStudent answer: ' + answer + '\n\nGive a mark. Score is 1 only if the answer earns at least 60% and shows the same science idea. Explain what was right or missing and give one specific improvement.'
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

  var prompt = 'You are a Year 8 Science teacher. Grade the student answer with a mark.\n\n' +
    assessmentContext + '\n\n' +
    'Expected guidance: ' + guidance + '\n\n' +
    'Student answer: ' + answer + '\n\n' +
    'Give a mark out of 3 for normal short answers, or out of 5 for extended explanations. One-word answers cannot receive full marks. Score is 1 only when the answer earns at least 60%.\n' +
    'Give helpful teaching feedback: say what was right or missing, then give one specific way to improve the answer. Keep it to 2 short sentences.\n' +
    'Return only JSON like {"score":1,"mark":2,"maxMark":3,"explanation":"2 short instructive sentences"}';

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
      { role: 'system', content: 'You are a Year 8 Science teacher. Return JSON: {"score":0|1, "mark":0, "maxMark":3, "explanation":"2 short instructive sentences"}. Give marks out of 3, or out of 5 for extended explanations. One-word answers cannot receive full marks.' },
      { role: 'user', content: `${assessmentContext}\n\nGuidance: ${guidance}\n\nStudent answer: ${answer}\n\nGive a mark. Score is 1 only if the answer earns at least 60% and shows the same science idea. Return only valid JSON.` }
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

var questionBank = (typeof QUESTION_BANK !== 'undefined' && QUESTION_BANK.length) ? QUESTION_BANK.slice() : buildQuestionBank();
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
    {question:'Explain how the structure of the periodic table helps scientists predict the properties of elements using groups and periods. Write about 4-5 sentences and include an example.',type:'long',keywords:['groups','periods','properties','predict','atomic number','reactive','noble gas'],minMatches:3,explanation:'The periodic table arranges elements by atomic number and groups elements with similar chemistry together, so scientists can predict properties from position. Groups show similar outer-shell patterns and reactivity, while periods show changes across rows.'},
    {question:'Describe how a student planning an investigation on reactions between acids and metals would use working scientifically skills. Write about 4-5 sentences covering prediction, variables, safety, observations and conclusion.',type:'long',keywords:['plan','hypothesis','acid','metal','reaction','evidence','observe','procedure'],minMatches:3,explanation:'A student uses working scientifically skills to plan the experiment, predict outcomes, control variables, follow a safe procedure, observe reactions, collect evidence, and explain results using that evidence.'},
    {question:'Explain why elements in the same group have similar properties and why properties change across a period. Write about 4-5 sentences and connect your answer to electron shells.',type:'long',keywords:['group','period','similar','properties','outer shell','reactivity','trend'],minMatches:3,explanation:'Elements in a group share outer-shell structure, so they behave similarly. Properties vary across a period as atomic number increases and electron shells fill, which changes patterns such as reactivity.'},
    {question:'A student says copper is used for electrical wiring only because it is cheap. Do you agree? Write about 4-5 sentences explaining which property makes copper suitable, why that property matters, and one other factor that could affect its use.',type:'long',keywords:['copper','conductivity','electrical','wiring','property','use','because'],minMatches:3,explanation:'Copper is suitable for electrical wiring mainly because it conducts electricity very well. Cost may matter, but the key scientific property is conductivity, which lets electrical energy move through the wire efficiently. Other factors can include flexibility, availability and corrosion resistance.'},
    {question:'A student tests four unknown solids and records whether they are shiny, brittle, malleable and conductive. How could the student use these observations to decide which samples are metals, non-metals or metalloids? Explain why.',type:'long',keywords:['shiny','brittle','malleable','conductive','metal','non-metal','metalloid','observations'],minMatches:4,explanation:'The student can compare the observations with known properties. Metals are usually shiny, malleable and conductive, non-metals are often brittle and poor conductors, and metalloids can show mixed properties such as limited conductivity.'},
    {question:'A graph shows that one metal produces bubbles much faster than another when placed in acid. Write about 4-5 sentences explaining what conclusion you could draw, why the graph is useful evidence, and how repeated data would make the conclusion stronger.',type:'long',keywords:['graph','bubbles','metal','acid','reaction speed','data','trend','conclusion','evidence'],minMatches:4,explanation:'The graph can show which metal reacts faster by comparing the rate of bubble production. It is useful evidence because the data reveals a trend or pattern, allowing a conclusion about relative reactivity. Repeated trials can make the conclusion more reliable.'},
    {question:'How did new evidence and technology help scientists improve models of atomic structure over time? Write about 4-5 sentences, give at least one example, and explain why the model changed.',type:'long',keywords:['evidence','technology','model','atomic structure','electron','nucleus','neutron','changed'],minMatches:4,explanation:'Atomic models changed when new evidence became available. For example, cathode ray experiments supported the electron, gold foil evidence supported the nucleus, and later experiments supported the neutron, so scientists updated models to better match observations.'},
    {question:'An atom has 11 protons. Write about 4-5 sentences explaining what this tells you about the element, its atomic number, its electrons if neutral, and how you could model its atomic structure.',type:'long',keywords:['11','protons','atomic number','sodium','electrons','neutral'],minMatches:3,explanation:'An atom with 11 protons has atomic number 11, so it is sodium. If it is neutral, it has 11 electrons because neutral atoms have equal numbers of protons and electrons. A simple model would place the electrons in shells around the nucleus.'}
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

  var slideQuestions = [
    {topic:'Periodic table slides',type:'mcq',question:'When reading an element box on the periodic table, what does the atomic number tell you?',choices:['The number of protons','The number of compounds','The number of molecules','The state of matter'],answer:0,explanation:'The atomic number is the number of protons in the atom, and it determines the element.'},
    {topic:'Periodic table slides',type:'mcq',question:'What does the mass number of an atom represent?',choices:['Protons plus neutrons','Electrons only','Valence electrons only','Groups plus periods'],answer:0,explanation:'Mass number is the total number of protons and neutrons in the nucleus.'},
    {topic:'Periodic table slides',type:'mcq',question:'What do horizontal periods on the periodic table represent in atomic structure?',choices:['The number of electron shells','The number of valence electrons','Only the number of neutrons','The metal reactivity series'],answer:0,explanation:'Atoms in the same period have the same number of electron shells.'},
    {topic:'Periodic table slides',type:'mcq',question:'Why do elements in the same vertical group often have similar chemical properties?',choices:['They have the same number of valence electrons','They have the same mass number','They are all gases','They all have no electrons'],answer:0,explanation:'Elements in a group have the same number of outer-shell electrons, so they often react in similar ways.'},
    {topic:'Periodic table slides',type:'mcq',question:'Why are Group 18 noble gases described as inert or very unreactive?',choices:['Their outer electron shell is full','They have no protons','They are all metals','Their atoms are destroyed easily'],answer:0,explanation:'Noble gases already have full outer electron shells, making them very unreactive.'},
    {topic:'Periodic table slides',type:'short',question:'Explain why periods and groups are both useful when predicting an element’s properties. Give 1-2 sentences.',keywords:['period','group','shells','valence','properties','predict'],minMatches:3,explanation:'Periods show the number of electron shells, while groups show the number of valence electrons. Together, these patterns help predict properties and reactivity.'},
    {topic:'Periodic table slides',type:'long',question:'Use the class slides to explain how groups, periods and valence electrons help scientists predict element properties. Write about 4-5 sentences and include noble gases or halogens as an example.',keywords:['groups','periods','valence electrons','shells','properties','predict','noble gases','halogens'],minMatches:4,explanation:'Groups contain elements with the same number of valence electrons, so they have similar chemical properties. Periods show the number of electron shells. Group 17 halogens react similarly because they have seven outer electrons, while Group 18 noble gases are unreactive because their outer shells are full.'},
    {topic:'Materials slides',type:'mcq',question:'Where are metals, non-metals and semi-metals generally found on the periodic table?',choices:['Metals left, non-metals right, semi-metals between them','Metals right, non-metals left, semi-metals nowhere','All metals are in Group 18','Only non-metals are on the periodic table'],answer:0,explanation:'Metals are generally on the left, non-metals on the right, and semi-metals sit between them.'},
    {topic:'Materials slides',type:'short',question:'Describe two differences between the properties of metals and non-metals. Give 1-2 sentences.',keywords:['metal','non-metal','conductors','malleable','ductile','brittle','shiny','dull'],minMatches:3,explanation:'Metals are usually shiny, malleable, ductile and good conductors of heat and electricity. Non-metals are often dull, brittle and poor conductors.'},
    {topic:'Materials slides',type:'long',question:'A student has an unknown solid that is shiny, can be flattened into a sheet, and conducts electricity. Use the class slides to explain how you would classify it and why. Write about 4-5 sentences.',keywords:['metal','shiny','malleable','conducts','electricity','non-metal','semi-metal','properties'],minMatches:4,explanation:'The solid is most likely a metal because metals are usually shiny, malleable and good conductors of electricity. Non-metals are usually dull, brittle and poor conductors, while semi-metals have mixed properties.'},
    {topic:'Metal bonding slides',type:'long',question:'Explain why metals conduct electricity using the metallic bonding model from the slides. Write about 4-5 sentences and include delocalised electrons, lattice structure and electric current.',keywords:['metals','conduct','electricity','delocalised electrons','lattice','current'],minMatches:4,explanation:'Metal atoms are packed in a regular lattice structure. Some electrons are delocalised, meaning they can move freely between metal atoms. These moving electrons create an electric current, so metals conduct electricity well.'},
    {topic:'Matter classification slides',type:'mcq',question:'Which statement best describes an element?',choices:['A pure substance made of one type of atom only','A mixture of two substances not bonded','A molecule with many different elements only','A solution that cannot be separated'],answer:0,explanation:'An element is a pure substance made of only one type of atom.'},
    {topic:'Matter classification slides',type:'mcq',question:'Which statement best describes a compound?',choices:['Two or more types of atoms chemically bonded together','Two substances mixed but not bonded','Only one type of atom','A physical blend like mud'],answer:0,explanation:'A compound contains two or more types of atoms chemically bonded together.'},
    {topic:'Matter classification slides',type:'mcq',question:'Which statement best describes a mixture?',choices:['Two or more substances not chemically bonded together','One type of atom only','Atoms chemically bonded in fixed ratios','A single pure element'],answer:0,explanation:'A mixture contains substances together without chemical bonding between all parts.'},
    {topic:'Matter classification slides',type:'short',question:'Explain the difference between an element molecule and a compound molecule. Give 1-2 sentences.',keywords:['molecule','element','compound','one type','two or more','atoms'],minMatches:3,explanation:'An element molecule is made of only one type of atom, such as O2. A compound molecule is made of two or more different types of atoms chemically bonded, such as H2O or CO2.'},
    {topic:'Matter classification slides',type:'long',question:'Classify elements, compounds and mixtures using examples from the slides. Write about 4-5 sentences and explain how chemical bonding helps you tell the difference.',keywords:['element','compound','mixture','pure substance','chemically bonded','atoms','examples'],minMatches:4,explanation:'Elements are pure substances made of one type of atom, such as carbon or copper. Compounds are pure substances made of different atoms chemically bonded, such as water or sodium chloride. Mixtures are not pure substances and contain materials not chemically bonded together, such as sea water or mud.'},
    {topic:'Compound naming slides',type:'short',question:'When naming a simple compound that contains a metal and a non-metal, which part of the name usually comes first? Give 1-2 sentences.',keywords:['metal','first','non-metal','ide','compound'],minMatches:2,explanation:'The metal is named first. The second element usually has its ending changed to -ide, such as sodium chloride or magnesium oxide.'},
    {topic:'Compound naming slides',type:'long',question:'Explain the basic naming rules for compounds from the slides. Write about 4-5 sentences including metal-first naming, the -ide ending, and prefixes such as mono, di and tri for non-metal compounds.',keywords:['compound','metal','ide','prefix','mono','di','tri','non-metal'],minMatches:4,explanation:'If a compound contains a metal, the metal is named first and the second element often ends in -ide. For compounds made only of non-metals, prefixes such as mono, di and tri can show the number of atoms. Some compounds also contain polyatomic ions such as hydroxide, sulfate, nitrate or carbonate.'},
    {topic:'History of atom slides',type:'mcq',question:'Which scientist discovered the electron using cathode ray experiments?',choices:['Thomson','Rutherford','Bohr','Chadwick'],answer:0,explanation:'Thomson used cathode ray experiments and identified negatively charged electrons.'},
    {topic:'History of atom slides',type:'mcq',question:'Which experiment led Rutherford to propose a small, dense, positively charged nucleus?',choices:['Gold foil experiment','Cathode ray tube','Neutron scattering only','Periodic table sorting'],answer:0,explanation:'Rutherford’s gold foil experiment showed that some alpha particles bounced back, suggesting a small dense nucleus.'},
    {topic:'History of atom slides',type:'long',question:'Explain how the atomic model changed from Thomson to Rutherford to Bohr. Write about 4-5 sentences and include the evidence or idea that caused each change.',keywords:['Thomson','Rutherford','Bohr','electron','nucleus','shells','evidence','model'],minMatches:4,explanation:'Thomson proposed the plum pudding model after discovering electrons. Rutherford used gold foil evidence to show atoms are mostly empty space with a small dense positive nucleus. Bohr then described electrons moving in set energy levels or shells around the nucleus.'},
    {topic:'History of atom slides',type:'long',question:'Use the timeline from the atom history slides to explain why scientific models change over time. Write about 4-5 sentences using at least two scientists as examples.',keywords:['models','evidence','Democritus','Dalton','Thomson','Rutherford','Bohr','Chadwick'],minMatches:4,explanation:'Scientific models change when new evidence explains observations better. Dalton described atoms as building blocks of matter, Thomson added electrons, Rutherford added the nucleus, Bohr added electron shells, and Chadwick added neutrons in the nucleus.'},
    {topic:'History of atom slides',type:'short',question:'What did Chadwick add to the atomic model? Give 1-2 sentences.',keywords:['Chadwick','neutron','nucleus','no charge'],minMatches:2,explanation:'Chadwick discovered the neutron. Neutrons are uncharged particles found in the nucleus.'}
  ];
  slideQuestions.forEach(function(item){
    if(item.type === 'mcq'){
      bank.push({topic:item.topic,outcomes:['SC4-PRT-01'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});
    } else {
      bank.push({topic:item.topic,outcomes:['SC4-PRT-01'],type:item.type,question:item.question,keywords:item.keywords,minMatches:item.minMatches,explanation:item.explanation});
    }
  });

  // ============================================================
  // EXPANDED OUTCOME-ALIGNED BANK (targets all 14 outcomes)
  // ============================================================

  // --- Outcome 1: Elements in everyday objects ---
  var o1=[
    {o:'water',e:'hydrogen (H) and oxygen (O)',k:'hydrogen oxygen',exp:'Water is H₂O — two hydrogen atoms bonded to one oxygen atom.'},
    {o:'table salt',e:'sodium (Na) and chlorine (Cl)',k:'sodium chlorine',exp:'Table salt is sodium chloride (NaCl), an ionic compound of sodium and chlorine.'},
    {o:'air',e:'mainly nitrogen (N) and oxygen (O)',k:'nitrogen oxygen',exp:'Air is about 78% nitrogen and 21% oxygen.'},
    {o:'steel',e:'iron (Fe) and carbon (C)',k:'iron carbon',exp:'Steel is an alloy of iron with small amounts of carbon added for strength.'},
    {o:'brass',e:'copper (Cu) and zinc (Zn)',k:'copper zinc',exp:'Brass is an alloy of copper and zinc used for instruments and fittings.'},
    {o:'glass',e:'silicon (Si) and oxygen (O)',k:'silicon oxygen',exp:'Most glass is silicon dioxide (SiO₂).'},
    {o:'aluminium foil',e:'aluminium (Al)',k:'aluminium',exp:'Aluminium foil is pure aluminium, a lightweight malleable metal.'},
    {o:'electrical wiring',e:'copper (Cu)',k:'copper',exp:'Copper is used for wiring because it conducts electricity better than most metals.'},
    {o:'pencil lead',e:'carbon (C)',k:'carbon',exp:'Pencil lead is graphite, a soft form of carbon where layers slide over each other.'},
    {o:'bones',e:'calcium (Ca) and phosphorus (P)',k:'calcium phosphorus',exp:'Bones are mainly calcium phosphate, giving them hardness.'},
    {o:'fluoride toothpaste',e:'fluorine (F) compounds',k:'fluorine',exp:'Fluoride ions from fluorine compounds bond to tooth enamel to strengthen it.'},
    {o:'party balloons',e:'helium (He)',k:'helium',exp:'Helium is a noble gas lighter than air, making balloons float.'},
    {o:'bronze',e:'copper (Cu) and tin (Sn)',k:'copper tin',exp:'Bronze is an alloy of copper and tin, harder than either metal alone.'},
    {o:'coins',e:'copper (Cu) and nickel (Ni)',k:'copper nickel',exp:'Most modern coins are alloys of copper and nickel for durability.'},
    {o:'swimming pool water',e:'chlorine (Cl) compounds',k:'chlorine',exp:'Chlorine compounds kill bacteria in pool water to make it safe.'},
    {o:'computer chips',e:'silicon (Si)',k:'silicon',exp:'Silicon is a semiconductor metalloid used to make microchips.'},
    {o:'titanium implants',e:'titanium (Ti)',k:'titanium',exp:'Titanium is strong, lightweight and biocompatible — the body does not reject it.'},
    {o:'neon signs',e:'neon (Ne)',k:'neon',exp:'Neon produces a red-orange glow when electricity passes through it.'},
    {o:'photography film',e:'silver (Ag)',k:'silver',exp:'Silver compounds react to light and are used in traditional photographic film.'},
    {o:'yellow fireworks',e:'sodium (Na) compounds',k:'sodium',exp:'Sodium compounds burn with a bright yellow-orange flame.'},
    {o:'red fireworks',e:'strontium (Sr) compounds',k:'strontium',exp:'Strontium compounds produce a red flame in fireworks.'},
    {o:'green fireworks',e:'barium (Ba) compounds',k:'barium',exp:'Barium compounds burn with a green flame.'},
    {o:'fertilisers',e:'nitrogen (N) and phosphorus (P)',k:'nitrogen phosphorus',exp:'Plants need nitrogen for growth and phosphorus for roots and flowers.'},
    {o:'galvanised iron',e:'iron (Fe) and zinc (Zn)',k:'iron zinc',exp:'Zinc coating on galvanised iron sacrificially corrodes to protect the iron underneath.'},
    {o:'old thermometers',e:'mercury (Hg)',k:'mercury',exp:'Mercury is a liquid metal that expands evenly with temperature changes.'},
    {o:'diamonds',e:'carbon (C)',k:'carbon',exp:'Diamonds are the hardest natural substance, made entirely of carbon atoms in a rigid lattice.'},
    {o:'stainless steel cutlery',e:'iron (Fe), chromium (Cr) and nickel (Ni)',k:'iron chromium nickel',exp:'Chromium prevents rusting and nickel adds shine to stainless steel.'},
    {o:'matches',e:'phosphorus (P) and sulfur (S)',k:'phosphorus sulfur',exp:'Match heads contain phosphorus or sulfur compounds that ignite from friction.'},
    {o:'seawater',e:'sodium (Na) and chlorine (Cl) as the main dissolved elements',k:'sodium chlorine',exp:'Seawater contains dissolved sodium chloride and other mineral salts.'},
    {o:'bronze statues',e:'copper (Cu) and tin (Sn)',k:'copper tin',exp:'Bronze is used for statues because it is durable and resists outdoor corrosion.'},
    {o:'catalytic converters',e:'platinum (Pt) and palladium (Pd)',k:'platinum palladium',exp:'Platinum and palladium speed up reactions that break down harmful exhaust gases.'},
    {o:'tungsten light bulb filaments',e:'tungsten (W)',k:'tungsten',exp:'Tungsten has the highest melting point of all metals, so it can glow without melting.'},
    {o:'MRI machines',e:'helium (He) for cooling',k:'helium',exp:'Liquid helium keeps the superconducting magnets at very low temperatures.'},
    {o:'rust',e:'iron (Fe) and oxygen (O)',k:'iron oxygen',exp:'Rust is iron oxide, formed when iron reacts with oxygen and water.'},
    {o:'chalk',e:'calcium (Ca), carbon (C) and oxygen (O)',k:'calcium carbon oxygen',exp:'Chalk is calcium carbonate (CaCO₃), a compound of calcium, carbon and oxygen.'},
    {o:'iodised table salt',e:'sodium (Na), chlorine (Cl) and iodine (I)',k:'sodium iodine',exp:'Iodine is added to table salt to prevent iodine deficiency.'},
    {o:'baking soda',e:'sodium (Na), hydrogen (H), carbon (C) and oxygen (O)',k:'sodium carbon',exp:'Baking soda is sodium hydrogen carbonate (NaHCO₃).'},
    {o:'copper plumbing pipes',e:'copper (Cu)',k:'copper',exp:'Copper is used in pipes because it resists corrosion and is easy to bend.'},
    {o:'argon welding gas',e:'argon (Ar)',k:'argon',exp:'Argon is used as a shielding gas in welding because it does not react with hot metal.'},
    {o:'lead-acid car batteries',e:'lead (Pb) and sulfur (S) compounds',k:'lead sulfur',exp:'Lead plates react with sulfuric acid in car batteries to store and release electrical energy.'}
  ];
  o1.forEach(function(d,i){
    bank.push({topic:'Everyday elements',outcomes:['SC4-PRT-01'],type:'mcq',question:'Which elements are found in '+d.o+'?',choices:[d.e,'only gold (Au)','only helium (He) only','only fluorine (F)'],answer:0,explanation:d.exp});
    bank.push({topic:'Everyday elements',outcomes:['SC4-PRT-01'],type:'mcq',question:'A student is testing a sample of '+d.o+'. Which element or elements would they find?',choices:[d.e,'only argon (Ar)','only uranium (U)','only krypton (Kr)'],answer:0,explanation:d.exp});
    if(i%2===0) bank.push({topic:'Everyday elements',outcomes:['SC4-PRT-01'],type:'short',question:'Identify the elements found in '+d.o+' and explain why those elements make it suitable for its purpose. Give 1-2 sentences.',keywords:d.k.split(' ').concat(['element','because','contains']),minMatches:2,explanation:d.exp});
    if(i%4===0) bank.push({topic:'Everyday elements',outcomes:['SC4-PRT-01'],type:'long',question:'Identify the elements in '+d.o+', explain how their properties relate to its use, and give one other example of where a similar element can be found. Write 4-5 sentences.',keywords:d.k.split(' ').concat(['element','property','use','example']),minMatches:3,explanation:d.exp+' The properties of these elements explain why they are present in this substance.'});
  });

  // --- Outcome 2: Physical properties investigation ---
  var o2=[
    {prop:'electrical conductivity',test:'connect the sample in a simple circuit with a battery and bulb — metals light the bulb',metalR:'lights the bulb',nonmetalR:'the bulb stays dark',except:'graphite (a non-metal) also conducts'},
    {prop:'malleability',test:'strike the sample with a hammer — metals flatten, non-metals shatter',metalR:'flattens without cracking',nonmetalR:'shatters or crumbles',except:'some metals such as bismuth are brittle'},
    {prop:'lustre',test:'observe a fresh cut surface under light — metals are shiny, non-metals are dull',metalR:'shiny and reflective',nonmetalR:'dull and non-reflective',except:'iodine crystals appear slightly lustrous'},
    {prop:'ductility',test:'attempt to draw the sample into a wire — metals can be drawn, non-metals cannot',metalR:'can be drawn into thin wire',nonmetalR:'breaks or crumbles when pulled',except:'silicon can be drawn under special conditions'},
    {prop:'thermal conductivity',test:'heat one end and time how long the other end warms — metals conduct heat quickly',metalR:'conducts heat rapidly along its length',nonmetalR:'heat travels slowly or not at all',except:'diamond is an excellent thermal conductor despite being a non-metal'},
    {prop:'hardness',test:'try to scratch the surface with a coin — harder materials are usually metals',metalR:'resists scratching by most common materials',nonmetalR:'often soft and easily scratched',except:'diamond (carbon) is the hardest natural substance'},
    {prop:'melting point',test:'heat the sample carefully and record when it melts — most metals melt at high temperatures',metalR:'requires very high temperature to melt',nonmetalR:'often melts at much lower temperature',except:'mercury melts at −39 °C yet is a metal'},
    {prop:'density',test:'measure mass and volume, calculate density = mass/volume — metals are typically denser',metalR:'high density — feels heavy for its size',nonmetalR:'generally lower density than metals',except:'lithium and sodium are metals with lower density than water'},
    {prop:'reaction with dilute acid',test:'add the sample to dilute hydrochloric acid — reactive metals produce bubbles of hydrogen',metalR:'fizzes and produces hydrogen gas',nonmetalR:'little or no visible reaction',except:'gold and platinum are metals that do not react with dilute acid'},
    {prop:'reaction with water',test:'place a small piece in water — reactive metals react vigorously',metalR:'reacts, sometimes violently, releasing hydrogen',nonmetalR:'usually shows little or no reaction',except:'sodium and potassium react explosively with water'},
    {prop:'magnetism',test:'hold a strong magnet near the sample — iron, nickel and cobalt are attracted',metalR:'iron, nickel and cobalt are attracted to the magnet',nonmetalR:'not attracted to the magnet',except:'most metals including copper and aluminium are not magnetic'},
    {prop:'state at room temperature',test:'observe whether the sample is solid, liquid or gas without heating — most metals are solid',metalR:'solid at room temperature',nonmetalR:'can be solid, liquid or gas at room temperature',except:'mercury is a liquid metal at room temperature'},
    {prop:'sound when struck',test:'tap the sample with a metal rod and listen — metals ring, non-metals thud',metalR:'produces a clear ringing sound',nonmetalR:'produces a dull thud',except:'some alloys produce different sounds depending on composition'},
    {prop:'reaction with oxygen',test:'heat the sample in air and observe — metals form oxides, many burn brightly',metalR:'burns brightly or forms an oxide layer',nonmetalR:'some burn with coloured flames, others do not react',except:'noble gas elements do not react with oxygen at all'},
    {prop:'semiconductor behaviour',test:'test conductivity at different temperatures or light levels — metalloids change behaviour',metalR:'always conducts at room temperature',nonmetalR:'does not conduct at room temperature',except:'silicon and germanium conduct better as temperature rises'},
    {prop:'solubility in water',test:'stir the sample in water and observe — most metals do not dissolve',metalR:'does not dissolve unless it reacts chemically',nonmetalR:'some non-metal compounds dissolve readily',except:'sodium metal reacts with and appears to dissolve in water'},
    {prop:'appearance under a microscope',test:'examine a polished surface — metals show a crystalline grain structure',metalR:'shows ordered grain or crystal structure',nonmetalR:'often amorphous or shows different structure',except:'graphite shows a layered plate structure under a microscope'},
    {prop:'brittleness',test:'apply increasing force and observe whether the material bends or snaps suddenly',metalR:'bends before breaking under force (ductile)',nonmetalR:'snaps suddenly without bending first (brittle)',except:'cast iron is a metal that is brittle compared with most metals'},
    {prop:'boiling point',test:'heat carefully and record when the sample changes from liquid to gas',metalR:'very high boiling point',nonmetalR:'often boils at a much lower temperature',except:'bromine is a non-metal that boils at only 59 °C'},
    {prop:'mixed properties (metalloid)',test:'test conductivity, malleability and lustre — metalloids show some properties of both metals and non-metals',metalR:'has both metallic and non-metallic properties',nonmetalR:'shows more non-metallic than metallic properties',except:'silicon conducts electricity only under certain conditions'}
  ];
  o2.forEach(function(d,i){
    bank.push({topic:'Physical properties',outcomes:['SC4-PRT-01','SC5-WS-01'],type:'mcq',question:'A student tests a sample for '+d.prop+'. Which result would show it is most likely a metal?',choices:[d.metalR,d.nonmetalR,'changes colour only','dissolves completely in acid'],answer:0,explanation:'When testing for '+d.prop+', metals typically show: '+d.metalR+'. Note: '+d.except+'.'});
    bank.push({topic:'Physical properties',outcomes:['SC4-PRT-01','SC5-WS-01'],type:'mcq',question:'How would a student test a sample for '+d.prop+'?',choices:[d.test,'measure its atomic number','use a mass spectrometer','add universal indicator'],answer:0,explanation:'To test for '+d.prop+': '+d.test+'.'});
    bank.push({topic:'Physical properties',outcomes:['SC4-PRT-01','SC5-WS-01'],type:'mcq',question:'When testing for '+d.prop+', a sample gives the result: '+d.nonmetalR+'. What does this suggest?',choices:['The sample is likely a non-metal or metalloid','The sample is definitely a transition metal','The sample has no protons','The result is always caused by high density'],answer:0,explanation:'A result of '+d.nonmetalR+' for '+d.prop+' suggests the sample is a non-metal or metalloid. '+d.except+'.'});
    if(i%2===0) bank.push({topic:'Physical properties',outcomes:['SC4-PRT-01','SC5-WS-01'],type:'short',question:'Describe how a student could test an unknown sample for '+d.prop+' and explain what a metal result would look like. Give 1-2 sentences.',keywords:['test',d.prop.split(' ')[0],'metal','result','observe'],minMatches:2,explanation:'To test for '+d.prop+': '+d.test+'. A metal gives the result: '+d.metalR+'.'});
    if(i%4===0) bank.push({topic:'Physical properties',outcomes:['SC4-PRT-01','SC5-WS-01'],type:'long',question:'A student is given an unknown solid and asked to determine whether it is a metal, non-metal or metalloid using a test for '+d.prop+'. Write 4-5 sentences explaining the test method, the expected result for each type, and what exception the student should keep in mind.',keywords:['test',d.prop.split(' ')[0],'metal','non-metal','metalloid','result','exception'],minMatches:3,explanation:'Testing for '+d.prop+': '+d.test+'. A metal gives: '+d.metalR+'. A non-metal gives: '+d.nonmetalR+'. Exception: '+d.except+'.'});
  });

  // --- Outcome 3: Properties relate to uses ---
  var o3=[
    {mat:'copper',prop:'excellent electrical conductivity',use:'electrical wiring',why:'electricity flows through copper with very little resistance'},
    {mat:'aluminium',prop:'low density and corrosion resistance',use:'aircraft and drink cans',why:'its low mass reduces fuel costs and it does not corrode easily'},
    {mat:'gold',prop:'unreactive and conducts electricity',use:'jewellery and electronic connectors',why:'it stays shiny and reliable over long periods without corroding'},
    {mat:'iron',prop:'strength and hardness when made into steel',use:'structural beams and bridges',why:'steel made from iron and carbon can bear enormous loads'},
    {mat:'silicon',prop:'semiconductor — conductivity can be switched on and off',use:'computer chips and solar cells',why:'controllable conductivity lets it switch electrical signals in circuits'},
    {mat:'titanium',prop:'high strength-to-mass ratio and biocompatible',use:'aircraft parts and medical implants',why:'it is strong and light, and the body does not reject it'},
    {mat:'tungsten',prop:'very high melting point (3422 °C)',use:'light bulb filaments and cutting tools',why:'it can glow at very high temperatures without melting'},
    {mat:'mercury',prop:'liquid at room temperature and expands uniformly',use:'thermometers (historical) and switches',why:'it flows easily in tubes and expands evenly with temperature'},
    {mat:'diamond (carbon)',prop:'hardness — the hardest natural substance',use:'drill tips and cutting tools',why:'nothing naturally harder can scratch it, so it cuts any other material'},
    {mat:'graphite (carbon)',prop:'soft layered structure — layers slide easily',use:'pencil leads and lubricants',why:'carbon layers slide over each other, depositing marks and reducing friction'},
    {mat:'helium',prop:'very low density and non-flammable',use:'weather balloons and MRI cooling',why:'it is the second lightest element and does not catch fire'},
    {mat:'neon',prop:'produces red-orange glow in electrical discharge',use:'neon signs and gas lasers',why:'electrons returning to lower energy levels release visible red-orange light'},
    {mat:'steel',prop:'greater strength and hardness than pure iron',use:'buildings, bridges and vehicles',why:'the carbon in steel makes it much stronger than pure iron'},
    {mat:'stainless steel',prop:'corrosion resistance from chromium',use:'cutlery and surgical instruments',why:'chromium forms a protective oxide layer that stops the steel from rusting'},
    {mat:'brass',prop:'corrosion resistance and acoustic properties',use:'musical instruments and plumbing fittings',why:'brass does not corrode easily and vibrates to produce good sound'},
    {mat:'bronze',prop:'harder than copper and resistant to corrosion',use:'statues, medals and boat fittings',why:'bronze is durable outdoors and was one of the first alloys used by humans'},
    {mat:'platinum',prop:'unreactive and catalytically active',use:'catalytic converters and laboratory crucibles',why:'it does not react with most substances and speeds up important reactions'},
    {mat:'silver',prop:'the best electrical conductor of all metals',use:'specialist electronics and solar panels',why:'silver conducts electricity better than copper but is expensive'},
    {mat:'argon',prop:'completely unreactive noble gas',use:'welding shield gas and incandescent light bulbs',why:'it prevents the hot metal from reacting with oxygen during welding'},
    {mat:'zinc',prop:'sacrificial corrosion — corrodes before iron',use:'galvanising iron to prevent rust',why:'zinc corrodes before the iron does, protecting the iron underneath'},
    {mat:'calcium',prop:'forms strong hard compounds with other elements',use:'cement, plaster and bone supplements',why:'calcium carbonate and calcium phosphate are hard structural materials'},
    {mat:'phosphorus',prop:'reacts to release light and heat, essential for plants',use:'matches and fertilisers',why:'white phosphorus ignites easily; phosphorus compounds promote plant root growth'},
    {mat:'chlorine',prop:'kills bacteria and acts as a bleaching agent',use:'water purification and disinfectants',why:'chlorine reacts with and destroys microorganisms in water'},
    {mat:'sulfur',prop:'used in vulcanisation and acid manufacture',use:'rubber tyres and industrial chemicals',why:'sulfur cross-links rubber chains, making the rubber harder and more durable'},
    {mat:'carbon fibre',prop:'extremely high strength-to-mass ratio',use:'racing cars, aircraft and sports equipment',why:'carbon fibre composites are lighter than steel but stronger for their weight'}
  ];
  o3.forEach(function(d,i){
    bank.push({topic:'Properties and uses',outcomes:['SC4-PRT-01'],type:'mcq',question:'Why is '+d.mat+' particularly useful for '+d.use+'?',choices:['Because it has '+d.prop,'Because it is the most abundant element','Because it is always a liquid at room temperature','Because it has no electrons'],answer:0,explanation:d.mat[0].toUpperCase()+d.mat.slice(1)+' is used for '+d.use+' because '+d.why+'.'});
    bank.push({topic:'Properties and uses',outcomes:['SC4-PRT-01'],type:'mcq',question:'Which property of '+d.mat+' makes it most suitable for '+d.use+'?',choices:[d.prop,'high radioactivity','ability to become a gas','high solubility in water'],answer:0,explanation:'The key property of '+d.mat+' for '+d.use+' is: '+d.prop+'. '+d.mat[0].toUpperCase()+d.mat.slice(1)+' '+d.why+'.'});
    bank.push({topic:'Properties and uses',outcomes:['SC4-PRT-01'],type:'mcq',question:'A student wonders why '+d.mat+' is used for '+d.use+' and not a different material. Which answer best explains this?',choices:[d.mat[0].toUpperCase()+d.mat.slice(1)+' has '+d.prop,'All materials are equally suitable for '+d.use,'The atomic number of '+d.mat+' is always zero','The density of '+d.mat+' is always the same as water'],answer:0,explanation:d.mat[0].toUpperCase()+d.mat.slice(1)+' is chosen because '+d.why+'.'});
    if(i%2===0) bank.push({topic:'Properties and uses',outcomes:['SC4-PRT-01'],type:'short',question:'Explain why '+d.mat+' is well-suited for '+d.use+'. Give 1-2 sentences using a specific property.',keywords:[d.mat.split(' ')[0].toLowerCase(),d.prop.split(' ')[0].toLowerCase(),'property','use','because','suitable'],minMatches:2,explanation:d.mat[0].toUpperCase()+d.mat.slice(1)+' is used for '+d.use+' because it has '+d.prop+'. '+d.mat[0].toUpperCase()+d.mat.slice(1)+' '+d.why+'.'});
    if(i%3===0) bank.push({topic:'Properties and uses',outcomes:['SC4-PRT-01'],type:'long',question:'Explain how the properties of '+d.mat+' make it suitable for '+d.use+'. Write 4-5 sentences identifying the key property, explaining why that property matters for this use, and suggesting one reason why a cheaper or different material is not used instead.',keywords:[d.mat.split(' ')[0].toLowerCase(),d.prop.split(' ')[0].toLowerCase(),'property','use','because','suitable','alternative'],minMatches:3,explanation:d.mat[0].toUpperCase()+d.mat.slice(1)+' is used for '+d.use+' because it has '+d.prop+'. '+d.mat[0].toUpperCase()+d.mat.slice(1)+' '+d.why+'. Alternative materials lack this specific property combination.'});
  });

  // --- Outcome 4: Atom as smallest unit ---
  var o4=[
    {scenario:'cutting gold in half repeatedly',q:'If you kept cutting gold in half, what is the smallest piece that would still have the properties of gold?',a:'a single gold atom',e:'The atom is the smallest unit of an element that retains its properties. Smaller particles (protons, electrons) are not gold.'},
    {scenario:'splitting a water molecule',q:'If a water molecule (H₂O) is split into individual atoms, what remains?',a:'hydrogen and oxygen atoms — no longer water',e:'Splitting water gives separate hydrogen and oxygen atoms, which have completely different properties from water.'},
    {scenario:'is there anything smaller than an atom of an element',q:'Can you divide a copper atom and still have copper?',a:'No — dividing the atom gives subatomic particles, which are not copper',e:'Subatomic particles do not carry the identity or properties of copper. Only the whole atom does.'},
    {scenario:'why atoms of different elements are different',q:'An iron atom and a sulfur atom are both atoms. What makes them different elements?',a:'they have different numbers of protons in the nucleus',e:'The number of protons (atomic number) uniquely identifies each element.'},
    {scenario:'molecule vs atom',q:'What is the difference between an atom and a molecule?',a:'a molecule contains two or more atoms bonded together; an atom is a single particle',e:'An atom is the smallest unit of an element. A molecule forms when atoms bond together, possibly forming a compound.'},
    {scenario:'diamond vs graphite',q:'Diamond and graphite are both made entirely of carbon atoms. How can they have such different properties?',a:'the carbon atoms are arranged differently, giving different structures and properties',e:'Atomic arrangement determines bulk properties. Diamond has a rigid 3D lattice; graphite has sliding layers.'},
    {scenario:'element definition',q:'A substance is made of only one type of atom. What is the correct classification?',a:'it is an element',e:'An element is a pure substance containing only one type of atom.'},
    {scenario:'compound definition',q:'A substance is made of hydrogen and oxygen atoms chemically bonded together. What is it?',a:'a compound (specifically water, H₂O)',e:'A compound is a pure substance containing two or more types of atoms bonded together in fixed ratios.'},
    {scenario:'why atoms exist',q:'Why is the atom described as the "building block" of matter?',a:'all matter is made of atoms that combine in different ways to form all substances',e:'Atoms combine in different arrangements to form every substance around us.'},
    {scenario:'atoms and mixtures',q:'Salt dissolved in water contains both sodium, chlorine and water molecules. Is this a mixture, element or compound?',a:'a mixture — the salt and water are not chemically bonded to each other',e:'A mixture contains substances that are not chemically bonded. Here, salt molecules are just dispersed in water molecules.'},
    {scenario:'proton defines element',q:'An atom has 6 protons. What element is it, regardless of how many neutrons it has?',a:'carbon — the number of protons alone defines the element',e:'Every carbon atom has exactly 6 protons. Changing neutrons creates isotopes but does not change the element.'},
    {scenario:'atoms cannot be seen',q:'Why could scientists not directly see atoms for most of history?',a:'atoms are far too small for ordinary light or simple instruments to detect',e:'Atoms are about 0.1 nanometres wide. Electron microscopes, developed in the 20th century, can now image them indirectly.'},
    {scenario:'Dalton solid sphere',q:'Dalton described atoms as solid spheres. What was later found to be inside the atom?',a:'a nucleus containing protons and neutrons, with electrons in shells around it',e:'Later experiments showed atoms are mostly empty space with a small dense nucleus and electrons in shells.'},
    {scenario:'alloy not a compound',q:'Steel is made of iron and carbon, but the atoms are not chemically bonded in fixed ratios. Is steel a compound or mixture?',a:'a mixture (an alloy) — the proportions can vary and atoms are not in fixed ratios',e:'An alloy is a mixture of metals. The components are not chemically bonded in fixed ratios.'},
    {scenario:'smallest particle keeping element identity',q:'Which particle is the smallest unit of an element that retains the properties of that element?',a:'an atom',e:'The atom is defined as the smallest unit of an element that retains its chemical properties.'}
  ];
  o4.forEach(function(d,i){
    bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'mcq',question:d.q,choices:[d.a,'a proton alone','an electron alone','a neutron alone'],answer:0,explanation:d.e});
    if(i%2===0) bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'short',question:'Explain the following idea in your own words: '+d.scenario+'. Give 1-2 sentences.',keywords:['atom','element','properties','smallest','particle'],minMatches:2,explanation:d.e});
    if(i%5===0) bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'long',question:'A student asks: "'+d.q+'" Write 4-5 sentences explaining the answer, what would happen at the atomic level, and how this relates to the definition of an element.',keywords:['atom','element','properties','smallest','particle','nucleus','proton'],minMatches:3,explanation:d.e});
  });

  // --- Outcome 5: Subatomic particles ---
  var o5q=[
    {q:'Which subatomic particle has a positive charge?',a:'proton',w:['electron','neutron','photon'],e:'Protons are positively charged particles found in the nucleus.'},
    {q:'Which subatomic particle has a negative charge?',a:'electron',w:['proton','neutron','nucleus'],e:'Electrons are negatively charged and found in shells around the nucleus.'},
    {q:'Which subatomic particle has no charge (is neutral)?',a:'neutron',w:['proton','electron','ion'],e:'Neutrons are electrically neutral and found in the nucleus.'},
    {q:'Where are protons and neutrons found in the atom?',a:'in the nucleus at the centre of the atom',w:['in the outer shells','equally throughout the atom','only in the electron cloud'],e:'Protons and neutrons are both in the nucleus.'},
    {q:'Where are electrons found in the atom?',a:'in shells (energy levels) around the nucleus',w:['inside the nucleus','randomly scattered','only on the outer edge of the atom'],e:'Electrons occupy shells around the nucleus.'},
    {q:'Which two particles have approximately equal mass?',a:'protons and neutrons — each about 1 atomic mass unit',w:['protons and electrons','electrons and neutrons','neutrons and photons'],e:'Protons and neutrons have similar mass (~1 amu). Electrons are about 1/1836 the mass of a proton.'},
    {q:'How does the mass of an electron compare to a proton?',a:'an electron is much lighter — about 1/1836 the mass of a proton',w:['they have exactly equal mass','an electron is heavier','an electron has twice the mass'],e:'Electrons have negligible mass compared to protons and neutrons.'},
    {q:'A neutral atom has 8 protons. How many electrons does it have?',a:'8 electrons — equal to the number of protons in a neutral atom',w:['4 electrons','16 electrons','0 electrons'],e:'In a neutral atom, the number of electrons equals the number of protons.'},
    {q:'If a proton has charge +1 and an electron has charge −1, what is the overall charge of a neutral atom?',a:'zero — positive and negative charges cancel exactly',w:['positive +1','negative −1','it depends on the neutrons'],e:'In a neutral atom, equal numbers of protons and electrons make the overall charge zero.'},
    {q:'What happens to the charge of an atom if it loses one electron?',a:'it becomes positively charged (+1 ion)',w:['it becomes negatively charged','it loses a proton too','it becomes neutral again'],e:'Removing an electron leaves more protons than electrons, giving a net positive charge.'},
    {q:'What happens to the charge of an atom if it gains one electron?',a:'it becomes negatively charged (−1 ion)',w:['it becomes positively charged','it gains a proton','it splits into two atoms'],e:'Gaining an electron gives more electrons than protons, resulting in a net negative charge.'},
    {q:'Which particle determines the atomic number of an element?',a:'the number of protons',w:['the number of neutrons','the number of electrons','the number of shells'],e:'Atomic number equals the number of protons. This uniquely identifies the element.'},
    {q:'Which particles contribute to the mass number of an atom?',a:'protons and neutrons (both found in the nucleus)',w:['only protons','only neutrons','electrons and protons'],e:'Mass number = number of protons + number of neutrons. Electrons have negligible mass.'},
    {q:'An atom of sodium has 11 protons and 12 neutrons. What is its mass number?',a:'23 (protons + neutrons = 11 + 12)',w:['11','12','1'],e:'Mass number = protons + neutrons = 11 + 12 = 23.'},
    {q:'How many protons does helium have?',a:'2 protons (atomic number 2)',w:['1','4','8'],e:'Helium has atomic number 2, so it has 2 protons.'},
    {q:'An atom has 17 protons and 17 electrons. What element is it?',a:'chlorine (atomic number 17)',w:['fluorine','bromine','argon'],e:'Atomic number 17 is chlorine. With equal protons and electrons, it is neutral.'},
    {q:'Which particle is exchanged or transferred during ionic bonding?',a:'electron',w:['proton','neutron','nucleus'],e:'Ionic bonds form when electrons are transferred from one atom to another.'},
    {q:'A scientist says "the nucleus is positive." Why?',a:'because it contains protons, which are positively charged, and neutrons, which have no charge',w:['because electrons are inside the nucleus','because the nucleus has negative neutrons','because atoms always have positive nuclei'],e:'The nucleus contains protons (+1 each) and neutrons (0). The overall nuclear charge is positive.'},
    {q:'Which subatomic particle is found outside the nucleus?',a:'electron',w:['proton','neutron','quark'],e:'Electrons are found in shells or energy levels surrounding the nucleus.'},
    {q:'What is the relative charge of a neutron compared to a proton?',a:'the neutron has no charge (0), the proton has charge +1',w:['they have the same charge','neutron is −1 and proton is +1','neutron is +1 and proton is −1'],e:'Neutrons are neutral (charge = 0). Protons carry a +1 charge.'}
  ];
  o5q.forEach(function(d){
    bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'mcq',question:d.q,choices:[d.a].concat(d.w),answer:0,explanation:d.e});
  });
  bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'short',question:'Compare the three subatomic particles in terms of charge, mass and location in the atom. Give 2-3 sentences.',keywords:['proton','neutron','electron','charge','nucleus','shell','mass'],minMatches:4,explanation:'Protons (+1 charge, ~1 amu, in nucleus), neutrons (0 charge, ~1 amu, in nucleus), electrons (−1 charge, negligible mass, in shells around nucleus).'});
  bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'short',question:'Explain why a neutral atom has no overall charge despite containing charged particles.',keywords:['proton','electron','positive','negative','equal','cancel','neutral'],minMatches:3,explanation:'In a neutral atom, the number of protons (positive) equals the number of electrons (negative). The charges cancel and the overall charge is zero.'});
  bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'long',question:'Describe the three subatomic particles, including their charge, relative mass and location in the atom. Write 4-5 sentences and explain what would happen to the charge of the atom if it lost or gained an electron.',keywords:['proton','neutron','electron','nucleus','shell','charge','mass','ion','positive','negative'],minMatches:5,explanation:'Protons (+1, ~1 amu) and neutrons (0, ~1 amu) are in the nucleus. Electrons (−1, negligible mass) are in shells. In a neutral atom protons = electrons. Losing an electron gives a positive ion; gaining one gives a negative ion.'});
  bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'long',question:'A student says all three subatomic particles have the same mass. Correct this misconception and explain the relative masses and locations of each particle. Write 4-5 sentences.',keywords:['proton','neutron','electron','mass','nucleus','shell','amu','lighter'],minMatches:4,explanation:'Protons and neutrons each have a mass of approximately 1 amu and are found in the nucleus. Electrons have negligible mass (about 1/1836 of a proton) and are found in shells. Most of the atom\'s mass is in the nucleus.'});

  // --- Outcome 6: Planetary (Bohr) model – location, charge, mass ---
  var o6elem=[
    {n:1,name:'hydrogen',config:'1',shells:1,outerE:1,period:1,neutrons:0},
    {n:2,name:'helium',config:'2',shells:1,outerE:2,period:1,neutrons:2},
    {n:3,name:'lithium',config:'2,1',shells:2,outerE:1,period:2,neutrons:4},
    {n:4,name:'beryllium',config:'2,2',shells:2,outerE:2,period:2,neutrons:5},
    {n:5,name:'boron',config:'2,3',shells:2,outerE:3,period:2,neutrons:6},
    {n:6,name:'carbon',config:'2,4',shells:2,outerE:4,period:2,neutrons:6},
    {n:7,name:'nitrogen',config:'2,5',shells:2,outerE:5,period:2,neutrons:7},
    {n:8,name:'oxygen',config:'2,6',shells:2,outerE:6,period:2,neutrons:8},
    {n:9,name:'fluorine',config:'2,7',shells:2,outerE:7,period:2,neutrons:10},
    {n:10,name:'neon',config:'2,8',shells:2,outerE:8,period:2,neutrons:10},
    {n:11,name:'sodium',config:'2,8,1',shells:3,outerE:1,period:3,neutrons:12},
    {n:12,name:'magnesium',config:'2,8,2',shells:3,outerE:2,period:3,neutrons:12},
    {n:13,name:'aluminium',config:'2,8,3',shells:3,outerE:3,period:3,neutrons:14},
    {n:14,name:'silicon',config:'2,8,4',shells:3,outerE:4,period:3,neutrons:14},
    {n:15,name:'phosphorus',config:'2,8,5',shells:3,outerE:5,period:3,neutrons:16},
    {n:16,name:'sulfur',config:'2,8,6',shells:3,outerE:6,period:3,neutrons:16},
    {n:17,name:'chlorine',config:'2,8,7',shells:3,outerE:7,period:3,neutrons:18},
    {n:18,name:'argon',config:'2,8,8',shells:3,outerE:8,period:3,neutrons:22}
  ];
  o6elem.forEach(function(el){
    bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'mcq',question:'In the planetary model, how many electrons does a neutral '+el.name+' atom have, and how are they arranged in shells?',choices:[el.n+' electrons arranged '+el.config,(el.n+2)+' electrons in one shell',el.n+' electrons all in the outer shell only',el.n+' protons and 0 electrons'],answer:0,explanation:el.name[0].toUpperCase()+el.name.slice(1)+' (atomic number '+el.n+') has '+el.n+' electrons arranged '+el.config+' in shells.'});
    bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'mcq',question:'How many electron shells does a '+el.name+' atom have in the planetary model?',choices:[String(el.shells),String(el.shells+1),String(el.n),'1 only'],answer:0,explanation:el.name[0].toUpperCase()+el.name.slice(1)+' is in period '+el.period+', so it has '+el.shells+' electron shell'+(el.shells>1?'s':'')+'. Electron arrangement: '+el.config+'.'});
    bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'mcq',question:'How many electrons are in the outer shell of a '+el.name+' atom?',choices:[String(el.outerE),String(el.n),'8 always','2 always'],answer:0,explanation:el.name[0].toUpperCase()+el.name.slice(1)+' has electron arrangement '+el.config+', so its outer shell contains '+el.outerE+' electron'+(el.outerE>1?'s':'')+'.'});
    if(el.n%3===0) bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'short',question:'Describe the structure of a neutral '+el.name+' atom using the planetary model, including the number of protons, neutrons, electrons and how the electrons are arranged. Give 2-3 sentences.',keywords:['proton','neutron','electron','shell','nucleus',el.name],minMatches:3,explanation:el.name[0].toUpperCase()+el.name.slice(1)+' has '+el.n+' protons and approximately '+el.neutrons+' neutrons in the nucleus. A neutral atom has '+el.n+' electrons arranged '+el.config+' in '+el.shells+' shell'+(el.shells>1?'s':'')+'.'});
    if(el.n%6===0) bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'long',question:'Draw and describe a planetary model of a '+el.name+' atom. Write 4-5 sentences explaining the location and number of protons, neutrons and electrons, the shell arrangement, and what this tells you about its period and group.',keywords:['proton','neutron','electron','shell','nucleus','period','group',el.name],minMatches:4,explanation:el.name[0].toUpperCase()+el.name.slice(1)+' (atomic number '+el.n+') has '+el.n+' protons and '+el.neutrons+' neutrons in the nucleus with '+el.n+' electrons in shells '+el.config+'. It is in period '+el.period+'.'});
  });

  // --- Outcome 7: First 18 elements – atomic structure changes with atomic number ---
  o6elem.forEach(function(el,i){
    bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'mcq',question:'Which element has atomic number '+el.n+'?',choices:[el.name,o6elem[(i+1)%18].name,o6elem[(i+2)%18].name,o6elem[(i+3)%18].name],answer:0,explanation:'Atomic number '+el.n+' is '+el.name+'. Atomic number equals the number of protons.'});
    bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'mcq',question:'As you move from '+o6elem[i].name+' (atomic number '+o6elem[i].n+') to '+(i+1<18?o6elem[i+1].name:'argon')+' (atomic number '+(i+1<18?o6elem[i+1].n:18)+'), what changes in the atomic structure?',choices:['one more proton and one more electron are added','the number of neutrons only increases','the number of shells doubles','the atomic structure stays the same'],answer:0,explanation:'Moving from one element to the next increases atomic number by 1, adding one proton and one electron.'});
    bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'mcq',question:'An element has electron arrangement '+el.config+'. Which element is it?',choices:[el.name,o6elem[(i+5)%18].name,o6elem[(i+8)%18].name,o6elem[(i+11)%18].name],answer:0,explanation:'Electron arrangement '+el.config+' means '+el.n+' electrons in '+el.shells+' shell'+(el.shells>1?'s':'')+', which is '+el.name+' (atomic number '+el.n+').'});
    if(i%3===0) bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'short',question:'Explain how the atomic structure of '+el.name+' differs from '+(i>0?o6elem[i-1].name:'the previous element')+' because of its higher atomic number. Give 1-2 sentences.',keywords:['atomic number','proton','electron','shell','increases'],minMatches:2,explanation:el.name[0].toUpperCase()+el.name.slice(1)+' has one more proton and one more electron than the previous element. Its electron arrangement is '+el.config+'.'});
    if(i%6===0) bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'long',question:'Explain how the atomic structure changes as atomic number increases from '+el.name+' through the next four elements. Write 4-5 sentences including changes in protons, electrons, shell filling and when a new period starts.',keywords:['atomic number','proton','electron','shell','period','increases','arrangement'],minMatches:4,explanation:'Each increase in atomic number adds one proton and one electron. Shells fill in order (maximum 2 in shell 1, 8 in shell 2, 8 in shell 3). A new period begins when a new shell is started.'});
  });

  // --- Outcome 8: Models of atomic structure over time ---
  var o8=[
    {sci:'Democritus',era:'ancient Greece (~400 BC)',contrib:'proposed matter is made of tiny indivisible particles called atomos',evidence:'philosophical reasoning — no experimental evidence',limit:'had no experimental proof; the idea was rejected for centuries',model:'philosophical atomism'},
    {sci:'Dalton',era:'early 1800s',contrib:'described atoms as solid indivisible spheres that combine in fixed ratios',evidence:'law of conservation of mass and law of multiple proportions from gas experiments',limit:'could not explain why elements behave differently or where charge comes from',model:'solid sphere model'},
    {sci:'Thomson',era:'1897',contrib:'discovered the electron and proposed the plum pudding model — electrons embedded in positive cloud',evidence:'cathode ray tube experiments showed negatively charged particles exist in atoms',limit:'assumed positive charge was spread out; did not predict a concentrated nucleus',model:'plum pudding model'},
    {sci:'Rutherford',era:'1909-1911',contrib:'discovered the nucleus — a small, dense, positive centre to the atom',evidence:'gold foil experiment — most alpha particles passed through but some bounced back sharply',limit:'could not explain why electrons do not spiral into the positive nucleus',model:'nuclear model'},
    {sci:'Bohr',era:'1913',contrib:'proposed electrons orbit the nucleus in fixed energy levels (shells)',evidence:'hydrogen emission spectrum showed only specific colours, meaning electrons have fixed energies',limit:'worked well only for hydrogen atoms; could not explain larger atoms accurately',model:'Bohr shell model'},
    {sci:'Chadwick',era:'1932',contrib:'discovered the neutron — a neutral particle in the nucleus',evidence:'bombarding beryllium with alpha particles produced neutral radiation that knocked protons from wax',limit:'the internal structure of the nucleus itself was still not fully explained',model:'neutron discovery'}
  ];
  o8.forEach(function(d,i){
    bank.push({topic:'History of atom',outcomes:['SC4-PRT-01'],type:'mcq',question:'Which scientist proposed the '+d.model+'?',choices:[d.sci,o8[(i+1)%6].sci,o8[(i+2)%6].sci,o8[(i+3)%6].sci],answer:0,explanation:d.sci+' proposed the '+d.model+' in the '+d.era+'. '+d.sci+' '+d.contrib+'.'});
    bank.push({topic:'History of atom',outcomes:['SC4-PRT-01'],type:'mcq',question:'What evidence did '+d.sci+' use to support changes to the atomic model?',choices:[d.evidence,'the periodic table only','intuition and guessing','measuring atomic mass with a balance'],answer:0,explanation:d.sci+' used '+d.evidence+'.'});
    bank.push({topic:'History of atom',outcomes:['SC4-PRT-01'],type:'mcq',question:'What was the main limitation of '+d.sci+'\'s '+d.model+'?',choices:[d.limit,'it was too complicated','it had too many particles','it correctly explained everything'],answer:0,explanation:'The main limitation of '+d.sci+'\'s model was: '+d.limit+'.'});
    bank.push({topic:'History of atom',outcomes:['SC4-PRT-01'],type:'short',question:'Describe '+d.sci+'\'s contribution to the atomic model and the evidence that supported it. Give 1-2 sentences.',keywords:[d.sci.toLowerCase(),d.model.split(' ')[0].toLowerCase(),'evidence','model','proposed'],minMatches:2,explanation:d.sci+' '+d.contrib+'. Evidence: '+d.evidence+'.'});
    if(i%2===0) bank.push({topic:'History of atom',outcomes:['SC4-PRT-01'],type:'long',question:'Explain how '+d.sci+'\'s discovery changed the atomic model and why the previous model was no longer adequate. Write 4-5 sentences including the evidence used and the limitation this discovery addressed.',keywords:[d.sci.toLowerCase(),'model','evidence','changed','limitation','atomic'],minMatches:4,explanation:d.sci+' '+d.contrib+'. Evidence: '+d.evidence+'. Previous limitation: o8[(i-1+6)%6].limit.'});
  });
  bank.push({topic:'History of atom',outcomes:['SC4-PRT-01'],type:'long',question:'Describe how the atomic model changed from Dalton to Thomson to Rutherford to Bohr. Write 4-5 sentences explaining what evidence caused each major change.',keywords:['Dalton','Thomson','Rutherford','Bohr','model','evidence','changed','electron','nucleus','shell'],minMatches:5,explanation:'Dalton described atoms as solid spheres. Thomson discovered electrons (cathode rays) and proposed the plum pudding model. Rutherford\'s gold foil experiment revealed the nucleus. Bohr used hydrogen spectra evidence to add electron shells.'});
  bank.push({topic:'History of atom',outcomes:['SC4-PRT-01'],type:'short',question:'Why do scientific models of the atom change over time? Give 1-2 sentences.',keywords:['evidence','model','change','observation','technology','improve'],minMatches:2,explanation:'Scientific models change when new evidence or observations cannot be explained by the existing model. Better technology allows scientists to gather more detailed evidence.'});

  // --- Outcome 9: Technology and atomic understanding ---
  var o9=[
    {tech:'cathode ray tube',sci:'Thomson',disc:'electron',how:'Electric and magnetic fields deflected cathode rays, showing they were negatively charged particles inside atoms.',impact:'This disproved Dalton\'s indivisible solid sphere model and led to the plum pudding model.'},
    {tech:'gold foil experiment',sci:'Rutherford',disc:'atomic nucleus',how:'Alpha particles were fired at thin gold foil. Most passed through but some bounced back sharply, revealing a small dense positive nucleus.',impact:'This replaced the plum pudding model with the nuclear model of the atom.'},
    {tech:'hydrogen emission spectroscopy',sci:'Bohr',disc:'electron energy levels (shells)',how:'Hydrogen gas excited by electricity produces only specific colours of light, showing electrons can only have certain fixed energies.',impact:'This led to the Bohr model of electrons in fixed shells around the nucleus.'},
    {tech:'neutron bombardment of beryllium',sci:'Chadwick',disc:'neutron',how:'Alpha particles hitting beryllium produced neutral radiation that could knock protons from wax, revealing an uncharged nuclear particle.',impact:'This completed the basic model of the nucleus with protons and neutrons.'},
    {tech:'electron microscope',sci:'various researchers',disc:'direct visualisation of atomic-scale structures',how:'Electrons have a much shorter wavelength than light, allowing structures too small for light microscopes to be imaged.',impact:'Scientists can now image individual atoms and molecules, confirming theoretical models.'},
    {tech:'X-ray crystallography',sci:'Bragg',disc:'arrangement of atoms in crystals',how:'X-rays diffract off atomic planes in crystals; the resulting pattern reveals the spacing and arrangement of atoms.',impact:'This revealed the 3D structure of many important materials and molecules, including DNA.'},
    {tech:'mass spectrometer',sci:'Aston',disc:'isotopes — atoms of the same element with different masses',how:'Atoms are ionised and deflected by magnetic fields; different masses follow different paths, revealing multiple mass values for the same element.',impact:'This showed that atoms of the same element can differ in mass due to different numbers of neutrons.'},
    {tech:'particle accelerator',sci:'various researchers',disc:'sub-nuclear particles (quarks etc.)',how:'Protons and other particles are accelerated to near light speed and collided, and the fragments reveal smaller particles inside.',impact:'This showed that protons and neutrons are themselves made of smaller particles called quarks.'}
  ];
  o9.forEach(function(d,i){
    bank.push({topic:'History of atom',outcomes:['SC4-PRT-01'],type:'mcq',question:'Which technology enabled '+d.sci+' to discover the '+d.disc+'?',choices:[d.tech,o9[(i+1)%8].tech,o9[(i+2)%8].tech,o9[(i+3)%8].tech],answer:0,explanation:d.sci+' used the '+d.tech+'. '+d.how});
    bank.push({topic:'History of atom',outcomes:['SC4-PRT-01'],type:'mcq',question:'How did the '+d.tech+' help scientists understand atomic structure?',choices:[d.how,'it directly showed atoms using visible light','it weighed individual electrons','it had no impact on atomic theory'],answer:0,explanation:'The '+d.tech+' contributed by: '+d.how+' Impact: '+d.impact});
    bank.push({topic:'History of atom',outcomes:['SC4-PRT-01'],type:'short',question:'Explain how the '+d.tech+' led to a new discovery about atomic structure. Give 1-2 sentences.',keywords:[d.tech.split(' ')[0].toLowerCase(),d.disc.split(' ')[0].toLowerCase(),'discovery','evidence','technology','model'],minMatches:2,explanation:'The '+d.tech+' was used by '+d.sci+' to discover the '+d.disc+'. '+d.how});
    if(i%3===0) bank.push({topic:'History of atom',outcomes:['SC4-PRT-01'],type:'long',question:'Explain how new technology (specifically the '+d.tech+') allowed scientists to improve their understanding of atomic structure. Write 4-5 sentences describing what the technology does, what was discovered, and how this changed the atomic model.',keywords:[d.tech.split(' ')[0].toLowerCase(),'technology','discovery','evidence','model','atomic structure'],minMatches:3,explanation:'The '+d.tech+': '+d.how+' This led to the discovery of the '+d.disc+'. Impact: '+d.impact});
  });

  // --- Outcome 10: Periodic table patterns and reactivity ---
  var o10=[
    {pattern:'reactivity increases going DOWN group 1',example:'potassium reacts more vigorously with water than sodium, which reacts more than lithium',why:'atoms get larger going down the group, so the outer electron is further from the nucleus and more easily lost',kw:'group 1 reactivity increase down'},
    {pattern:'reactivity DECREASES going down group 17 (halogens)',example:'fluorine is more reactive than chlorine, which is more reactive than bromine and iodine',why:'smaller atoms at the top of group 17 attract electrons more strongly, making them more reactive',kw:'halogen reactivity decrease group 17'},
    {pattern:'noble gases (group 18) are unreactive',example:'helium, neon and argon do not form compounds under normal conditions',why:'their outer electron shells are completely full, so they have no tendency to gain or lose electrons',kw:'noble gas unreactive group 18 full shell'},
    {pattern:'metals are on the LEFT of the periodic table',example:'sodium, potassium, calcium and iron are all metals found on the left',why:'elements on the left tend to have few outer electrons and lose them easily, which is a characteristic of metals',kw:'metals left periodic table'},
    {pattern:'non-metals are on the RIGHT of the periodic table',example:'nitrogen, oxygen, fluorine, chlorine and neon are all on the right',why:'elements on the right gain or share electrons rather than losing them, characteristic of non-metals',kw:'non-metals right periodic table'},
    {pattern:'elements in the same GROUP have similar chemical properties',example:'sodium and potassium both react with water to produce hydrogen gas and a metal hydroxide',why:'elements in a group have the same number of outer (valence) electrons, which determines chemical behaviour',kw:'group same properties valence electrons'},
    {pattern:'period number equals number of electron shells',example:'period 3 elements (sodium to argon) all have 3 electron shells',why:'each new period begins when electrons start filling a new outer shell',kw:'period shells equal number'},
    {pattern:'atomic number increases across each period',example:'period 2 goes from Li(3) to Ne(10), each adding one proton',why:'each element has one more proton than the element before it',kw:'atomic number increase across period'},
    {pattern:'metalloids sit between metals and non-metals',example:'silicon and germanium are semiconductors on the boundary between metals and non-metals',why:'their intermediate electron structure gives them mixed properties',kw:'metalloid semiconductor boundary between'},
    {pattern:'group 1 metals are the most reactive metals',example:'sodium reacts vigorously with water and potassium reacts explosively',why:'group 1 atoms have only one outer electron, which they lose very easily',kw:'group 1 alkali metals most reactive'},
    {pattern:'the periodic table is arranged in order of increasing atomic number',example:'hydrogen is element 1, helium is 2, lithium is 3, and so on to oganesson at 118',why:'Mendeleev originally arranged by atomic mass, but the modern table uses atomic number (protons)',kw:'atomic number order periodic table'},
    {pattern:'elements in the same group form similar compounds',example:'NaCl and KCl are both formed the same way because Na and K are both in group 1',why:'having the same number of outer electrons means elements in a group react similarly',kw:'group similar compounds react'},
    {pattern:'melting points generally increase across period 3 for metals then decrease',example:'aluminium has a higher melting point than sodium, but sulfur and argon have much lower melting points',why:'metallic bonding strengthens across the metal elements; molecular and atomic substances have weaker forces',kw:'melting point trend period metals'},
    {pattern:'transition metals are found in groups 3 to 12',example:'iron, copper, gold, silver and nickel are all transition metals',why:'they have electrons filling inner d-orbitals and often form coloured compounds and multiple ions',kw:'transition metals groups 3 12'},
    {pattern:'atomic radius generally decreases across a period',example:'sodium atoms are larger than argon atoms despite both being in period 3',why:'more protons across a period pull electrons closer without adding new shells',kw:'atomic radius decrease across period proton'},
    {pattern:'ionisation energy generally increases across a period',example:'sodium loses an electron more easily than chlorine',why:'more protons hold electrons more tightly across a period, requiring more energy to remove them',kw:'ionisation energy increase period proton'},
    {pattern:'halogens all have 7 outer electrons',example:'fluorine (2,7), chlorine (2,8,7), bromine all have 7 outer electrons',why:'being in group 17 means all halogens have 7 valence electrons and want to gain one more',kw:'halogen 7 outer electrons group 17'},
    {pattern:'elements in period 2 all have 2 electron shells',example:'lithium (2,1) through neon (2,8) all have exactly 2 shells',why:'period number equals the number of electron shells in the atom',kw:'period 2 two shells electrons'},
    {pattern:'reactivity of non-metals increases going UP group 17',example:'fluorine at the top of group 17 is the most reactive non-metal on the periodic table',why:'smaller atoms attract electrons more strongly; fluorine has the strongest pull',kw:'non-metal reactivity increase up group 17 fluorine'},
    {pattern:'group 2 metals react with water but less vigorously than group 1',example:'calcium reacts with cold water to produce bubbles, but sodium reacts much faster',why:'group 2 elements have 2 outer electrons and need to lose both, requiring more energy than group 1',kw:'group 2 calcium water less reactive group 1'}
  ];
  o10.forEach(function(d,i){
    bank.push({topic:'Periodic table',outcomes:['SC4-PRT-01'],type:'mcq',question:'Which statement correctly describes a pattern in the periodic table?',choices:[d.pattern,o10[(i+7)%20].pattern,o10[(i+13)%20].pattern,o10[(i+17)%20].pattern],answer:0,explanation:'The pattern "'+d.pattern+'" is correct. This is because '+d.why+'.'});
    bank.push({topic:'Periodic table',outcomes:['SC4-PRT-01'],type:'mcq',question:'A student observes that "'+d.example+'". Which periodic table pattern does this demonstrate?',choices:[d.pattern,'metals are always on the right','atomic number decreases down a group','all elements have the same reactivity'],answer:0,explanation:'This demonstrates the pattern: '+d.pattern+'. '+d.why+'.'});
    bank.push({topic:'Periodic table',outcomes:['SC4-PRT-01'],type:'short',question:'Describe the following periodic table pattern and explain why it occurs: '+d.pattern+'. Give 1-2 sentences.',keywords:d.kw.split(' '),minMatches:2,explanation:'Pattern: '+d.pattern+'. This occurs because: '+d.why+'.'});
    if(i%3===0) bank.push({topic:'Periodic table',outcomes:['SC4-PRT-01'],type:'long',question:'Explain the pattern "'+d.pattern+'" using an example and connect it to atomic structure. Write 4-5 sentences.',keywords:d.kw.split(' ').concat(['atomic','structure','explain','example']),minMatches:3,explanation:'Pattern: '+d.pattern+'. Example: '+d.example+'. This occurs because: '+d.why+'.'});
  });

  // --- Outcome 11: Predict properties from position ---
  var o11=[
    {name:'lithium',g:1,p:2,type:'reactive metal',preds:['has 1 outer electron','is a reactive metal','reacts with water to produce hydrogen','forms a +1 ion'],kw:'lithium group 1 reactive metal outer electron'},
    {name:'sodium',g:1,p:3,type:'very reactive metal',preds:['has 3 electron shells','has 1 outer electron','reacts vigorously with water','forms a +1 ion (Na⁺)'],kw:'sodium group 1 period 3 reactive'},
    {name:'potassium',g:1,p:4,type:'very reactive metal',preds:['is more reactive than sodium','has 4 electron shells','reacts explosively with water','forms a +1 ion'],kw:'potassium group 1 period 4 more reactive'},
    {name:'magnesium',g:2,p:3,type:'metal',preds:['has 2 outer electrons','forms a +2 ion','reacts with acids to produce hydrogen','is less reactive than sodium'],kw:'magnesium group 2 two outer electrons'},
    {name:'calcium',g:2,p:4,type:'reactive metal',preds:['has 2 outer electrons','reacts slowly with cold water','forms a +2 ion','is found in bones and limestone'],kw:'calcium group 2 reactive bone limestone'},
    {name:'silicon',g:14,p:3,type:'metalloid',preds:['is a metalloid (semiconductor)','has 4 outer electrons','sits between metals and non-metals','is used in computer chips'],kw:'silicon metalloid semiconductor group 14'},
    {name:'fluorine',g:17,p:2,type:'very reactive non-metal',preds:['is the most reactive halogen','has 7 outer electrons','gains 1 electron to form a −1 ion','is the most electronegative element'],kw:'fluorine most reactive halogen group 17'},
    {name:'chlorine',g:17,p:3,type:'reactive non-metal',preds:['is a reactive halogen gas','has 7 outer electrons','gains electrons in reactions','is used for disinfection'],kw:'chlorine halogen group 17 reactive gas'},
    {name:'bromine',g:17,p:4,type:'non-metal',preds:['is a halogen less reactive than chlorine','is a liquid at room temperature','has 7 outer electrons','forms a −1 ion'],kw:'bromine halogen group 17 liquid'},
    {name:'helium',g:18,p:1,type:'noble gas',preds:['is a noble gas','does not react','has a full outer shell (2 electrons)','does not form compounds'],kw:'helium noble gas unreactive full shell'},
    {name:'neon',g:18,p:2,type:'noble gas',preds:['is a noble gas','has a full outer shell of 8 electrons','is unreactive','glows when electricity passes through it'],kw:'neon noble gas unreactive full shell 8'},
    {name:'argon',g:18,p:3,type:'noble gas',preds:['is an unreactive noble gas','has 8 outer electrons (full shell)','does not form compounds','is used as a shielding gas in welding'],kw:'argon noble gas unreactive group 18'},
    {name:'aluminium',g:13,p:3,type:'metal',preds:['is a metal with 3 outer electrons','forms a +3 ion','is lightweight','is used in aircraft and cans'],kw:'aluminium metal group 13 three outer electrons'},
    {name:'sulfur',g:16,p:3,type:'non-metal',preds:['is a non-metal','has 6 outer electrons','tends to gain 2 electrons','forms compounds with oxygen and hydrogen'],kw:'sulfur non-metal group 16 six outer electrons'},
    {name:'phosphorus',g:15,p:3,type:'non-metal',preds:['is a non-metal','has 5 outer electrons','forms compounds with oxygen','is used in fertilisers'],kw:'phosphorus non-metal group 15 five outer electrons'},
    {name:'copper',g:11,p:4,type:'transition metal',preds:['is a transition metal','has low reactivity','conducts electricity very well','forms +1 and +2 ions'],kw:'copper transition metal conducts electricity'},
    {name:'gold',g:11,p:6,type:'very unreactive metal',preds:['is a very unreactive metal','does not corrode','conducts electricity','is used for jewellery and electronics'],kw:'gold unreactive metal does not corrode'},
    {name:'iron',g:8,p:4,type:'transition metal',preds:['is a transition metal','is magnetic','forms +2 and +3 ions','is used to make steel'],kw:'iron transition metal magnetic steel'},
    {name:'zinc',g:12,p:4,type:'metal',preds:['is a metal','forms a +2 ion','is less reactive than magnesium','is used to galvanise iron'],kw:'zinc metal galvanise group 12'},
    {name:'beryllium',g:2,p:2,type:'metal',preds:['is a metal with 2 outer electrons','forms a +2 ion','is in period 2 with 2 electron shells','is harder than most group 2 metals'],kw:'beryllium group 2 period 2 two shells'}
  ];
  o11.forEach(function(d,i){
    bank.push({topic:'Periodic table',outcomes:['SC4-PRT-01'],type:'mcq',question:'An element is in group '+d.g+' and period '+d.p+'. Which prediction is most likely correct?',choices:[d.preds[0],o11[(i+3)%o11.length].preds[0],o11[(i+7)%o11.length].preds[0],'it is always a noble gas'],answer:0,explanation:d.name[0].toUpperCase()+d.name.slice(1)+' is in group '+d.g+', period '+d.p+'. '+d.preds.join('; ')+'.'});
    bank.push({topic:'Periodic table',outcomes:['SC4-PRT-01'],type:'mcq',question:'What type of element would you expect to find in group '+d.g+', period '+d.p+'?',choices:[d.type,'a noble gas (always)','a radioactive metal','a liquid at all temperatures'],answer:0,explanation:'Group '+d.g+', period '+d.p+' is '+d.name+', which is a '+d.type+'. '+d.preds[0]+'.'});
    bank.push({topic:'Periodic table',outcomes:['SC4-PRT-01'],type:'short',question:'Predict two properties of the element in group '+d.g+', period '+d.p+' using patterns from the periodic table. Give 1-2 sentences.',keywords:d.kw.split(' '),minMatches:2,explanation:d.name[0].toUpperCase()+d.name.slice(1)+' (group '+d.g+', period '+d.p+'): '+d.preds.slice(0,2).join(' and ')+'.'});
    if(i%3===0) bank.push({topic:'Periodic table',outcomes:['SC4-PRT-01'],type:'long',question:'Predict the properties of the element in group '+d.g+', period '+d.p+' using your knowledge of the periodic table. Write 4-5 sentences covering its type, outer electrons, likely reactivity, and one real-world use.',keywords:d.kw.split(' ').concat(['predict','group','period','outer electrons','reactivity','use']),minMatches:3,explanation:d.name[0].toUpperCase()+d.name.slice(1)+' (group '+d.g+', period '+d.p+', '+d.type+'): '+d.preds.join('; ')+'.'});
  });

  // --- Outcome 12: Element symbols ---
  var o12=[
    {name:'hydrogen',sym:'H',n:1},{name:'helium',sym:'He',n:2},{name:'lithium',sym:'Li',n:3},
    {name:'beryllium',sym:'Be',n:4},{name:'boron',sym:'B',n:5},{name:'carbon',sym:'C',n:6},
    {name:'nitrogen',sym:'N',n:7},{name:'oxygen',sym:'O',n:8},{name:'fluorine',sym:'F',n:9},
    {name:'neon',sym:'Ne',n:10},{name:'sodium',sym:'Na',n:11},{name:'magnesium',sym:'Mg',n:12},
    {name:'aluminium',sym:'Al',n:13},{name:'silicon',sym:'Si',n:14},{name:'phosphorus',sym:'P',n:15},
    {name:'sulfur',sym:'S',n:16},{name:'chlorine',sym:'Cl',n:17},{name:'argon',sym:'Ar',n:18},
    {name:'potassium',sym:'K',n:19},{name:'calcium',sym:'Ca',n:20},{name:'scandium',sym:'Sc',n:21},
    {name:'titanium',sym:'Ti',n:22},{name:'vanadium',sym:'V',n:23},{name:'chromium',sym:'Cr',n:24},
    {name:'manganese',sym:'Mn',n:25},{name:'iron',sym:'Fe',n:26},{name:'cobalt',sym:'Co',n:27},
    {name:'nickel',sym:'Ni',n:28},{name:'copper',sym:'Cu',n:29},{name:'zinc',sym:'Zn',n:30},
    {name:'bromine',sym:'Br',n:35},{name:'krypton',sym:'Kr',n:36},{name:'silver',sym:'Ag',n:47},
    {name:'tin',sym:'Sn',n:50},{name:'iodine',sym:'I',n:53},{name:'caesium',sym:'Cs',n:55},
    {name:'barium',sym:'Ba',n:56},{name:'gold',sym:'Au',n:79},{name:'mercury',sym:'Hg',n:80},
    {name:'lead',sym:'Pb',n:82},{name:'uranium',sym:'U',n:92},{name:'platinum',sym:'Pt',n:78},
    {name:'tungsten',sym:'W',n:74},{name:'xenon',sym:'Xe',n:54}
  ];
  o12.forEach(function(d,i){
    var wrong1=o12[(i+1)%o12.length];
    var wrong2=o12[(i+4)%o12.length];
    var wrong3=o12[(i+9)%o12.length];
    bank.push({topic:'Element symbols',outcomes:['SC4-PRT-01'],type:'mcq',question:'What is the chemical symbol for '+d.name+'?',choices:[d.sym,wrong1.sym,wrong2.sym,wrong3.sym],answer:0,explanation:'The chemical symbol for '+d.name+' is '+d.sym+' (atomic number '+d.n+').'});
    bank.push({topic:'Element symbols',outcomes:['SC4-PRT-01'],type:'mcq',question:'Which element has the symbol '+d.sym+'?',choices:[d.name,wrong1.name,wrong2.name,wrong3.name],answer:0,explanation:d.sym+' is the chemical symbol for '+d.name+' (atomic number '+d.n+').'});
    bank.push({topic:'Element symbols',outcomes:['SC4-PRT-01'],type:'mcq',question:'A student sees the symbol '+d.sym+' on the periodic table. Which element number (atomic number) does it represent?',choices:[String(d.n),String(wrong1.n),String(wrong2.n),String(wrong3.n)],answer:0,explanation:d.sym+' is '+d.name+', which has atomic number '+d.n+'.'});
  });

  // --- Outcome 14: Tests to identify metals and non-metals ---
  var o14=[
    {test:'electrical conductivity test',what:'connect a sample in a simple circuit with a battery, wire and light bulb',metals:'the bulb lights up — metals conduct electricity',nonmetals:'the bulb stays dark — non-metals do not conduct (except graphite)',safety:'ensure low voltage is used; never touch bare wires',purpose:'determine whether a sample conducts electricity'},
    {test:'malleability (hammer) test',what:'place the sample on an anvil and strike it with a hammer',metals:'flattens or deforms without breaking — metals are malleable',nonmetals:'shatters, crumbles or cracks — non-metals are brittle',safety:'wear eye protection; secure the anvil',purpose:'determine whether a sample is malleable'},
    {test:'lustre (reflectivity) test',what:'use sandpaper to expose a fresh surface, then observe under light',metals:'shiny and reflective — metals have lustre',nonmetals:'dull, non-reflective surface — non-metals lack lustre',safety:'take care with sharp edges when cutting samples',purpose:'observe whether the surface is shiny (lustrous)'},
    {test:'scratch hardness test',what:'try to scratch the surface with a coin, fingernail or known material',metals:'moderately hard, resists scratching by soft materials',nonmetals:'often soft (e.g., graphite) or vary widely in hardness',safety:'take care not to scratch skin when pressing the coin',purpose:'compare the hardness of a sample'},
    {test:'dilute acid reaction test',what:'add a few drops of dilute hydrochloric acid to the sample in a test tube',metals:'bubbles form — hydrogen gas is produced as the metal reacts',nonmetals:'little or no observable reaction in most cases',safety:'wear safety goggles; acid is corrosive; work in ventilated area',purpose:'observe whether the sample reacts with dilute acid'},
    {test:'water reaction test',what:'place a small piece in a beaker of water and observe',metals:'reactive metals (sodium, potassium) react vigorously; others show little reaction',nonmetals:'most non-metals show no visible reaction',safety:'use very small amounts of alkali metals; keep away from flames',purpose:'observe whether the sample reacts with water'},
    {test:'magnet test',what:'hold a strong magnet near the sample and observe attraction',metals:'iron, nickel and cobalt are attracted; most other metals are not',nonmetals:'not attracted to the magnet',safety:'keep magnets away from electronic devices',purpose:'determine whether the sample is magnetic'},
    {test:'density measurement',what:'measure mass using a balance and volume by water displacement; calculate density = mass ÷ volume',metals:'generally higher density than non-metals',nonmetals:'usually lower density than metals',safety:'take care with sharp-edged samples when measuring volume',purpose:'calculate and compare densities of samples'},
    {test:'melting point test',what:'heat the sample carefully using a Bunsen burner and record the temperature when it melts',metals:'most metals melt at very high temperatures (e.g., iron 1538°C)',nonmetals:'often melt at much lower temperatures (e.g., sulfur 115°C)',safety:'use heat-proof gloves and mat; keep flammable materials away',purpose:'compare melting points as a property of metals vs non-metals'},
    {test:'thermal conductivity test',what:'clamp the sample horizontally, heat one end with a flame, and time how long heat takes to travel along it',metals:'heat travels quickly; far end becomes hot rapidly',nonmetals:'heat travels slowly or barely at all',safety:'use heat-proof tongs; allow the sample to cool before handling',purpose:'test how quickly heat transfers through the sample'},
    {test:'reaction with oxygen test',what:'hold the sample in tongs and place it in a Bunsen flame; observe the colour of any flame and products formed',metals:'burn with bright white or coloured flames; form solid metal oxide',nonmetals:'some burn with coloured flames producing gases; noble gases do not react',safety:'wear goggles; use small samples; do not breathe in products',purpose:'observe how the sample reacts when heated in the presence of oxygen'},
    {test:'state at room temperature observation',what:'observe the sample at room temperature without any heating or cooling',metals:'nearly all metals are solid at room temperature',nonmetals:'can be solid (sulfur), liquid (bromine) or gas (chlorine, nitrogen)',safety:'some non-metals like bromine are toxic; use a sealed container',purpose:'classify the sample by its physical state under normal conditions'}
  ];
  o14.forEach(function(d,i){
    bank.push({topic:'Metal tests',outcomes:['SC5-WS-01','SC4-WS-04','SC4-PRT-01'],type:'mcq',question:'What is the purpose of the '+d.test+'?',choices:['To '+d.purpose,'To measure atomic mass','To find the atomic number','To observe colour only'],answer:0,explanation:'The '+d.test+' is used to '+d.purpose+'. Method: '+d.what+'.'});
    bank.push({topic:'Metal tests',outcomes:['SC5-WS-01','SC4-WS-04','SC4-PRT-01'],type:'mcq',question:'A student conducts a '+d.test+' on an unknown sample and gets the result: '+d.metals+'. What does this tell them?',choices:['The sample is likely a metal','The sample is definitely a non-metal','The result is always incorrect','The sample has no electrons'],answer:0,explanation:'The result "'+d.metals+'" in a '+d.test+' indicates the sample has metallic properties. '+d.nonmetals});
    bank.push({topic:'Metal tests',outcomes:['SC5-WS-01','SC4-WS-04','SC4-PRT-01'],type:'mcq',question:'How would a student safely carry out the '+d.test+'?',choices:[d.what,'heat the sample to 1000°C without protection','use no equipment — just observe with eyes only','dissolve in water and measure pH'],answer:0,explanation:'Method for '+d.test+': '+d.what+'. Safety: '+d.safety+'.'});
    bank.push({topic:'Metal tests',outcomes:['SC5-WS-01','SC4-WS-04','SC4-PRT-01'],type:'short',question:'Describe how a student would conduct the '+d.test+' and what result would indicate a metal. Give 1-2 sentences.',keywords:[d.test.split(' ')[0].toLowerCase(),'metal','result','test','observe','conduct'],minMatches:2,explanation:'The '+d.test+': '+d.what+'. Metal result: '+d.metals+'.'});
    if(i%3===0) bank.push({topic:'Metal tests',outcomes:['SC5-WS-01','SC4-WS-04','SC4-PRT-01'],type:'long',question:'A student is given four unknown solids and uses the '+d.test+' to determine which are metals and which are non-metals. Write 4-5 sentences explaining the method, expected results for metals and non-metals, one safety precaution, and how the student would use the results to classify each sample.',keywords:[d.test.split(' ')[0].toLowerCase(),'metal','non-metal','result','safety','classify','method','observe'],minMatches:4,explanation:'Method: '+d.what+'. Metals: '+d.metals+'. Non-metals: '+d.nonmetals+'. Safety: '+d.safety+'.'});
  });

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
    var longUse = serial % 3 !== 0;
    return {topic:'Materials and properties',outcomes:['SC4-PRT-01'],type:longUse?'long':'short',generated:true,generatedId:serial,question:longUse ? 'Explain why '+item[0]+' is useful for '+item[2]+'. Write about 4-5 sentences that identify the element, describe the important property, link the property to the use, and explain why a different material may be less suitable.' : 'Explain why '+item[0]+' is useful for '+item[2]+'. Give 1-2 sentences.',keywords:[item[0],'properties','use','useful','because','suitable'],minMatches:longUse?3:2,explanation:item[0][0].toUpperCase()+item[0].slice(1)+' is useful for '+item[2]+' because '+item[3]+'. A strong answer links the property to the job the material needs to do.'};
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
    var longPeriodic = serial % 4 !== 0;
    return {topic:'Periodic table',outcomes:['SC4-PRT-01'],type:longPeriodic?'long':'short',generated:true,generatedId:serial,question:longPeriodic ? 'Predict properties of '+item[0]+' from its position on the periodic table. Write about 4-5 sentences using its group, period, element type and likely reactivity or behaviour.' : 'Predict one property of '+item[0]+' from its position on the periodic table. Give 1-2 sentences.',keywords:['group','period','property','predict','position','periodic table','reactivity'],minMatches:longPeriodic?3:2,explanation:item[0][0].toUpperCase()+item[0].slice(1)+' can be predicted from its position: it is a '+item[4]+' in '+item[2]+' and '+item[3]+'. Position helps predict properties because groups and periods show patterns.'};
  }
  if(type === 7){
    item = investigations[serial % investigations.length];
    if(serial % 4 === 3){
      return {topic:'Working science',outcomes:['SC4-WS-02','SC4-WS-04'],type:'long',generated:true,generatedId:serial,question:'Plan an investigation to test how '+item[0]+'. Write about 4-5 sentences including the independent variable, dependent variable, one control variable, one safety or validity step, and how you would use the results.',keywords:['independent','dependent','control','variable','valid','safe','results'],minMatches:4,explanation:'A valid plan identifies the independent variable as '+item[1]+', measures '+item[2]+', keeps '+item[3]+' controlled, follows a safe procedure, and uses the results to draw a conclusion.'};
    }
    return {topic:'Working science',outcomes:['SC4-WS-02','SC4-WS-04'],type:'mcq',generated:true,generatedId:serial,question:'In an investigation of how '+item[0]+', what is the independent variable?',choices:[item[1],item[2],item[3],'the conclusion'],answer:0,explanation:'The independent variable is deliberately changed, so it is '+item[1]+'.'};
  }
  if(type === 8){
    item = investigations[serial % investigations.length];
    var longInvestigation = serial % 5 !== 0;
    return {topic:'Working science',outcomes:['SC4-WS-05','SC4-WS-06'],type:longInvestigation?'long':'short',generated:true,generatedId:serial,question:longInvestigation ? 'Explain how data could be used to identify a trend when testing how '+item[0]+'. Write about 4-5 sentences that describe the data table or graph, the pattern you would look for, how you would compare results, and how the trend supports a conclusion or prediction.' : 'Explain how data could be used to identify a trend when testing how '+item[0]+'. Give 1-2 sentences.',keywords:['data','trend','pattern','relationship','correlate','prediction','conclusion','graph','table'],minMatches:longInvestigation?3:2,explanation:'Data can be placed in a table or graph so patterns, trends or relationships can be identified and used to draw a conclusion or make a prediction. A strong answer explains what would be compared and how the pattern supports the conclusion.'};
  }
  if(type === 9){
    var samples = [['copper','metal','conducts electricity and is shiny'],['sulfur','non-metal','is brittle and a poor conductor'],['silicon','metalloid','has semiconductor properties'],['aluminium','metal','is malleable and conducts electricity']];
    item = samples[serial % samples.length];
    return {topic:'Metal tests',outcomes:['SC5-WS-01','SC4-WS-04'],type:'mcq',generated:true,generatedId:serial,question:'A sample of '+item[0]+' is tested. Which result best supports that it is a '+item[1]+'?',choices:[item[2],'it has no mass','it changes atomic number','it becomes a noble gas'],answer:0,explanation:item[0][0].toUpperCase()+item[0].slice(1)+' is a '+item[1]+' because it '+item[2]+'.'};
  }
  if(type === 10){
    var changes = [['ice melting','physical','the substance remains water'],['paper burning','chemical','new substances such as ash form'],['salt dissolving then being recovered','physical','the salt remains the same substance'],['iron rusting','chemical','a new substance, rust, forms']];
    item = changes[serial % changes.length];
    if(serial % 4 === 2){
      return {topic:'Change',outcomes:['SC4-PRT-01'],type:'long',generated:true,generatedId:serial,question:'Explain whether '+item[0]+' is a chemical or physical change. Write about 4-5 sentences that state your answer, describe the evidence, compare it with the other type of change, and explain why this matters when classifying matter.',keywords:['chemical','physical','change','evidence','new substance','same substance'],minMatches:3,explanation:item[0][0].toUpperCase()+item[0].slice(1)+' is a '+item[1]+' change because '+item[2]+'. A strong answer compares this evidence with the opposite type of change.'};
    }
    return {topic:'Change',outcomes:['SC4-PRT-01'],type:'mcq',generated:true,generatedId:serial,question:'Is '+item[0]+' a chemical or physical change?',choices:[item[1]+' change because '+item[2], 'nuclear change because atoms vanish', 'biological change because it is alive', 'no change because matter is not involved'],answer:0,explanation:item[0][0].toUpperCase()+item[0].slice(1)+' is a '+item[1]+' change because '+item[2]+'.'};
  }
  item = scientists[serial % scientists.length];
  var longModel = serial % 3 !== 0;
  return {topic:'Atomic models',outcomes:['SC4-PRT-01'],type:longModel?'long':'short',generated:true,generatedId:serial,question:longModel ? 'Explain how evidence from '+item[2]+' improved the model of atomic structure. Write about 4-5 sentences that describe the evidence, the idea it supported, why the old model was not enough, and how the model changed.' : 'Explain how evidence from '+item[2]+' improved the model of atomic structure. Give 1-2 sentences.',keywords:['evidence','model','atomic','structure','technology','observation','improved'],minMatches:longModel?3:2,explanation:'Evidence from '+item[2]+' helped scientists improve the atomic model by supporting the idea of the '+item[1]+'. Scientific models change when new observations explain matter better than the old model.'};
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
  for(var offset=0;offset<60;offset++){
    var item = makeBankExpansionQuestion(serial + offset);
    if(!desiredType || questionTypeBucket(item) === desiredType || item.type === desiredType) return item;
  }
  var fallback = makeBankExpansionQuestion(serial);
  if((desiredType === 'word' && questionTypeBucket(fallback) !== 'word') || (desiredType === 'long' && fallback.type !== 'long')){
    return {
      topic:'Working science',
      outcomes:['SC4-WS-05','SC4-WS-06'],
      type:'long',
      generated:true,
      generatedId:serial,
      question:'Explain how data and observations can be used to draw a conclusion in a valid science investigation. Write about 4-5 sentences that describe the evidence, identify a pattern, explain why controls matter, and link the data to the conclusion.',
      keywords:['data','observations','conclusion','valid','evidence','pattern','control'],
      minMatches:3,
      explanation:'Data and observations provide evidence. Scientists can look for patterns or trends, check that the investigation was valid, and use the evidence to draw a conclusion.'
    };
  }
  if(desiredType === 'short' && fallback.type !== 'short'){
    return {
      topic:'Working science',
      outcomes:['SC4-WS-05','SC4-WS-06'],
      type:'short',
      generated:true,
      generatedId:serial,
      question:'Explain how data and observations can be used to draw a conclusion. Give 1-2 sentences.',
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
  var targetShort = Math.round((targetSize - targetMcq) * 0.75);
  var targetLong = targetSize - targetMcq - targetShort;
  var serial = 1;
  while(questionBank.length < targetSize && serial < targetSize * 5){
    var counts = questionTypeCounts();
    var exactCounts = questionBank.reduce(function(total,item){
      total[item.type] = (total[item.type] || 0) + 1;
      return total;
    },{mcq:0,short:0,long:0});
    var desiredType = counts.mcq < targetMcq ? 'mcq' : (exactCounts.long < targetLong ? 'long' : (exactCounts.short < targetShort ? 'short' : null));
    var item = makeBankExpansionQuestionOfType(serial, desiredType);
    var key = questionKey(item);
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
  delete item._mark;
  delete item._maxMark;
  delete item._aiFeedback;
  delete item._feedbackLabel;
  delete item._aiUsed;
  delete item._choicesShuffled;
}

function shuffleMultipleChoiceOptions(item){
  if(!item || item.type !== 'mcq' || item._choicesShuffled || !item.choices || !item.choices.length) return;
  var paired = item.choices.map(function(choice,index){
    return {choice: choice, correct: index === item.answer};
  });
  for(var i=paired.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var temp=paired[i];
    paired[i]=paired[j];
    paired[j]=temp;
  }
  item.choices = paired.map(function(entry){ return entry.choice; });
  item.answer = paired.findIndex(function(entry){ return entry.correct; });
  item._choicesShuffled = true;
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
  shuffleMultipleChoiceOptions(item);
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
      if(item._correct !== undefined){
        var displayMaxMark = item._maxMark || maxMarkForItem(item);
        var displayMark = item._mark !== undefined ? item._mark : (item._correct ? displayMaxMark : 0);
        var markClass = displayMark >= Math.ceil(displayMaxMark * 0.6) ? 'positive' : 'negative';
        choicesHtml += '<div class="mark-chip '+markClass+'">Mark: '+displayMark+'/'+displayMaxMark+'</div>';
      }
      if(item._aiFeedback){
        choicesHtml += '<div class="feedback '+(item._correct?'positive':'negative')+'" style="margin-top:12px;">'+escapeHtml(item._feedbackLabel || 'AI feedback')+': '+escapeHtml(item._aiFeedback)+'</div>';
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

function maxMarkForItem(item){
  return item && item.type === 'long' ? 5 : 3;
}

function answerSubstanceMarkCap(item,answer,maxMark){
  var words = normalizeWords(answer).filter(function(word){return word.length > 2;});
  var unique = {};
  words.forEach(function(word){unique[word] = true;});
  var uniqueCount = Object.keys(unique).length;
  if(uniqueCount <= 1) return Math.min(1, maxMark);
  if(uniqueCount <= 3) return Math.min(item && item.type === 'long' ? 2 : 1, maxMark);
  if(uniqueCount <= 6) return Math.min(item && item.type === 'long' ? 3 : 2, maxMark);
  return maxMark;
}

function markFromGradeResult(item,result,answer){
  var maxMark = maxMarkForItem(item);
  var rawMark;
  if(result && typeof result.mark === 'number'){
    rawMark = result.maxMark && result.maxMark !== maxMark ? (result.mark / result.maxMark) * maxMark : result.mark;
  } else if(result && typeof result.scoreValue === 'number'){
    rawMark = result.scoreValue * maxMark;
  } else if(result && typeof result.confidence === 'number'){
    rawMark = (result.confidence / 100) * maxMark;
  } else {
    rawMark = result && result.score ? maxMark : 0;
  }
  var cappedMark = clamp(Math.round(rawMark), 0, maxMark);
  cappedMark = Math.min(cappedMark, answerSubstanceMarkCap(item, answer || '', maxMark));
  return {
    mark: cappedMark,
    maxMark: maxMark
  };
}

function uniqueAnswerWordCount(answer){
  var seen = {};
  normalizeWords(answer).filter(function(word){ return word.length > 2; }).forEach(function(word){
    seen[word] = true;
  });
  return Object.keys(seen).length;
}

function gradeResultWithSanityCheck(item,result,answer){
  if(!result || result._aiProvider === 'Mini marker') return result;
  var aiMark = markFromGradeResult(item,result,answer);
  var maxMark = aiMark.maxMark;
  var answerLooksDetailed = uniqueAnswerWordCount(answer) >= (item && item.type === 'long' ? 22 : 10);
  if(aiMark.mark > 1 || !answerLooksDetailed) return result;
  try{
    var localResult = OfflineMarkerEngine.grade(answer,item);
    var localMark = markFromGradeResult(item,localResult,answer);
    if(localMark.mark >= Math.ceil(maxMark * 0.6) && localMark.mark > aiMark.mark + 1){
      localResult.fallback = true;
      localResult._aiProvider = 'Mini marker';
      localResult.explanation = 'Hosted AI gave an inconsistent mark, so Mini Marker rechecked it. ' + localResult.explanation;
      return localResult;
    }
  }catch(err){
    console.log('Sanity recheck failed: '+err.message);
  }
  return result;
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
      var copiedMaxMark = maxMarkForItem(item);
      return {
        score: 0,
        mark: 0,
        maxMark: copiedMaxMark,
        confidence: 0,
        scoreValue: 0,
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
    var maxMark = maxMarkForItem(item);
    var mark = Math.round(total * maxMark);
    if(passed) mark = Math.max(mark, Math.ceil(maxMark * 0.6));
    mark = clamp(mark, 0, maxMark);
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
      mark: mark,
      maxMark: maxMark,
      confidence: result.confidence,
      scoreValue: total,
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
  if(aiStartupChecking) return {className:'amber', title:'Checking whether cloud AI is available...'};
  if(backendAiAvailable) return {className:'green', title:'Hosted AI ready - no money or school-laptop install needed'};
  if(puterAiAvailable) return {className:'green', title:'Puter cloud AI ready - no download needed'};
  if(pollinationsAvailable) return {className:'green', title:'Backup cloud AI will be tried if Puter is blocked'};
  if(browserAiAvailable) return {className:'green', title:'Browser AI ready'};
  if(ollamaAvailable) return {className:'green', title:'Ollama AI ready (local)'};
  if(apiKeyValid || OPENAI_API_KEY_PLAINTEXT || ENCRYPTED_OPENAI_KEY) return {className:'green', title:'OpenAI API ready'};
  if(miniMarkerAvailable) return {className:'amber', title:'Mini marker ready - works offline on school computers'};
  return {className:'red', title:'No AI grading available'};
}

function hasConnectedAI(){
  return !!(aiEnabled && (backendAiAvailable || puterAiAvailable || pollinationsAvailable || browserAiAvailable || ollamaAvailable || OPENAI_API_KEY_PLAINTEXT || ENCRYPTED_OPENAI_KEY));
}

async function gradeWithBestAI(text,item){
  var guidance = item.explanation || item.question;
  var providers = [];
  if(aiEnabled && backendAiAvailable) providers.push({name:'Hosted AI', grade:function(){return gradeWithBackendAI(text, item);}, fail:function(){}});
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

function gradeLooksSuspiciouslyLow(item,result,text){
  if(!result || result._aiProvider === 'Mini marker') return false;
  var gradeMark = markFromGradeResult(item,result,text);
  if(gradeMark.mark > 1) return false;
  return uniqueAnswerWordCount(text) >= (item && item.type === 'long' ? 22 : 10);
}

async function resolveSuspiciousGrade(text,item,result){
  if(!gradeLooksSuspiciouslyLow(item,result,text)) return result;
  if(result._aiProvider !== 'Hosted AI' && backendAiAvailable){
    try{
      var hostedResult = await gradeWithBackendAI(text,item);
      hostedResult._aiProvider = 'Hosted AI';
      var hostedMark = markFromGradeResult(item,hostedResult,text);
      var originalMark = markFromGradeResult(item,result,text);
      if(hostedMark.mark > originalMark.mark){
        hostedResult.explanation = 'Hosted AI rechecked a suspiciously low '+result._aiProvider+' mark. ' + (hostedResult.explanation || '');
        return hostedResult;
      }
    }catch(err){
      console.log('Hosted AI second opinion failed: '+err.message);
    }
  }
  return gradeResultWithSanityCheck(item,result,text);
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
    item._maxMark = maxMarkForItem(item);
    item._mark = 0;
    item._aiUsed = true;
    item._feedbackLabel = 'Backup feedback';
    item._aiFeedback = 'Mini marker: this mostly repeats the question rather than answering it. Add the science idea from the model answer and explain why it answers the question.';
    lastAiProvider = 'Copy check';
    renderCurrentQuestion();
    updateProgress();
    return;
  }
  gradeWithBestAI(text,item)
    .then(function(result){
      return resolveSuspiciousGrade(text,item,result);
    })
    .then(function(result){
      var gradeMark = markFromGradeResult(item,result,text);
      item._correct = gradeMark.mark >= Math.ceil(gradeMark.maxMark * 0.6);
      item._mark = gradeMark.mark;
      item._maxMark = gradeMark.maxMark;
      item._aiUsed = !!(result && result._aiProvider);
      item._feedbackLabel = result && result.fallback ? 'Backup feedback' : 'AI feedback';
      item._aiFeedback = item._aiUsed && result && result.explanation ? result.explanation : '';
      if(item._correct) totals.correct++;
      renderCurrentQuestion();
      updateProgress();
    })
    .catch(function(err){
      console.log('AI grading failed: '+err.message+", using mini marker");
      return gradeWithMiniMarker(text,item).then(function(result){
        var gradeMark = markFromGradeResult(item,result,text);
        item._correct = gradeMark.mark >= Math.ceil(gradeMark.maxMark * 0.6);
        item._mark = gradeMark.mark;
        item._maxMark = gradeMark.maxMark;
        item._aiFeedback = result && result.explanation ? result.explanation : '';
        item._feedbackLabel = result && result.fallback ? 'Backup feedback' : 'Mini Marker feedback';
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
    ['Hosted AI', backendAiAvailable],
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
  var testItem = {
    type:'short',
    question:'Explain how you can tell a chemical change has happened.',
    explanation:testGuidance,
    keywords:['chemical','change','new substance']
  };
  var tests = [
    {
      name:'Hosted AI',
      run:function(){
        if(!backendAiAvailable) throw new Error('Backend AI not available');
        return gradeWithBackendAI(testAnswer, testItem);
      }
    },
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
  var currentMark = '-';
  if(item && item._correct !== undefined){
    var debugMaxMark = item._maxMark || maxMarkForItem(item);
    var debugMark = item._mark !== undefined ? item._mark : (item._correct ? debugMaxMark : 0);
    currentMark = debugMark + '/' + debugMaxMark;
  }
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
      '<div><dt>Question mark</dt><dd>'+escapeHtml(currentMark)+'</dd></div>' +
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
    var gradeMark = markFromGradeResult(item,result,answer);
    item._correct = gradeMark.mark >= Math.ceil(gradeMark.maxMark * 0.6);
    item._mark = gradeMark.mark;
    item._maxMark = gradeMark.maxMark;
    item._aiUsed = true;
    item._feedbackLabel = 'Mini Marker feedback';
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
      return;
    }
    if(event.key === 'ArrowLeft'){
      event.preventDefault();
      prevQuestion();
      return;
    }
    if(event.key === 'ArrowRight'){
      event.preventDefault();
      forwardQuestion();
    }
  });
}

async function refreshAiAvailabilityOnStartup(){
  aiStartupChecking = true;
  renderCurrentQuestion();
  renderDebugMenu();
  backendAiAvailable = await checkBackendAiAvailable();
  puterAiAvailable = !backendAiAvailable ? await checkPuterAiUsable() : false;
  pollinationsAvailable = await checkPollinationsAvailable();
  browserAiAvailable = !backendAiAvailable && !puterAiAvailable && !pollinationsAvailable ? await checkBrowserAiAvailable() : false;
  ollamaAvailable = !backendAiAvailable && !puterAiAvailable && !pollinationsAvailable && !browserAiAvailable ? await checkOllamaAvailable() : false;
  apiKeyValid = !backendAiAvailable && !puterAiAvailable && !pollinationsAvailable && !browserAiAvailable && !ollamaAvailable ? await validateOpenAIKey() : false;
  aiStartupChecking = false;
  renderCurrentQuestion();
  renderDebugMenu();
}

window.addEventListener('DOMContentLoaded', async function(){
  expandQuestionBankToTarget(500);
  setupDebugMenu();
  startQuiz();
  setupPeriodicToggle();
  enhancePeriodicTable();
  renderInteractivePeriodicTable();
  refreshAiAvailabilityOnStartup();
});
