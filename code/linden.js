//====================================================================
// linden.js
//
// Generate Lindenmayer String expansions
// Set custom rules
// Set axiom
// Set number of generations to generate
//
// written by Timo Hoogland, www.timohoogland.com
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
// ignore whitespaces
var no_ws = false;
// last result
var result;

function init(){
	rules = new Dict(jsarguments[1]+"_rules");
	axiom = 0;
	gens = 1;

	add(0, 0, 1);
	add(1, 0);
}

function loadbang(){
	init();
}

function linden(g, a){
	axiom = String(a);
	generations = g;

	result = axiom;
	if (generations > 0){
		result = spawn(axiom);
	}
	outlet(0, result);
}

function spawn(a){
	// empty array or string
	var gen;

	if (no_ws){
		gen = "";
		// get rule from dictionary
		for (var i=0; i<a.length; i++){
			// post("spawn from:", a.charAt(i), "\n");
			if (rules.contains(a.charAt(i))){
				var r = rules.get(a.charAt(i));
				// when rule is array join to string
				if (typeof(r) === "object"){
					r = r.join("");
				}
				// post("spawned:", r, "\n");
				gen += r;
				// post("result:", gen, "\n");
			} else {
				// if not in rules, just concatenate string
				gen += a.charAt(i);
			}
		}
	} else {
		gen = [];
		// check if array, else make array
		a = (!Array.isArray(a))? [a] : a;
		// get rule from dictionary
		for (var i=0; i<a.length; i++){
			// post("spawn from:", a[i], "\n");
			// when part of rules
			if (rules.contains(a[i])){
				var r = rules.get(a[i]);
				// post("spawned:", r, "\n");
				// concat the returned rule
				gen = gen.concat(r);
				// post("result:", gen, "\n");
			} else {
				// if not in rules, just concatenate string
				gen = gen.concat(a[i]);
			}
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
}

function setdict(n){
	rules = new Dict(n);
}

function getdict(){
	outlet(1, "dictionary", rules.name);
}

function ignore_ws(v){
	no_ws = (v != 0) ? true : false;
}
