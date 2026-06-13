function $(id){return document.getElementById(id);}
function clamp(value,min,max){return Math.min(max,Math.max(min,value));}

var periodicInfo = {
  1:{name:'Hydrogen',mass:'1.008'},2:{name:'Helium',mass:'4.003'},3:{name:'Lithium',mass:'6.94'},4:{name:'Beryllium',mass:'9.012'},5:{name:'Boron',mass:'10.81'},6:{name:'Carbon',mass:'12.01'},7:{name:'Nitrogen',mass:'14.01'},8:{name:'Oxygen',mass:'16.00'},9:{name:'Fluorine',mass:'19.00'},10:{name:'Neon',mass:'20.18'},11:{name:'Sodium',mass:'22.99'},12:{name:'Magnesium',mass:'24.31'},13:{name:'Aluminium',mass:'26.98'},14:{name:'Silicon',mass:'28.09'},15:{name:'Phosphorus',mass:'30.97'},16:{name:'Sulfur',mass:'32.06'},17:{name:'Chlorine',mass:'35.45'},18:{name:'Argon',mass:'39.95'},19:{name:'Potassium',mass:'39.10'},20:{name:'Calcium',mass:'40.08'},21:{name:'Scandium',mass:'44.96'},22:{name:'Titanium',mass:'47.87'},23:{name:'Vanadium',mass:'50.94'},24:{name:'Chromium',mass:'52.00'},25:{name:'Manganese',mass:'54.94'},26:{name:'Iron',mass:'55.85'},27:{name:'Cobalt',mass:'58.93'},28:{name:'Nickel',mass:'58.69'},29:{name:'Copper',mass:'63.55'},30:{name:'Zinc',mass:'65.38'},31:{name:'Gallium',mass:'69.72'},32:{name:'Germanium',mass:'72.63'},33:{name:'Arsenic',mass:'74.92'},34:{name:'Selenium',mass:'78.97'},35:{name:'Bromine',mass:'79.90'},36:{name:'Krypton',mass:'83.80'},37:{name:'Rubidium',mass:'85.47'},38:{name:'Strontium',mass:'87.62'},39:{name:'Yttrium',mass:'88.91'},40:{name:'Zirconium',mass:'91.22'},41:{name:'Niobium',mass:'92.91'},42:{name:'Molybdenum',mass:'95.95'},43:{name:'Technetium',mass:'98.00'},44:{name:'Ruthenium',mass:'101.07'},45:{name:'Rhodium',mass:'102.91'},46:{name:'Palladium',mass:'106.42'},47:{name:'Silver',mass:'107.87'},48:{name:'Cadmium',mass:'112.41'},49:{name:'Indium',mass:'114.82'},50:{name:'Tin',mass:'118.71'},51:{name:'Antimony',mass:'121.76'},52:{name:'Tellurium',mass:'127.60'},53:{name:'Iodine',mass:'126.90'},54:{name:'Xenon',mass:'131.29'},55:{name:'Caesium',mass:'132.91'},56:{name:'Barium',mass:'137.33'},57:{name:'Lanthanum',mass:'138.91'},58:{name:'Cerium',mass:'140.12'},59:{name:'Praseodymium',mass:'140.91'},60:{name:'Neodymium',mass:'144.24'},61:{name:'Promethium',mass:'145.00'},62:{name:'Samarium',mass:'150.36'},63:{name:'Europium',mass:'151.96'},64:{name:'Gadolinium',mass:'157.25'},65:{name:'Terbium',mass:'158.93'},66:{name:'Dysprosium',mass:'162.50'},67:{name:'Holmium',mass:'164.93'},68:{name:'Erbium',mass:'167.26'},69:{name:'Thulium',mass:'168.93'},70:{name:'Ytterbium',mass:'173.05'},71:{name:'Lutetium',mass:'174.97'},72:{name:'Hafnium',mass:'178.49'},73:{name:'Tantalum',mass:'180.95'},74:{name:'Tungsten',mass:'183.84'},75:{name:'Rhenium',mass:'186.21'},76:{name:'Osmium',mass:'190.23'},77:{name:'Iridium',mass:'192.22'},78:{name:'Platinum',mass:'195.08'},79:{name:'Gold',mass:'196.97'},80:{name:'Mercury',mass:'200.59'},81:{name:'Thallium',mass:'204.38'},82:{name:'Lead',mass:'207.20'},83:{name:'Bismuth',mass:'208.98'},84:{name:'Polonium',mass:'209.00'},85:{name:'Astatine',mass:'210.00'},86:{name:'Radon',mass:'222.00'},87:{name:'Francium',mass:'223.00'},88:{name:'Radium',mass:'226.00'},89:{name:'Actinium',mass:'227.00'},90:{name:'Thorium',mass:'232.04'},91:{name:'Protactinium',mass:'231.04'},92:{name:'Uranium',mass:'238.03'},93:{name:'Neptunium',mass:'237.00'},94:{name:'Plutonium',mass:'244.00'},95:{name:'Americium',mass:'243.00'},96:{name:'Curium',mass:'247.00'},97:{name:'Berkelium',mass:'247.00'},98:{name:'Californium',mass:'251.00'},99:{name:'Einsteinium',mass:'252.00'},100:{name:'Fermium',mass:'257.00'},101:{name:'Mendelevium',mass:'258.00'},102:{name:'Nobelium',mass:'259.00'},103:{name:'Lawrencium',mass:'266.00'},104:{name:'Rutherfordium',mass:'267.00'},105:{name:'Dubnium',mass:'268.00'},106:{name:'Seaborgium',mass:'269.00'},107:{name:'Bohrium',mass:'270.00'},108:{name:'Hassium',mass:'269.00'},109:{name:'Meitnerium',mass:'278.00'},110:{name:'Darmstadtium',mass:'281.00'},111:{name:'Roentgenium',mass:'282.00'},112:{name:'Copernicium',mass:'285.00'},113:{name:'Nihonium',mass:'286.00'},114:{name:'Flerovium',mass:'289.00'},115:{name:'Moscovium',mass:'290.00'},116:{name:'Livermorium',mass:'293.00'},117:{name:'Tennessine',mass:'294.00'},118:{name:'Oganesson',mass:'294.00'}};

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

var questionBank = buildQuestionBank();
var totals={answered:0,correct:0};
var currentQuestionIndex=0;
var questionCount=0;
var questionHistory=[];
var historyPosition=0;
var answeredLast=false;
var autoNextTimeout = null;

function buildQuestionBank(){
  var bank=[];

  var matter=[
    {question:'Which of these is an element?',choices:['Water','Air','Gold','Salt'],answer:2,explanation:'Gold is a pure element, made of only one type of atom.'},
    {question:'A mixture is different from a compound because a mixture:',choices:['Has only one atom type','Can be separated physically','Has atoms chemically bonded','Always contains water'],answer:1,explanation:'A mixture can be separated physically because its parts are not chemically joined.'},
    {question:'The formula H2O stands for:',choices:['Hydrogen gas','Water','Hydrogen peroxide','Oxygen gas'],answer:1,explanation:'H2O is the chemical formula for water, a compound made of hydrogen and oxygen.'},
    {question:'Which formula shows an element molecule?',choices:['CO2','O2','NaCl','H2O'],answer:1,explanation:'O2 has only oxygen atoms, so it is an element molecule.'},
    {question:'How many atoms are in one molecule of CO2?',choices:['1','2','3','4'],answer:2,explanation:'CO2 contains one carbon atom and two oxygen atoms, for three in total.'},
    {question:'Which of these is a compound?',choices:['Gold','Oxygen','Water','Argon'],answer:2,explanation:'Water is a compound made of hydrogen and oxygen atoms chemically bonded.'},
    {question:'Which sample is a mixture?',choices:['Salt water','Oxygen gas','Diamond','Neon'],answer:0,explanation:'Salt water is a mixture of salt and water, not a pure substance.'},
    {question:'Which of these is a pure substance?',choices:['Air','Steel','Sodium chloride','Trail mix'],answer:2,explanation:'Sodium chloride is a compound with a fixed chemical formula.'},
    {question:'What is a key property of a mixture?',choices:['Fixed composition','Components not chemically joined','Always a solid','Contains only one element'],answer:1,explanation:'A mixture is made of components that are not chemically bonded.'},
    {question:'Which change is physical?',choices:['Melting ice','Burning paper','Rusting iron','Baking bread'],answer:0,explanation:'Melting ice changes state but does not create a new substance.'},
    {question:'Which change is chemical?',choices:['Dissolving sugar','Melting wax','Burning wood','Freezing water'],answer:2,explanation:'Burning wood creates new substances and is therefore chemical.'},
    {question:'Which substance is an element?',choices:['Gold','Water','Carbon dioxide','Salt'],answer:0,explanation:'Gold is a single element made of only gold atoms.'},
    {question:'Which substance is a compound?',choices:['Oxygen','Iron','Carbon dioxide','Helium'],answer:2,explanation:'Carbon dioxide contains carbon and oxygen atoms bonded together.'},
    {question:'Which of these is not matter?',choices:['Heat','Water','Air','Sand'],answer:0,explanation:'Heat is energy, not matter.'},
    {question:'Which of these can be separated by physical means?',choices:['Sugar water','Sodium chloride','Carbon dioxide','Oxygen gas'],answer:0,explanation:'Sugar water is a mixture that can be separated physically.'},
    {question:'Which is a heterogeneous mixture?',choices:['Soil','Sugar solution','Oxygen gas','Salt'],answer:0,explanation:'Soil is a heterogeneous mixture with visibly different components.'},
    {question:'Which is a homogeneous mixture?',choices:['Vinegar','Sand','Granite','Oil and water'],answer:0,explanation:'Vinegar is a uniform mixture of acetic acid and water.'},
    {question:'Which element is a gas at room temperature?',choices:['Oxygen','Iron','Sodium','Copper'],answer:0,explanation:'Oxygen is a gas at room temperature.'},
    {question:'Which mixture can usually be separated by filtration?',choices:['Sand and water','Salt water','Oxygen and nitrogen','Carbon dioxide'],answer:0,explanation:'Sand and water is a suspension that can be filtered.'},
    {question:'Which is true for a compound?',choices:['It has a fixed ratio of elements','It is a mixture','It is always gaseous','It contains only one atom'],answer:0,explanation:'Compounds have elements combined in fixed ratios.'},
    {question:'Which is true for an element?',choices:['It cannot be broken down by chemical means','It is made of two elements','It is always liquid','It contains molecules only'],answer:0,explanation:'Elements are substances that cannot be chemically decomposed into simpler substances.'},
    {question:'Which of these is made of atoms of two different elements?',choices:['Water','Copper','Gold','Hydrogen'],answer:0,explanation:'Water contains hydrogen and oxygen atoms.'},
    {question:'Which of these is a chemical formula?',choices:['CO2','Bronze','Air','Steel'],answer:0,explanation:'CO2 is the chemical formula for carbon dioxide.'},
    {question:'Which is not a compound?',choices:['O2','H2O','CO2','NaCl'],answer:0,explanation:'O2 is a molecule of an element, not a compound.'},
    {question:'Which is a physical property?',choices:['Colour','Reactivity','Burning','Rusting'],answer:0,explanation:'Colour is a physical property of a substance.'},
    {question:'Which is a chemical property?',choices:['Flammability','Melting point','Hardness','Colour'],answer:0,explanation:'Flammability describes how a substance reacts chemically with oxygen.'},
    {question:'Which process separates a mixture by particle size?',choices:['Filtration','Distillation','Evaporation','Combustion'],answer:0,explanation:'Filtration separates components based on particle size.'},
    {question:'Which process separates a compound into elements?',choices:['Electrolysis','Filtration','Decanting','Sieving'],answer:0,explanation:'Electrolysis uses electricity to break compounds into elements.'},
    {question:'Which of these is not a mixture?',choices:['Air','Salt','Fruit salad','Petrol'],answer:1,explanation:'Salt is a compound, not a mixture.'},
    {question:'Which of these is an alloy?',choices:['Bronze','Water','Oxygen','Diamond'],answer:0,explanation:'Bronze is an alloy made from copper and tin.'}
  ];
  matter.forEach(function(item){ bank.push({topic:'Matter',outcomes:['SC4-PRT-01'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});});

  var atomic=[
    {question:'Which particle has a negative charge?',choices:['Proton','Neutron','Electron','Nucleus'],answer:2,explanation:'Electrons are negatively charged.'},
    {question:'The atomic number of an element tells us the number of:',choices:['Neutrons','Protons','Electrons in any ion','Molecules'],answer:1,explanation:'The atomic number equals the number of protons.'},
    {question:'An atom is neutral when it has:',choices:['More protons than electrons','More electrons than protons','Equal protons and electrons','Only neutrons'],answer:2,explanation:'Equal protons and electrons make the atom neutral.'},
    {question:'An atom with electron arrangement 2, 8, 1 is most likely:',choices:['Neon','Sodium','Chlorine','Carbon'],answer:1,explanation:'Sodium has 11 electrons, arranged 2, 8, 1.'},
    {question:'Which particle is found in the nucleus and has positive charge?',choices:['Proton','Electron','Photon','Neutron'],answer:0,explanation:'Protons are positively charged and located in the nucleus.'},
    {question:'Which particle has no charge?',choices:['Photon','Atom','Neutron','Electron'],answer:2,explanation:'Neutrons carry no electric charge.'},
    {question:'Electrons occupy regions called:',choices:['Shells','Nucleus','Protons','Orbits'],answer:0,explanation:'Electrons occupy shells around the nucleus.'},
    {question:'The nucleus contains:',choices:['Protons and neutrons','Electrons and protons','Electrons and neutrons','Only electrons'],answer:0,explanation:'The nucleus contains protons and neutrons.'},
    {question:'Which particle determines an atom’s chemical behaviour?',choices:['Proton','Neutron','Electron','Atom'],answer:2,explanation:'Electrons determine chemical reactions and bonding.'},
    {question:'A neutral helium atom has 2 protons and:',choices:['2 neutrons','2 electrons','1 electron','3 electrons'],answer:1,explanation:'A neutral helium atom also has two electrons.'},
    {question:'Which particle has about the same mass as a proton?',choices:['Neutron','Electron','Photon','Molecule'],answer:0,explanation:'Neutrons and protons have similar mass.'},
    {question:'The number of electrons in a neutral atom equals:',choices:['Number of protons','Number of neutrons','Number of atoms','Number of molecules'],answer:0,explanation:'Neutral atoms have equal numbers of protons and electrons.'},
    {question:'Which of these is an isotope of carbon?',choices:['Carbon-13','Carbon dioxide','Carbon monoxide','Carbon fibre'],answer:0,explanation:'Carbon-13 is an isotope of the element carbon.'},
    {question:'Which particle would you remove to make a positive ion?',choices:['Proton','Neutron','Electron','Nucleus'],answer:2,explanation:'Removing an electron gives a positive ion.'},
    {question:'Which particle is most likely to be shared between atoms in a bond?',choices:['Proton','Neutron','Electron','Photon'],answer:2,explanation:'Electrons are shared in covalent bonds.'},
    {question:'Which scientist discovered electrons?',choices:['Rutherford','Dalton','Thomson','Bohr'],answer:2,explanation:'J.J. Thomson discovered the electron.'},
    {question:'Which model pictured electrons orbiting like planets?',choices:['Dalton','Thomson','Rutherford','Bohr'],answer:3,explanation:'Bohr proposed electrons orbit the nucleus in shells.'},
    {question:'Which experiment showed the atom has a tiny dense nucleus?',choices:['Gold foil','Oil drop','Cathode ray','Double slit'],answer:0,explanation:'The gold foil experiment revealed a dense nucleus.'},
    {question:'Which scientist suggested atoms were indivisible?',choices:['Democritus','Aristotle','Dalton','Rutherford'],answer:0,explanation:'Democritus suggested the idea of indivisible particles called atomos.'},
    {question:'Which scientist discovered the neutron?',choices:['Bohr','Chadwick','Thomson','Rutherford'],answer:1,explanation:'James Chadwick discovered the neutron.'},
    {question:'Protons and neutrons are held in the nucleus by:',choices:['Strong force','Gravity','Magnetic force','Van der Waals'],answer:0,explanation:'The strong nuclear force holds the nucleus together.'},
    {question:'Which particle is lightest?',choices:['Neutron','Proton','Electron','Atom'],answer:2,explanation:'Electrons are much lighter than protons or neutrons.'},
    {question:'Which of these describes the nucleus?',choices:['Small, dense, positively charged','Large and diffuse','Negatively charged','Made of electrons'],answer:0,explanation:'The nucleus is small, dense, and positively charged.'},
    {question:'Which particle moves most rapidly in an atom?',choices:['Proton','Neutron','Electron','Nucleus'],answer:2,explanation:'Electrons move rapidly around the nucleus.'},
    {question:'Which atomic particle is exchanged between atoms in ionic bonding?',choices:['Electron','Proton','Neutron','Molecule'],answer:0,explanation:'Ionic bonding transfers electrons from one atom to another.'},
    {question:'Atomic number 17 belongs to:',choices:['Chlorine','Argon','Potassium','Calcium'],answer:0,explanation:'Chlorine has atomic number 17.'},
    {question:'Number of shells in an argon atom is:',choices:['3','2','4','1'],answer:0,explanation:'Argon has three electron shells.'},
    {question:'Which electron arrangement belongs to magnesium?',choices:['2,8,2','2,8,3','2,7,2','1,2,8'],answer:0,explanation:'Magnesium has 12 electrons arranged 2,8,2.'},
    {question:'A neutron’s charge is:',choices:['Positive','Negative','Neutral','Variable'],answer:2,explanation:'Neutrons carry no electrical charge.'},
    {question:'Which particle is not part of the atom’s mass?',choices:['Electron','Proton','Neutron','Nucleus'],answer:0,explanation:'Electrons contribute very little to atomic mass.'}
  ];
  atomic.forEach(function(item){ bank.push({topic:'Atomic structure',outcomes:['SC4-PRT-01'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});});

  var history=[
    {question:'Who first proposed that matter is made of tiny indivisible particles called atomos?',choices:['Bohr','Rutherford','Democritus','Thomson'],answer:2,explanation:'Democritus proposed the atomos idea in ancient Greece.'},
    {question:'The plum pudding model pictured the atom as:',choices:['A nucleus with shells','Electrons in a positive cloud','A hard sphere','Neutrons and protons only'],answer:1,explanation:'Thomson saw electrons embedded in a positive charge cloud.'},
    {question:'Rutherford discovered the nucleus using:',choices:['A cathode ray tube','A gold foil experiment','A microscope','A spectroscope'],answer:1,explanation:'His gold foil experiment revealed a dense central nucleus.'},
    {question:'Who discovered the neutron?',choices:['Bohr','Chadwick','Thomson','Democritus'],answer:1,explanation:'James Chadwick discovered the neutron in 1932.'},
    {question:'Which scientist discovered the electron?',choices:['Thomson','Bohr','Rutherford','Chadwick'],answer:0,explanation:'J.J. Thomson discovered the electron.'},
    {question:'Who proposed that electrons occupy shells?',choices:['Bohr','Dalton','Rutherford','Democritus'],answer:0,explanation:'Niels Bohr proposed that electrons occupy shells.'},
    {question:'Which model came after Thomson’s plum pudding?',choices:['Bohr model','Dalton’s model','Molecule theory','Modern quantum model'],answer:0,explanation:'The Bohr model replaced the plum pudding model.'},
    {question:'Dalton thought atoms were:',choices:['Tiny indivisible spheres','Made of protons','Linked by electrons','All the same'],answer:0,explanation:'Dalton described atoms as tiny indivisible spheres.'},
    {question:'Rutherford’s model showed atoms are mostly:',choices:['Empty space','Solid','Liquid','Gas'],answer:0,explanation:'His experiment showed most of the atom is empty space.'},
    {question:'Which experiment discovered the electron?',choices:['Cathode ray','Gold foil','Photoelectric','Electrolysis'],answer:0,explanation:'The cathode ray experiment led to the discovery of the electron.'},
    {question:'Which scientist used a cathode ray tube?',choices:['Thomson','Bohr','Rutherford','Chadwick'],answer:0,explanation:'Thomson used a cathode ray tube in his electron discovery.'},
    {question:'Which idea came from early Greek philosophers?',choices:['Matter made of atoms','Electrons in shells','Nucleus exists','Quantum jumps'],answer:0,explanation:'Greek philosophers like Democritus proposed that matter was made of atoms.'}
  ];
  history.forEach(function(item){ bank.push({topic:'History',outcomes:['SC4-PRT-01'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});});

  var periodic=[
    {question:'Vertical columns in the periodic table are called:',choices:['Periods','Groups','Rows','Shells'],answer:1,explanation:'Columns are groups.'},
    {question:'Group 18 elements are also called:',choices:['Alkali metals','Halogens','Noble gases','Transition metals'],answer:2,explanation:'Group 18 contains noble gases.'},
    {question:'Which symbol belongs to oxygen?',choices:['O','Ox','Og','Ow'],answer:0,explanation:'O is oxygen’s chemical symbol.'},
    {question:'Why do elements in the same group behave similarly?',choices:['Same valence electrons','Same neutrons','Same mass','Same colour'],answer:0,explanation:'Same valence electron count gives similar chemistry.'},
    {question:'Which element is in group 1?',choices:['Hydrogen','Helium','Carbon','Neon'],answer:0,explanation:'Hydrogen is a group 1 element.'},
    {question:'Which element is a noble gas?',choices:['Argon','Chlorine','Sodium','Iron'],answer:0,explanation:'Argon is a noble gas.'},
    {question:'Which element is in period 2?',choices:['Carbon','Sodium','Calcium','Potassium'],answer:0,explanation:'Carbon is in period 2.'},
    {question:'Which of these is a transition metal?',choices:['Iron','Oxygen','Nitrogen','Neon'],answer:0,explanation:'Iron is a transition metal.'},
    {question:'Which element has atomic number 12?',choices:['Magnesium','Carbon','Calcium','Sodium'],answer:0,explanation:'Magnesium has atomic number 12.'},
    {question:'Which element has symbol Na?',choices:['Sodium','Nitrogen','Neon','Nickel'],answer:0,explanation:'Na is the symbol for sodium.'},
    {question:'Elements in the same period have the same number of:',choices:['Shells','Protons','Electrons','Neutrons'],answer:0,explanation:'Elements in a period share the same number of electron shells.'},
    {question:'Which group contains the halogens?',choices:['17','18','1','2'],answer:0,explanation:'Halogens are found in group 17.'},
    {question:'Which element is in group 17?',choices:['Chlorine','Neon','Argon','Potassium'],answer:0,explanation:'Chlorine is a group 17 halogen.'},
    {question:'Which element is a metalloid?',choices:['Silicon','Oxygen','Iron','Sodium'],answer:0,explanation:'Silicon is a metalloid.'},
    {question:'Which element is not a metal?',choices:['Carbon','Iron','Copper','Gold'],answer:0,explanation:'Carbon is a non-metal.'},
    {question:'Which element is a solid at room temperature?',choices:['Carbon','Neon','Helium','Argon'],answer:0,explanation:'Carbon is solid at room temperature.'},
    {question:'Which element is a diatomic molecule at room temperature?',choices:['Nitrogen','Neon','Sodium','Helium'],answer:0,explanation:'Nitrogen exists as N2 gas at room temperature.'},
    {question:'Which element is a halogen gas?',choices:['Chlorine','Argon','Carbon','Iron'],answer:0,explanation:'Chlorine is a halogen gas.'},
    {question:'Which element has atomic number 8?',choices:['Oxygen','Carbon','Nitrogen','Fluorine'],answer:0,explanation:'Oxygen has atomic number 8.'},
    {question:'Which element is in group 2?',choices:['Calcium','Sodium','Chlorine','Neon'],answer:0,explanation:'Calcium is a group 2 element.'},
    {question:'Which element in period 3 is a noble gas?',choices:['Argon','Neon','Krypton','Helium'],answer:0,explanation:'Argon is the period 3 noble gas.'},
    {question:'Which element symbol is Al?',choices:['Aluminum','Argon','Gold','Silver'],answer:0,explanation:'Al is the symbol for aluminum.'},
    {question:'Which element is in group 16?',choices:['Oxygen','Neon','Sodium','Potassium'],answer:0,explanation:'Oxygen is in group 16.'},
    {question:'Which element is a liquid at room temperature?',choices:['Mercury','Iron','Carbon','Sodium'],answer:0,explanation:'Mercury is a liquid metal at room temperature.'},
    {question:'Which element is in period 4 and group 1?',choices:['Potassium','Calcium','Bromine','Gallium'],answer:0,explanation:'Potassium is in period 4, group 1.'},
    {question:'Which element has chemical symbol K?',choices:['Potassium','Krypton','Calcium','Sulfur'],answer:0,explanation:'K is the symbol for potassium.'},
    {question:'Which element is needed for breathing?',choices:['Oxygen','Neon','Gold','Copper'],answer:0,explanation:'Oxygen is needed for breathing.'},
    {question:'Which element forms a +1 ion easily?',choices:['Sodium','Oxygen','Carbon','Helium'],answer:0,explanation:'Sodium commonly forms +1 ions.'},
    {question:'Which element is a metalloid used in electronics?',choices:['Silicon','Sodium','Argon','Neon'],answer:0,explanation:'Silicon is used in electronic devices.'},
    {question:'Which group contains the alkaline earth metals?',choices:['2','1','17','18'],answer:0,explanation:'Alkaline earth metals are in group 2.'}
  ];
  periodic.forEach(function(item){ bank.push({topic:'Periodic table',outcomes:['SC4-PRT-01'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});});

  var reactivity=[
    {question:'A metal conducts electricity because it has:',choices:['Free electrons','Heavy atoms','No neutrons','Only protons'],answer:0,explanation:'Free electrons move through the metal and carry electric charge.'},
    {question:'Which element is a halogen?',choices:['Sodium','Chlorine','Argon','Iron'],answer:1,explanation:'Chlorine is a halogen in group 17.'},
    {question:'As you go down Group 1, metal reactivity:',choices:['Decreases','Increases','Stays the same','Disappears'],answer:1,explanation:'Alkali metals become more reactive down the group.'},
    {question:'Which metal reacts most explosively with water?',choices:['Potassium','Iron','Copper','Zinc'],answer:0,explanation:'Potassium reacts strongly with water.'},
    {question:'Which gas is produced when acid reacts with magnesium?',choices:['Oxygen','Nitrogen','Hydrogen','Carbon dioxide'],answer:2,explanation:'Hydrogen gas is produced when acids react with metals.'},
    {question:'Which reaction forms rust?',choices:['Iron + oxygen','Sodium + water','Hydrogen + oxygen','Carbon + oxygen'],answer:0,explanation:'Rust forms when iron reacts with oxygen.'},
    {question:'Which substance is most reactive with water?',choices:['Sodium','Gold','Silver','Platinum'],answer:0,explanation:'Sodium reacts readily with water.'},
    {question:'Which is a product of burning hydrogen gas?',choices:['Water','Carbon dioxide','Sodium chloride','Oxygen'],answer:0,explanation:'Burning hydrogen forms water.'},
    {question:'Which type of reaction releases energy in the form of heat?',choices:['Exothermic','Endothermic','Neutral','Static'],answer:0,explanation:'Exothermic reactions release heat.'},
    {question:'Which metal is least reactive in everyday conditions?',choices:['Gold','Sodium','Potassium','Calcium'],answer:0,explanation:'Gold is very stable and not easily reactive.'},
    {question:'Which of these is a chemical reaction?',choices:['Baking cake','Freezing water','Tearing paper','Dissolving sugar'],answer:0,explanation:'Baking cake makes new substances and is chemical.'},
    {question:'Which change produces a new substance?',choices:['Rusting','Cutting','Melting','Boiling'],answer:0,explanation:'Rusting is a chemical change that forms a new substance.'},
    {question:'Which element is most reactive in Group 17?',choices:['Fluorine','Chlorine','Bromine','Iodine'],answer:0,explanation:'Fluorine is the most reactive halogen.'},
    {question:'Which group contains the most reactive metals?',choices:['Alkali metals','Noble gases','Halogens','Transition metals'],answer:0,explanation:'Alkali metals are the most reactive metals.'},
    {question:'Which metal is in Group 1?',choices:['Lithium','Calcium','Neon','Helium'],answer:0,explanation:'Lithium is an alkali metal in group 1.'},
    {question:'Which halogen is a liquid at room temperature?',choices:['Bromine','Chlorine','Fluorine','Iodine'],answer:0,explanation:'Bromine is a liquid halogen at room temperature.'},
    {question:'Which process breaks a compound into simpler substances?',choices:['Decomposition','Synthesis','Combustion','Dissolving'],answer:0,explanation:'Decomposition reactions break compounds apart.'},
    {question:'Which of these is a sign of reactivity?',choices:['Colour change','The material is blue','The object is big','The object is round'],answer:0,explanation:'Colour change can indicate a chemical reaction.'},
    {question:'Which substance is not reactive?',choices:['Neon','Sodium','Potassium','Calcium'],answer:0,explanation:'Neon is a noble gas and is not reactive.'},
    {question:'Which reaction forms a precipitate?',choices:['Mixing two soluble salts','Heating a metal','Melting ice','Distilling water'],answer:0,explanation:'A precipitate forms when two solutions react to make an insoluble solid.'},
    {question:'Which term describes the tendency of an atom to gain electrons?',choices:['Electronegative','Electropositive','Ionizable','Reactivity'],answer:0,explanation:'Electronegative atoms tend to attract electrons.'},
    {question:'Which of these is a strong acid?',choices:['Hydrochloric acid','Water','Sodium chloride','Oxygen'],answer:0,explanation:'Hydrochloric acid is a strong acid.'},
    {question:'Which of these is a base?',choices:['Sodium hydroxide','Sodium chloride','Carbon dioxide','Nitrogen'],answer:0,explanation:'Sodium hydroxide is a base.'},
    {question:'Which reaction happens between an acid and a metal?',choices:['Salt and hydrogen','Water and oxygen','Carbon dioxide and water','Salt and oxygen'],answer:0,explanation:'Acid plus metal produces salt and hydrogen gas.'},
    {question:'Which substance is a noble gas and does not react easily?',choices:['Argon','Hydrogen','Oxygen','Chlorine'],answer:0,explanation:'Argon is chemically inert.'},
    {question:'Which atom has 1 valence electron and reacts easily?',choices:['Sodium','Neon','Argon','Helium'],answer:0,explanation:'Sodium has one valence electron and reacts easily.'},
    {question:'Which of these is a product of neutralisation?',choices:['Salt','Helium','Gold','Neon'],answer:0,explanation:'Neutralisation produces a salt.'},
    {question:'Which process is decomposition?',choices:['AB -> A + B','A + B -> AB','A + O2 -> AO','A -> A + B'],answer:0,explanation:'Decomposition breaks a compound into simpler substances.'},
    {question:'Which group of elements is most likely to form positive ions?',choices:['Metals','Non-metals','Gases','Noble gases'],answer:0,explanation:'Metals often lose electrons to form positive ions.'}
  ];
  reactivity.forEach(function(item){ bank.push({topic:'Reactivity',outcomes:['SC4-PRT-01'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});});

  var change=[
    {question:'Melting ice is a:',choices:['Chemical change','Physical change','Nuclear change','Electrical change'],answer:1,explanation:'Melting changes state but not substance identity.'},
    {question:'A precipitate is:',choices:['A gas released','A solid formed in a solution','A type of energy','A charged particle'],answer:1,explanation:'A precipitate is an insoluble solid formed in a reaction.'},
    {question:'Which is the best sign of a chemical reaction?',choices:['A change of shape','A new substance forms','The object moves','It melts'],answer:1,explanation:'New substance formation is the strongest sign of a chemical reaction.'},
    {question:'Which of these is a chemical change?',choices:['Burning paper','Cutting paper','Melting ice','Dissolving sugar'],answer:0,explanation:'Burning paper forms new substances.'},
    {question:'Which of these is a physical change?',choices:['Boiling water','Burning wood','Rusting iron','Baking bread'],answer:0,explanation:'Boiling water changes state but not chemical identity.'},
    {question:'What is produced when vinegar reacts with baking soda?',choices:['Carbon dioxide','Oxygen','Hydrogen','Nitrogen'],answer:0,explanation:'Carbon dioxide gas forms in that reaction.'},
    {question:'Which change is endothermic?',choices:['Ice melting','Fire burning','Rusting','Exploding'],answer:0,explanation:'Melting ice absorbs heat.'},
    {question:'Which change is exothermic?',choices:['Combustion','Melting','Evaporation','Sublimation'],answer:0,explanation:'Combustion releases heat.'},
    {question:'Which of these shows a chemical reaction?',choices:['Bubbles forming','Water boiling','Sugar dissolving','Rope stretching'],answer:0,explanation:'Bubbles may indicate a chemical reaction producing gas.'},
    {question:'Which change can be reversed easily?',choices:['Freezing water','Burning paper','Rusting iron','Cooking an egg'],answer:0,explanation:'Freezing water is reversible when it melts.'},
    {question:'Which change usually absorbs energy?',choices:['Photosynthesis','Burning','Rusting','Condensation'],answer:0,explanation:'Photosynthesis takes in energy from sunlight.'},
    {question:'Which of these is a reaction product?',choices:['Gas','Shape','Weight','Volume'],answer:0,explanation:'A product is a substance created by the reaction.'},
    {question:'Which type of change forms a new substance?',choices:['Chemical','Physical','Mechanical','Electrical'],answer:0,explanation:'Chemical changes produce new substances.'},
    {question:'Which change is least likely to be reversible?',choices:['Burning','Freezing','Melting','Dissolving'],answer:0,explanation:'Burning usually cannot be reversed.'},
    {question:'Which change involves a colour change and gas formation?',choices:['Chemical reaction','Physical change','Mechanical change','Dissolving'],answer:0,explanation:'These are common signs of a chemical reaction.'},
    {question:'Which process separates a mixture by boiling points?',choices:['Distillation','Filtration','Magnetism','Evaporation'],answer:0,explanation:'Distillation separates substances using boiling points.'},
    {question:'Which is an indicator of a chemical reaction: Temperature change',choices:['Temperature change','Change of size','Change of speed','Change of shape'],answer:0,explanation:'Temperature change is a clue that a chemical reaction may be occurring.'},
    {question:'Which process is not a chemical change?',choices:['Grinding','Burning','Rusting','Reacting'],answer:0,explanation:'Grinding only changes the shape of a material.'},
    {question:'Which occurs when sugar dissolves in water?',choices:['Solution formation','New substance','Precipitate','Gas release'],answer:0,explanation:'Dissolving sugar makes a solution, not a new substance.'}
  ];
  change.forEach(function(item){ bank.push({topic:'Change',outcomes:['SC4-PRT-01'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});});

  var working=[
    {question:'A fair test should:',choices:['Change several variables','Change only one variable','Use a different method each time','Avoid recording data'],answer:1,explanation:'A fair test changes only one variable.'},
    {question:'Tables and graphs are used to:',choices:['Ignore the data','Show patterns in data','Make the test harder','Label equipment'],answer:1,explanation:'They help organise and present data.'},
    {question:'Which tool measures temperature?',choices:['Ruler','Thermometer','Balance','Magnifying glass'],answer:1,explanation:'A thermometer measures temperature.'},
    {question:'Why repeat a measurement?',choices:['To check results','To make them worse','To change variables','To waste time'],answer:0,explanation:'Repeating measurements helps verify data.'},
    {question:'Which is an independent variable?',choices:['Time measured','Size measured','Variable changed deliberately','Outcome observed'],answer:2,explanation:'The independent variable is deliberately changed.'},
    {question:'Which is a dependent variable?',choices:['Result measured','Variable changed','Controlled factor','Equipment used'],answer:0,explanation:'The dependent variable is what you measure.'},
    {question:'Which variable is kept constant?',choices:['Control variable','Independent variable','Dependent variable','Random variable'],answer:0,explanation:'Control variables are kept the same.'},
    {question:'A hypothesis is:',choices:['A testable prediction','A final result','A list of equipment','A graph'],answer:0,explanation:'A hypothesis is a prediction that can be tested.'},
    {question:'Which is part of a valid conclusion?',choices:['Evidence','Opinion','Guess','Story'],answer:0,explanation:'Conclusions should be based on evidence.'},
    {question:'Which graph is best for comparing categories?',choices:['Bar graph','Line graph','Pie chart','Scatterplot'],answer:0,explanation:'Bar graphs compare categories clearly.'},
    {question:'Which graph is best for tracking change over time?',choices:['Bar graph','Line graph','Pie chart','Table'],answer:1,explanation:'Line graphs show trends over time.'},
    {question:'Which tool measures mass?',choices:['Balance','Thermometer','Ruler','Beaker'],answer:0,explanation:'A balance measures mass.'},
    {question:'Which axis normally shows the dependent variable?',choices:['Y-axis','X-axis','Z-axis','None'],answer:0,explanation:'The dependent variable is usually on the y-axis.'},
    {question:'To improve reliability, you should:',choices:['Repeat trials','Change variables','Use fewer measurements','Skip steps'],answer:0,explanation:'Repeating trials improves reliability.'},
    {question:'Reliability means:',choices:['Same results repeated','True value','Fast results','Random outcomes'],answer:0,explanation:'Reliable results are repeatable.'},
    {question:'Accuracy means:',choices:['Close to true value','Repeatable results','Same method each time','High speed'],answer:0,explanation:'Accuracy is how close measurements are to the true value.'},
    {question:'Which is a control variable?',choices:['Amount of water','Type of seed','Experiment question','Data table'],answer:0,explanation:'Control variables are kept constant, such as water amount.'},
    {question:'Why use a control group?',choices:['Compare results','Make experiment harder','Use different chemicals','Increase error'],answer:0,explanation:'Control groups provide a baseline for comparison.'},
    {question:'What does a fair test need?',choices:['Only one variable changes','All variables change','No measurements','No repeats'],answer:0,explanation:'Only one variable should change in a fair test.'},
    {question:'Which is a qualitative observation?',choices:['Colour','Mass','Length','Temperature'],answer:0,explanation:'Colour is described without numbers.'},
    {question:'Which is a quantitative observation?',choices:['Number of beats','Colour','Texture','Smell'],answer:0,explanation:'Quantitative observations use numbers.'},
    {question:'Which is a good conclusion?',choices:['Uses evidence','Gives opinions only','Ignores data','Is very short'],answer:0,explanation:'Good conclusions are evidence-based.'},
    {question:'Which measurement unit is used for length?',choices:['Centimetres','Grams','Seconds','Degrees'],answer:0,explanation:'Length is measured in centimetres.'},
    {question:'Which measurement unit is used for mass?',choices:['Grams','Metres','Seconds','Litres'],answer:0,explanation:'Mass is measured in grams.'},
    {question:'Which measurement unit is used for time?',choices:['Seconds','Grams','Metres','Degrees'],answer:0,explanation:'Time is measured in seconds.'},
    {question:'Which tool measures volume of a liquid?',choices:['Graduated cylinder','Balance','Thermometer','Ruler'],answer:0,explanation:'A graduated cylinder measures liquid volume.'},
    {question:'What is the purpose of a table?',choices:['Organise data','Heat a sample','Change variables','Measure mass'],answer:0,explanation:'Tables organise experimental data.'},
    {question:'What does a bar graph show?',choices:['Differences between categories','Exact numbers only','Chemical formula','Physical states'],answer:0,explanation:'Bar graphs compare categories visually.'},
    {question:'What does a line graph show?',choices:['Trends over time','Colour of objects','Type of material','Chemical composition'],answer:0,explanation:'Line graphs show patterns and trends.'},
    {question:'If plants receive more light, they will grow taller is a:',choices:['Hypothesis','Conclusion','Control','Result'],answer:0,explanation:'That statement is a hypothesis.'},
    {question:'Which part of a report explains methods?',choices:['Procedure','Hypothesis','Conclusion','Results'],answer:0,explanation:'The procedure describes how the experiment was done.'},
    {question:'Which is the first step in the scientific method?',choices:['Ask a question','Draw a conclusion','Collect data','Make a table'],answer:0,explanation:'Asking a question starts the scientific process.'},
    {question:'Which is the last step in the scientific method?',choices:['Draw conclusions','Ask a question','Plan experiment','Repeat measurements'],answer:0,explanation:'Drawing conclusions comes after analysing results.'},
    {question:'When data points are close together, precision is:',choices:['High','Low','None','Random'],answer:0,explanation:'Close data points show high precision.'},
    {question:'When an experiment is repeated by someone else, this checks:',choices:['Reproducibility','Size','Colour','Shape'],answer:0,explanation:'Reproducibility means others can repeat the experiment and get similar results.'},
    {question:'Which is a fair test?',choices:['Keep only one variable changing','Change all the variables','Avoid recording results','Use different equipment each time'],answer:0,explanation:'A fair test changes only one variable and keeps all others constant.'},
    {question:'Which item is a hypothesis?',choices:['More salt will make the circuit brighter','The circuit is complete','The battery is hot','The wire is red'],answer:0,explanation:'A hypothesis is a testable prediction about what may happen.'},
    {question:'Which strategy reduces random error?',choices:['Average many trials','Use one measurement','Ignore outliers','Change variables'],answer:0,explanation:'Averaging several trials reduces random error.'},
    {question:'Which graph has sectors that show parts of a whole?',choices:['Pie chart','Line graph','Bar graph','Histogram'],answer:0,explanation:'Pie charts illustrate parts of a whole.'},
    {question:'Which is a dependent variable?',choices:['The result that is measured','The factor changed deliberately','The condition kept constant','The question asked'],answer:0,explanation:'The dependent variable is the result you measure.'},
    {question:'Which is an independent variable?',choices:['The factor changed deliberately','The result that is measured','The condition kept constant','The question asked'],answer:0,explanation:'The independent variable is the one changed deliberately.'},
    {question:'Which instrument measures temperature change?',choices:['Thermometer','Balance','Ruler','Stopwatch'],answer:0,explanation:'A thermometer measures temperature change.'},
    {question:'Which unit measures liquid volume?',choices:['mL','kg','m','°C'],answer:0,explanation:'Liquid volume is measured in millilitres.'},
    {question:'Which tool is best for measuring pencil length?',choices:['Ruler','Thermometer','Balance','Stopwatch'],answer:0,explanation:'A ruler measures length.'},
    {question:'What does repeatability mean?',choices:['Same person gets same result','Different people get same result','Results change randomly','Experiment is short'],answer:0,explanation:'Repeatability means the same person can get the same result again.'},
    {question:'In a valid experiment, data is:',choices:['Measured and recorded','Imagined','Ignored','Estimated randomly'],answer:0,explanation:'Valid experiments measure and record data carefully.'},
    {question:'Which of these is a variable?',choices:['Temperature','Colour','Shape','All of these'],answer:3,explanation:'Variables are any factors that can change.'},
    {question:'Which statement describes a conclusion?',choices:['Summarises findings','Lists equipment','Describes method','Shows raw data'],answer:0,explanation:'A conclusion summarises what was learned.'},
    {question:'Which tool measures the time of an event?',choices:['Stopwatch','Balance','Thermometer','Protractor'],answer:0,explanation:'A stopwatch measures elapsed time.'},
    {question:'Why is it important to keep a variable constant?',choices:['So the test is fair','So results are random','So data are ignored','So the experiment is hard'],answer:0,explanation:'Keeping variables constant helps ensure a fair comparison.'}
  ];
  working.forEach(function(item){ bank.push({topic:'Working science',outcomes:['SC5-WS-01','SC4-WS-02','SC4-WS-04','SC4-WS-05','SC4-WS-06'],type:'mcq',question:item.question,choices:item.choices,answer:item.answer,explanation:item.explanation});});

  return bank;
}

function shuffle(array){
  for(var i=array.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var temp=array[i];array[i]=array[j];array[j]=temp;
  }
  return array;
}

function startQuiz(){
  currentQuestionIndex = Math.floor(Math.random() * questionBank.length);
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
  var nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * questionBank.length);
  } while(questionBank.length > 1 && nextIndex === currentQuestionIndex);
  questionHistory = questionHistory.slice(0, historyPosition + 1);
  questionHistory.push(nextIndex);
  historyPosition = questionHistory.length - 1;
  currentQuestionIndex = nextIndex;
  questionCount = historyPosition + 1;
  renderCurrentQuestion();
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
    var wasCorrect = item.type==='mcq' ? item._selected===item.answer : true;
    var message = item.type==='mcq' ? (wasCorrect ? 'Correct! ' : 'Not quite. ') : '';
    feedbackHtml = '<div class="feedback '+(wasCorrect?'positive':'negative')+'">'+message+item.explanation+'</div>';
  }

  var choicesHtml='';
  if(item.type==='mcq'){
    choicesHtml='<div class="options">'+item.choices.map(function(choice,index){
      var classes='option-button'+((answered&&item._selected===index)?(index===item.answer?' correct':' wrong'):'')+((answered)?' disabled':'');
      return '<button class="'+classes+'" '+((answered)?'disabled':'onclick="submitAnswer('+index+')"')+'><span class="option-letter">'+String.fromCharCode(65+index)+'</span>'+choice+'</button>';
    }).join('')+'</div>';
  } else {
    choicesHtml='<p class="question-detail">Write your answer, then press Submit.</p><textarea id="shortReply" class="short-answer" rows="5" placeholder="Your answer"></textarea><div class="controls"><button class="btn primary" onclick="submitShort()">Submit</button></div>';
    if(answered){
      choicesHtml += '<div class="feedback positive">Nice work — compare your answer with the model response below.</div>' +
        '<div class="feedback" style="margin-top:12px;border-color:var(--line);background:#fff;">'+item.explanation+'</div>';
    }
  }

  var navButtons = '<button class="btn secondary" onclick="prevQuestion()"'+(historyPosition<=0?' disabled':'')+'>Back</button>' +
                   '<button class="btn secondary" onclick="forwardQuestion()">'+(historyPosition < questionHistory.length - 1 ? 'Forward' : 'Next')+'</button>';

  card.innerHTML =
    '<div class="question-meta">' +
      '<span>'+item.topic+'</span>' +
      '<span>Question '+questionCount+'</span>' +
    '</div>' +
    '<div class="question-text">'+item.question+'</div>' +
    choicesHtml +
    feedbackHtml +
    '<div class="controls">'+navButtons+'</div>';
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

function submitShort(){
  if(answeredLast) return;
  var text=$('shortReply').value.trim();
  if(!text){alert('Please type an answer before submitting.');$('shortReply').focus();return;}
  var item=currentQuestion();
  item._selected=text;
  answeredLast=true;
  totals.answered++;
  renderCurrentQuestion();
  updateProgress();
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
}

window.addEventListener('DOMContentLoaded', function(){
  startQuiz();
  enhancePeriodicTable();
});
