"use strict";
//för att ha strict mode i hela dokumentet måste du starta med detta i första raden på dokumentet.


/* 
msg = "Hello from the otter side";
console.log(msg);//blir ett error pga "msg" inte är definerat med let elr const innan
 */

let title = "My first encounter with strict mode";

// titel = "My second encounter with strict mode";  // fungerar ej pga felstavat i titel 

console.log(title);

// NaN = "LOL";  // nope!

let num = 5;


if (num === "5") {
	console.log("It's a five(-ish)");//om det var ==
} else {
	console.log("That's not a five!");//om det var ===
}


switch (num) {
	case "5"://om det visas 5 i en string är detta rätt
		console.log("Five as a string");
		break;

	default://annars blir det default
		console.log("Not a string 5");
		break;
}//anledningen till default är pga switch statement är strict, alltså ===
 