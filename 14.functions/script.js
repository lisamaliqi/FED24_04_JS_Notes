//funktioner är kodblock som vi kan återanvända och som utför en 
//specifik sak, antingen på något eller flera variabler.
//funktioner kan också ge oss ett svar eller värde tillbaka, men ej nödvändigt

//function declaration
/* 
alert('Hello from regular scope');
console.log('Hello from regular scope');
 */

function sayHello() {
    alert('Hello from regular scope');
    console.log('Hello from regular scope');
}

// sayHello();//anropar funktionen

function greetUser(username) {//username=vad för input tar man emot 
    console.log(`Hello, ${username}`);
}

greetUser();//-->hello, undefined pga jag ej lämnat in något för user
greetUser('Lisa');//-->Hello, Lisa
//lisa är ett argument för funktionen

function greetUserTwo(username = 'Tova', time = 'night') {
    console.log(`Good ${time}, ${username}!`);
}

greetUserTwo('Lisa', 'morning');//-->Good morning, Lisa!
greetUserTwo();//-->Good night, Tova!   night och tova är default värden i funktionen
greetUserTwo('Lisa',);//-->Good night, Lisa!   night är default 

let userLisa = 'Lisa';
let userTime = 'Morning';

greetUserTwo(userLisa, userTime);//-->Good Morning, Lisa!



//function expression
const greetUserThree = function (username = 'Tova', time = 'night') {
    console.log(`Good ${time}, ${username}!`);
}

greetUserThree('Lisa');//-->Good night, Lisa!
//function expressions går inte att hoista, alltså om jag ankallar funktionen
//över själva funktionen så kommer den inte bli tillgänglig. 

//function expression är det rekomenderade sättet att använda sig utav för tillfället

let myName = 'Lisa'

const sayHi = function (username1) {
    username1 = username1.toUpperCase();//ändrar värdet i parametern 
    console.log(`Hi ${username1}!`);
}
sayHi(myName);//-->Hi LISA!
console.log('myName after invoking function: ', myName);//-->myName after invoking function:  Lisa

/* 
const calcBoxCirc = function(width, height){
    const circ = width * 2 + height * 2;
    console.log('Circumference is: ', circ);
}
 */

// let sum1 = calcBoxCirc(20, 40);//-->Circumference is:  120
// console.log('sum1:', sum1);//-->sum1: undefined
//kommer undefined pga vi berättar inte vad det är som funktionen ska ge tillbaka

const calcBoxCirc = function(width, height){
    return width * 2 + height * 2;
}

let sum1 = calcBoxCirc(20, 40);//-->Circumference is:  120
console.log('sum1: ', sum1);//-->sum1:  120




//Arrow function (fat arrow function)
/* 
Gammal vers
const clacBoxArea = function(width, height) {
    return width * height;
}
 */


//arrow vers
const clacBoxArea = (width, height) => {
    return width * height
}

/*gör din arrow kortare
const clacBoxArea = (width, height) => width * height; 
//hade det varit bara en parameter hade du kunnat ta bort paranteserna, men är det 0
//elr fler än en så måste paranteserna vara med 
//kommer behöva paranteser när jag kör typescript så försök använda det som en vana
*/


