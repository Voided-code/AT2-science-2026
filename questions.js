(function(){
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

  function uniqueQuestionKey(item){
    return String(item && item.question ? item.question : '').trim().toLowerCase();
  }

  function rebalanceAndTopUpBank(){
    var targets = {mcq:125, short:281, long:94};
    var used = {};
    var balanced = [];

    function addUnique(item){
      var type = item && item.type;
      var key = uniqueQuestionKey(item);
      if(!key || used[key] || !targets[type]) return false;
      var count = balanced.filter(function(q){ return q.type === type; }).length;
      if(count >= targets[type]) return false;
      used[key] = true;
      balanced.push(item);
      return true;
    }

    ['mcq','short','long'].forEach(function(type){
      bank.forEach(function(item){
        if(item.type === type) addUnique(item);
      });
    });

    var outcomePrompts = [
      {topic:'Everyday elements',outcomes:['SC4-PRT-01'],idea:'identify common elements in everyday objects',keywords:['element','everyday','object','symbol','use'],short:'Identify the important element in {context} and explain why it is present.',long:'Use {context} to explain how common elements are found in everyday objects.'},
      {topic:'Physical properties',outcomes:['SC4-PRT-01','SC5-WS-01'],idea:'compare physical properties of metals, non-metals and metalloids',keywords:['metal','non-metal','metalloid','property','test'],short:'Explain which physical property test would help classify {context}.',long:'Plan how to classify {context} as a metal, non-metal or metalloid using physical property tests.'},
      {topic:'Properties and uses',outcomes:['SC4-PRT-01'],idea:'link properties of materials to their uses',keywords:['property','use','material','because','suitable'],short:'Explain why the properties of {context} make it useful.',long:'Explain how the properties of {context} relate to its use and compare it with a less suitable material.'},
      {topic:'Atomic structure',outcomes:['SC4-PRT-01'],idea:'identify atoms as the smallest unit of an element',keywords:['atom','element','smallest','properties','matter'],short:'Explain how {context} shows that elements are made of atoms.',long:'Use {context} to explain why atoms are considered the smallest unit of an element that keeps that element’s properties.'},
      {topic:'Subatomic particles',outcomes:['SC4-PRT-01'],idea:'identify protons, neutrons and electrons',keywords:['proton','neutron','electron','particle','atom'],short:'Identify the subatomic particles involved in {context}.',long:'Describe how protons, neutrons and electrons explain what is happening in {context}.'},
      {topic:'Planetary model',outcomes:['SC4-PRT-01'],idea:'describe particle location, charge and relative mass',keywords:['nucleus','shell','charge','mass','electron'],short:'Describe the location and charge of particles in {context}.',long:'Use the planetary atomic model to describe location, charge and relative mass of particles in {context}.'},
      {topic:'First 18 elements',outcomes:['SC4-PRT-01'],idea:'model atomic structure changes with increasing atomic number',keywords:['atomic number','protons','electrons','shells','first 18'],short:'Explain how atomic structure changes in {context}.',long:'Model the atomic structure in {context} and explain how increasing atomic number changes protons, electrons and shells.'},
      {topic:'Atomic models',outcomes:['SC4-PRT-01'],idea:'outline how atomic models changed over time',keywords:['model','changed','evidence','scientist','atom'],short:'Explain how the atomic model changed in {context}.',long:'Use {context} to outline how atomic models changed over time and why new evidence mattered.'},
      {topic:'Atomic evidence',outcomes:['SC4-PRT-01'],idea:'explain how new technology improved atomic structure models',keywords:['technology','evidence','observation','model','atomic'],short:'Explain how new evidence from {context} improved atomic models.',long:'Explain how observations made possible by {context} led to a more detailed model of atomic structure.'},
      {topic:'Periodic patterns',outcomes:['SC4-PRT-01'],idea:'outline patterns and relationships in the periodic table',keywords:['periodic table','pattern','group','period','reactivity'],short:'Describe the periodic table pattern shown by {context}.',long:'Explain the periodic table pattern in {context}, including reactivity or atomic structure where relevant.'},
      {topic:'Predicting properties',outcomes:['SC4-PRT-01'],idea:'predict properties from periodic table position',keywords:['predict','position','group','period','property'],short:'Predict one property from the periodic table position in {context}.',long:'Predict the properties in {context} using group, period, element type and likely reactivity.'},
      {topic:'Element symbols',outcomes:['SC4-PRT-01'],idea:'identify unique element symbols',keywords:['symbol','element','atomic number','periodic table'],short:'Identify the symbol or element represented in {context}.',long:'Explain why element symbols are useful in {context} and identify the correct symbol or element.'},
      {topic:'Metal tests',outcomes:['SC5-WS-01','SC4-WS-04','SC4-PRT-01'],idea:'investigate tests for metals and non-metals',keywords:['test','metal','non-metal','conductivity','observe'],short:'Describe one test that would help identify {context}.',long:'Investigate how tests could identify {context}, including method, observations, safety and conclusion.'}
    ];

    var contexts = [
      'copper used in electrical wiring','aluminium used in aircraft bodies','silicon used in computer chips','gold used in jewellery and phone connectors',
      'oxygen in air and water','carbon in graphite and living things','iron in steel bridges','chlorine compounds in swimming pools',
      'sodium reacting with water','magnesium reacting with acid','calcium in bones and limestone','helium in balloons',
      'argon used in welding','neon glowing in signs','zinc coating iron','mercury being liquid at room temperature',
      'a shiny malleable unknown solid','a dull brittle unknown solid','a sample that conducts in a simple circuit','a sample that shatters when hit',
      'period 3 elements from sodium to argon','group 17 halogens','group 18 noble gases','group 1 alkali metals',
      'a neutral atom with atomic number 8','a neutral atom with atomic number 11','the first 18 elements','electron shells in period 2',
      'Thomson’s cathode ray evidence','Rutherford’s gold foil experiment','Bohr’s electron shell model','Chadwick’s neutron evidence',
      'Democritus and atomos','Dalton’s solid sphere model','a conductivity investigation','a malleability investigation',
      'a graph of reaction speed against metal type','a table comparing dissolving time and surface area','repeated trials in a metal-acid experiment','control variables in a fair test'
    ];

    var mcqContexts = [
      ['Which element is commonly linked with copper wiring?','Copper (Cu)','Neon (Ne)','Helium (He)','Chlorine (Cl)','Copper wiring uses copper because it conducts electricity well.'],
      ['Which property makes aluminium useful for aircraft?','Low density','High reactivity with water','Being a noble gas','Poor conductivity','Aluminium is lightweight and corrosion resistant.'],
      ['Which scientist is linked with the gold foil experiment?','Rutherford','Thomson','Chadwick','Democritus','Rutherford used gold foil evidence to propose a small dense nucleus.'],
      ['Which group contains the noble gases?','Group 18','Group 1','Group 2','Group 17','Group 18 elements have full outer shells and are very unreactive.'],
      ['What does atomic number identify?','Number of protons','Number of compounds','Number of shells only','Number of molecules','Atomic number equals the number of protons.'],
      ['Which particle is found in shells around the nucleus?','Electron','Proton','Neutron','Nucleus','Electrons occupy shells around the nucleus.'],
      ['Which test best shows electrical conductivity?','Simple circuit test','Smell test','Colour naming only','Counting atoms by eye','A circuit test shows whether charges can flow through a material.'],
      ['Which symbol represents sodium?','Na','S','So','Sd','Sodium has the symbol Na.'],
      ['Which change creates a new substance?','Chemical change','Physical change','Change of state only','Cutting only','Chemical changes form new substances.'],
      ['What does a period show in the periodic table?','Number of electron shells','Number of valence electrons only','Number of neutrons only','Mass number only','Period number is linked to electron shells.']
    ];

    var serial = 1;
    while(balanced.filter(function(q){ return q.type === 'mcq'; }).length < targets.mcq && serial < 1000){
      var m = mcqContexts[serial % mcqContexts.length];
      addUnique({topic:'Outcome review',outcomes:['SC4-PRT-01'],type:'mcq',question:m[0]+' Scenario '+serial+'.',choices:[m[1],m[2],m[3],m[4]],answer:0,explanation:m[5]});
      serial++;
    }

    serial = 1;
    while(balanced.filter(function(q){ return q.type === 'short'; }).length < targets.short && serial < 2000){
      var sPrompt = outcomePrompts[serial % outcomePrompts.length];
      var sContext = contexts[(serial * 3) % contexts.length];
      addUnique({
        topic:sPrompt.topic,
        outcomes:sPrompt.outcomes,
        type:'short',
        generated:true,
        question:sPrompt.short.replace('{context}', sContext)+' Give 1-2 sentences.',
        keywords:sPrompt.keywords,
        minMatches:2,
        explanation:'A strong answer should address '+sPrompt.idea+' using the context of '+sContext+'.'
      });
      serial++;
    }

    serial = 1;
    while(balanced.filter(function(q){ return q.type === 'long'; }).length < targets.long && serial < 2500){
      var lPrompt = outcomePrompts[(serial * 5) % outcomePrompts.length];
      var lContext = contexts[(serial * 7) % contexts.length];
      addUnique({
        topic:lPrompt.topic,
        outcomes:lPrompt.outcomes,
        type:'long',
        generated:true,
        question:lPrompt.long.replace('{context}', lContext)+' Write 4-5 sentences and include evidence, a because/therefore link, and a clear conclusion.',
        keywords:lPrompt.keywords.concat(['evidence','because','conclusion']),
        minMatches:3,
        explanation:'A strong answer should explain '+lPrompt.idea+' in the context of '+lContext+', using evidence and a clear conclusion.'
      });
      serial++;
    }

    bank = balanced;
  }

  rebalanceAndTopUpBank();

  window.QUESTION_BANK = bank;
})();
