const firstLink = document.querySelector('#link-1');

//få tag på elementets parent
const firstLinkParent = firstLink.parentElement; //tar ut parent på firstLink

//få tag på parents next sibling 
const firstLinkParentNextSibling = firstLinkParent.nextElementSibling;

//få första paragrafen i sidan 
const firstParagraph = document.querySelector('p');

//logga första paragraphens HTML
console.log(firstParagraph.innerHTML);

// logga första paragraphens text
console.log(firstParagraph.innerText);

//få första paragraphen med "error" class
const firstErrorParagraph = document.querySelector('p.error');
console.log(firstErrorParagraph);

//logga första error paragraphens html
console.log(firstErrorParagraph.innerHTML);//man ser allt, span, kommentar, strong, vad som, vad HTML visar

//logga första error paragraphens text
console.log(firstErrorParagraph.innerText);//strong taggarna försvinner, vad webbsidan visar

//ändra innehållet på firstParagraph så att det står annorlunda i DOM 
firstParagraph.innerText = 'Look, our first paragraph from JS!';//byter ut meningen
firstParagraph.innerText += ' This is going to be added to the paragraph';//läggs till i meningen 

/* 
//säg hej till användaren
const h2El = document.querySelector('h2#greetings');
const username = prompt('What is your name?');
h2El.innerText = `Hello ${username}`;//får upp en prompt där jag skriver mitt namn, namnet syns sedan i h2#greeting
//om det är input från användaren så ska man ALDRIG använda innerHTML
*/

//ta fram children
const linkListEl = document.querySelector('.container ul');
console.log(linkListEl);
console.log(linkListEl.children);//tar ut children till ul 

//loopa över HTMLcollection
for (let i = 0; i < linkListEl.children.length; i++) {
    console.log(`child ${i}: `, linkListEl.children[i]);
}

//hur man använder forEach på HTMLcollection
//måste börja med att konvertera HTMLcollection till en array
const liElArray = Array.from(linkListEl.children);

//använda querySelectorAll för att få ut alla ul
const linkListElAll = document.querySelectorAll('.container ul');
console.log(linkListElAll);//får ut en nodeList
//om det är nodeList så kan man använda forEach utan att behöva konvertera till en array

//använda sig utav querySelectorAll på ett redan valt element för att få bara de efterfrågade taggen 
//denna utgår från linkListEl, vilket tar ul i class container
//man måste inte ha document innan, utan document utgår från hela DOM, men man kan göra det mindre 
const allListitems = linkListEl.querySelectorAll('li');
console.log(allListitems);


//get and set attributes
const memeEl = document.querySelector('img');
const imgSrc = memeEl.getAttribute('src');


//fixa popup på button, events and event listeners
const btnPopupEl = document.querySelector('button');
console.log(btnPopupEl.innerText);//får ut innehållet i button i consollen

btnPopupEl.addEventListener('click', () => {
    alert('Stop it!!!');
})
//1.Vad för event man ska lyssna efter = click
//2.Vad som händer när man klickar på knappen


const btnSayHiEl = document.querySelector('button#btnSayHi');
const inputNameEl = document.querySelector('#inputName');

console.log(inputNameEl.value);//logga attributen "value" i inputNameEl

inputNameEl.value = 'changed value'; //byt värdet i "value"

console.log(inputNameEl.value);//nya värdet i "value"

btnSayHiEl.addEventListener('click', () => {
    const username = input
})
