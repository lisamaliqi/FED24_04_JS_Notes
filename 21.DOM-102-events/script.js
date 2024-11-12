/**
 * DOM 102 + events
 *
 * classList (used on an element)
 * - add		adds a class (if it doesn't already exist)
 * - remove		removes a class (if it doesn't already exist)
 * - toggle		adds a class if it doesn't already exist, otherwise removes it
 * - replace	replaces a class with another class
 * - contains	returns true/false if class exists
 */

//hämta referens från DOM-elements
const todoListEL = document.querySelector('ul');


//lyssna efter klick-events på knappen "Add"
document.querySelector('#add').addEventListener('click', () => {
    //hämta referens till alla "li" elements och LENGTH av den listan (array)
    const liCount = document.querySelectorAll('li').length;
    //viktigt att ha denna i funktionen, för man ska se vad man har efter varje gång
    //hade den varit i global scope så hade den visar list item = 4 hela tiden

    //Concatenate till UL's innerHTML
    todoListEL.innerHTML += `<li>list item ${liCount + 1}</li>`;
});


/* 
//lyssna efter klick-events på alla list-items 
document.querySelectorAll('li').forEach((liEl) => {
    liEl.addEventListener('click', (event) => {
        //trycker du på en list item så kommer den togglea mellan classen "completed"
        event.target.classList.toggle('completed');
    })
});
 */



//när man trycker på en lista blir den grön (completed)
//när man trycker på en lista som är completed så försvinner den
todoListEL.addEventListener('click', event => {
    if (event.target.tagName === 'LI' && event.target.classList.contains('completed')) {
        event.target.remove();
    } else if (event.target.tagName === 'LI') {
        event.target.classList.add('completed');
    }
});

//gör så att man inte kan klicka på google länken
document.querySelector('a').addEventListener('click', (e) => {
    console.log('clicking the link');
    e.preventDefault();//detta stoppar default grejen, alltså att dra till google
    
})




/* 
//toggle mellan completed när man trycker på listorna
todoListEL.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    } 
});


//tar bort en lista när man dubbelklickar 
todoListEL.addEventListener('dblclick', event => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});

 */





/*
ul3.addEventListener('click', event => {
    //när man trycker på ul3 så kommer detta hända:
    // console.log('event in UL');
    //loggar 'event in ul

    // console.log(event.target);
    //loggar vilken lista man trycker på, står ex <li>pay the bills</li>, samma gäller när man lägger
    //till en ny lista, den ser exakt likadan ut när man trycker på den

    if (event.target.tagName === 'LI'){ //om event.target har en tagName som heter 'LI' gör detta:
        event.target.remove(); //ta bort targeten, alltså hela li listan
    }
});
*/