/**
 * Workshop: Password Checker with functions
 *
 * Skriv om lösenordskollen till att testa samtliga lösenord i listan
 * `passwords`.
 *
 * Ni ska även ha en funktion som räknar antalet specialtecken och returnerar
 * hur många som hittades.
 *
 * Varje lösenord ska console.log'as tillsammans med dess resultat.
 *
 * STEG 1
 * Testa samtliga lösenord i listan. Koden ska vara oberoende av hur många
 * lösenord som finns i listan.
 *
 * STEG 2
 * Skriv en funktion som räknar antalet unika specialtecken och returnerar
 * hur många specialtecken som hittades. Anropa den här funktionen för
 * varje lösenord.
 *
 * KRAVSPEC FRÅN TIDIGARE:
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 */

const passwords = [
	"password",								// 🚨
	"p@*swd",								// 🔐
	"pa$sword",								// 🔐
	"p@ssw%rd",								// 🔐
	"pa$$wd",								// 🚨
	"secretpassword",						// 🚨
	"secret-password",						// 🔐
	"such-password-much-secure-very-long",	// 🔐
	"$$$",									// 🚨
];

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];



//steg 2

let specialCharCount = 0;


const numbSpecialChar = () => {
    for (let i = 0; i < passwords.length; i++) {
        const char = passwords[i];
        console.log(`At char ${i}, is char "${char}" a special char?`, specialChars.includes(char));
    }
}

/* 
//steg 1
for(let i = 0; i < passwords.length; i++) {
    console.log(`Vid index ${i} är lösenordet "${passwords[i]}"`);


    if (passwords[i].length >= 8 && specialCharCount >= 1) {
	    console.log("- ✅ Great! includes more than 8 digits!");
    } else if (passwords[i].length >= 12 && passwords[i].includes("-")) {
	    console.log("- ✅ Great! includes 12+ digits AND '-'!");
    } else if (passwords[i].length >= 16) {
	    console.log("- ✅ Great! includes 16+ digits!");
    } else {
	    console.log("- 🚨 Insecure password, my grandma can crack it!");
    }
    
}
 */
//jag klara ej inlämningen 


/////////////////////////////////////////////////////////////////////////////////////////////////////

//johans lösning:



const countFunction = function(passwd) {
     //räknare som indikerar hur många specialtecken som hittats 
     let count = 0;       


     for (let i = 0; i < passwd.length; i++) {
         const char = passwd[i];
         // console.log(`At char ${i}, is char "${char}" a special char?`, specialChars.includes(char));
     
         if (specialChars.includes(char)) {
             count++;
             if (count === 2) {  // If we found two special chars, break free from the loop
                 break;  // i want to
             }
         }
     }
     //behöver return för den gör inget annat än att räkna, så man måste lämna ifrån sig resultatet
     return count;
}

const checkPassword = (password) => {
    let specialCharCount = countFunction(password);

    // Har lösenordet minst 6 tecken OCH innehåller minst två specialtecken?
    if (password.length >= 6 && specialCharCount >= 2) {
        // Ja!
        console.log("- ✅ Great! 6 digits and 2 special numbers");
    
    // Har lösenordet minst 8 tecken OCH innehåller minst ett specialtecken?
    } else if (password.length >= 8 && specialCharCount >= 1) {
        // Ja!
        console.log("- ✅ Great! 8 digits and 1 special number");
    
    // Har lösenordet minst 12 tecken OCH innehåller minst ett bindestreck?
    } else if (password.length >= 12 && password.includes("-")) {
        // Ja!
        console.log("- ✅ Great! 12 digits and includes '-'");
    
    // Har lösenordet minst 16 tecken?
    } else if (password.length >= 16) {
        // Ja!
        console.log("- ✅ Great! 16 digits");
    
    } else {
        // Nej!
        console.log("- 🚨 Insecure password");
    }


}



//en for loop som ska gå igenom alla lösenord i passwords, en i taget
for (let i = 0; i < passwords.length; i++){
    console.log(i, passwords[i]);//loggar ut vilken index vi räknar på samt namnet på den
    
    //hämtar index "i" från arrayen "passwords"
    //spara detta i den lokala variabeln "password"
    const password = passwords[i];


    
    //anropar funktionen som anropar  koden jag klippte ut här under:
    // let specialCharCount = countFunction(password);

    // console.log("Loop is done, special chars found:", specialCharCount);

checkPassword(password);



}






