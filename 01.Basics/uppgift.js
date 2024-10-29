/**
 * Mini-workshop
 */


let email;

//email = "jn@thehiveresistance.com"; // ska returnera 20 + 'com'
//email = "some@dude.org"; // ska returnera 9 + 'org'
//email = "bgates@microsoft.com"; // ska returnera 16 + 'com'
email = "some.brittish.dude@bt.co.uk"; // ska returnera 24 + 'uk'


//Min kod
let lastDot = email.lastIndexOf('.');//för att få ut "."
let topDomain = email.slice(lastDot + 1);//för att få ut top domain 
//slice behöver inte ha ett slutvärde


/*FÖRKLARING AV KODEN
lasdDot = jag tar ut last index of karaktären "." och visar vad för index den har 
topDomain = jag slicear från lastDot + 1 (för att ta bort ".") och kör tills 
slutet för att få fram endast com, org, uk. 
hade jag inte tagit + 1 så hade det visats .com, .org, .uk
*/


// Hitta sista punkten i variabeln `email` och skriv ut till console
// Ska fungera *oavsett* vad för värde `email` har, utan att behöva ändra koden
// "The last dot for email EMAIL is at index: 42"
console.log("The last dot for email " + email + " is at index: " + lastDot);

// Med hjälp av föregående kod, ta ut allting EFTER sista punkten i
// `email` och skriv till console
// "The top domain for email EMAIL is: DOMAIN"
console.log("The top domain for email " + email + " is: " + topDomain);