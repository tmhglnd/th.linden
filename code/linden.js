//====================================================================
// linden.js
//
// Generate Lindenmayer String expansions
// Set custom rules
// Set axiom
// Set number of generations to generate
//====================================================================

autowatch = 1;
inlets = 1;
outlets = 2;

// empty axiom string
var axiom = "";
// number of generations
var generations = 0;
// dict with production rules
var rules;

function init(){
	rules = new Dict(jsarguments[1]+"_rules");
	axiom = "a";
	gens = 1;

	add(0, 0, 1);
	add(1, 0);
}
init();

function linden(g, a){
	axiom = String(a);
	generations = g;

	var result = axiom;
	if (generations > 0){
		result = spawn(axiom);
	}
	outlet(0, result);
}

function spawn(a){
	// empty array
	var gen = [];
	// get rule from dictionary
	for (var i = 0; i < a.length; i++){
		// when part of rules
		if (rules.contains(a[i])){
			var r = rules.get(a[i]);
			// concat the returned rule
			gen = gen.concat(r);
		} else {
			// if not in rules, just concatenate string
			gen = gen.concat(a[i]);
		}
	}
	// remove 1 generation
	generations--;
	if (generations > 0){
		gen = spawn(gen);
	}
	return gen;
}
spawn.local = 1;

function add(){
	var a = arrayfromargs(arguments);
	rules.set(a[0], a.slice(1, a.length));
	// post("add rule:", a, "\n");
}

function remove(r){
	r = String(r);
	if (rules.contains(r)){
		rules.remove(String(r));
	} else {
		error("can't remove rule " + r + ", it does not exist \n");
	}
}

function clear(){
	rules.clear();
	// post("cleared rules \n");
}

function setdict(n){
	rules = new Dict(n);
}

function getdict(){
	outlet(1, "dictionary", rules.name);
}
