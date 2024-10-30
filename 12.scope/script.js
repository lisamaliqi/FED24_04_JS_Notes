"use strict";

// console.log("points before it's even created:", points);//error pga points är ej definerat


let points = 50;	// globally scoped variable
console.log("points before if-statement:", points);//-->points before if-statement: 50
//ej error pga gett points ett värde 

if (true) {
	let points = 40;//byter värdet i scopen men inte globallt

	console.log("points inside first if-statement:", points);//-->points inside first if-statement: 40

	if (true) {
		points = 1337;
		console.log("points inside second if-statement:", points);//-->points inside second if-statement: 1337
        //ändrar värdet points för att den deklareras inte på nytt med let.
        //ändrar ej värdet över pga denna deklarerades efteråt.
	}

	console.log("points inside first if-statement, but after second if-statement:", points);//-->points inside first if-statement, but after second if-statement: 1337
    //blir 1337 pga i tidigare if så byter points värde i den första if statementen
}

console.log("points after if-statements:", points);//-->points after if-statement: 50
//har fortfarande samma värde som i början, alltså 50


console.log('-----------------------------------------------------');


console.log("points before it's even created:", point);//-->undefined, pga vi har ej gett point ett värde

var point = 50;	// globally scoped variable
console.log("points before if-statement:", point);//-->50

if (true) {
	var point = 40;

	console.log("points inside first if-statement:", point);//-->40

	if (true) {
		var point = 1337;
		console.log("points inside second if-statement:", point);//-->1337
	}

	console.log("points inside first if-statement, but after second if-statement:", point);//-->1337
}

console.log("points after if-statements:", point);//-->1337
//man ska i princip inte använda var pga det inte fungerar med global scopes osv. 

console.log('-----------------------------------------------------');


// KIDS, DON'T TRY THIS AT HOME

var i = 42;
var i = 43;

for (var i = 0; i < 5; i++) {
	console.log("lol", i);

	for (let i = 0; i < 3; i++) {
		console.log("rotflol", i);
	}
}

console.log("i should be 42:", i);
 