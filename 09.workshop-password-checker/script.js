/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 * Börja med att lösa den i omvänd ordning, dvs få först kollen att lösenordet
 * har minst 16 tecken att fungera.
 *
 * Utöka därefter koden till att kolla om lösenordet har minst 12 tecken OCH
 * minst 1 bindestreck.
 *
 * Osv.
 *
 * Googla för att hitta lämpliga metoder för att lösa uppgiften.
 *
 * Du ska alltså precis som i första dagens workshop ta bort kommentarerna
 * en efter en och testa att alla olika kombinationer av lösenord fungerar
 * och ger rätt resultat.
 */

let password;
// password = "password"; // inte giltigt
// password = "pa$sword"; // giltigt
// password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt
password = "p@$swd"; //giltigt

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

console.log(`🕵🏻 Checking password '${password}'`);

// Skriv din kod här


if(password.length >= 16) {
    console.log('at least 16 characters');
} else if(password.length >= 12 && password.includes('-')){
    console.log('at least 12 characters AND "-"');
} else if(password.length >= 8 && specialChars.some(item => password.includes(item))) {
    console.log('at least 8 characters AND 1 special character');
} else if(password.length >= 6 && specialChars.filter(item => password.includes(item)).length >= 2) {
    console.log('at least 6 characters AND 2 special character');
} else {
    console.log('Password is not good enough');
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                      JOHANS LÖSNING

// Status-flagga som indikerar om ett specialtecken hittades eller ej
let specialCharCount = 0;

// För varje tecken i password, kolla det är ett specialtecken
for (let i = 0; i < password.length; i++) {
	const char = password[i];
	console.log(`At char ${i}, is char "${char}" a special char?`, specialChars.includes(char));

	if (specialChars.includes(char)) {
		specialCharCount++;
		if (specialCharCount === 2) {  // If we found two special chars, break free from the loop
			break;  // i want to
		}
	}
}
console.log("Loop is done, special chars found:", specialCharCount);

// Har lösenordet minst 6 tecken OCH innehåller minst två specialtecken?
if (password.length >= 6 && specialCharCount >= 2) {
	// Ja!
	console.log("- ✅ Great! Such password, much secure, *VERY* hard to crack!");

// Har lösenordet minst 8 tecken OCH innehåller minst ett specialtecken?
} else if (password.length >= 8 && specialCharCount >= 1) {
	// Ja!
	console.log("- ✅ Great! Such password, much secure, very hard to crack!");

// Har lösenordet minst 12 tecken OCH innehåller minst ett bindestreck?
} else if (password.length >= 12 && password.includes("-")) {
	// Ja!
	console.log("- ✅ Great! That's a pretty good password!");

// Har lösenordet minst 16 tecken?
} else if (password.length >= 16) {
	// Ja!
	console.log("- ✅ Great! That's a long password!");

} else {
	// Nej!
	console.log("- 🚨 Insecure password, my grandma can crack it!");
}