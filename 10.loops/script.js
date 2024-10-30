//For-loops

let sum = 0;
let points = [1, 5, -50, 10, 20, 8, 3, -5];

for (let i = 0; i < points.length; i++) {
	console.log(`At index ${i}, number is:`, points[i]); //vid index x är poängen (numret) y (kolla i arrayn 'points')

	// Ignore negativity and continue the loop at the next iteration
    //om points i arrayn är 0 eller mindre så ska det inte räknas med, utan då hoppar vi bara till starten av loopen
	if (points[i] <= 0) {
		console.log("Got some negativity, ain't nobody got time for that");
		continue;
	}

	// Add number to sum 
    //sum = 0, lägg till points i sum
	sum += points[i];
	console.log("The new sum is:", sum);

	// If sum is 30 or higher, we've passed the test
    //när den totala summan på sum är över 30 så ska loopen stoppas, trotts att det finns mer index i arrayn
	if (sum >= 30) {
		console.log("🥳 You've passed the test! Yayyyyy! Stopping further counting ☺️");
		break;
	}
}
console.log("Loop is done, sum is:", sum);


let i;
for (
	let i = 0;  // startvärde, i är lika med 0
	i < 5;  // ska vi fortsätta loopa? om i är mindre än 5, fortsätt
	i++     // gör detta efter varje iteration, lägg till +1 i 'i' efter varje loop
) {
	// do stuff
    //gör detta om i är mindre än 5
	console.log(i, "🐑");
}
console.log("Sheeeep:", i);  // undefined, because for-loop only changes it's local variable `i`



// while loop

i = 0;
while (i < 5) {//om i är mindre än 5
	// do this
	console.log("in while-loop, i is:", i);

	if (i >= 3) {
		break;//om i blir 3 eller större än 3, avsluta loopen
	}

	// increase i by 1
	i++;
}
console.log("Finished looping, i is:", i);



// do while loop
//om man vill låta en loop gå igenom iaf en gång trotts att conditions kanske inte är true
i = 0;
do {
	// do stuff
	console.log("in do while-loop, i is:", i);

	// increase i by 1
	i++;
} while (i < 0);
console.log("Finished looping, i is:", i);



// switch statements
//dåligt exempel, med if statements:
/*
let grade = "MVP";

if (grade === "VG") {
	console.log("🥳 Nice!! You got a VG");
} else if (grade === "G") {
	console.log("🆗 Excellent! You got a G");
} else if (grade === "IG") {
	console.log("😔 Sorry, you got an IG");
} else {
	console.log("😡 Why you try 🐅 cheating?!");
}
 */

//bra exempel, med switch statement:
//switct statements har strict conditions (===), vilket betyder att hade jag skrivit let grade = "Vg"; så hade jag fått upp default som svar
let grade = "VG";
switch (grade) {
	case "VG":
		console.log("🥳 Nice!! You got a VG");
		break;
	case "G":
		console.log("🆗 Excellent! You got a G");
		break;
	case "IG":
		console.log("😔 Sorry, you got an IG");
		break;
	default:
		console.log("😡 Why you try 🐅 cheating?!");
		break;
}

console.log("I'm so over loops 🥴");