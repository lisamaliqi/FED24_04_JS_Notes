/**
 * Guess the number - DOM Edition
 *
 * Skriv om ”gissa talet” till att ta emot och visa utfall i DOM. Använd
 * formulär-fält för att ta emot input från användaren, och när formuläret
 * skickas (submits) så jämför det gissade talet mot svaret och visar utfallet
 * i DOM istället för alert()-rutor.
 *
 * STEG 1
 * En input-fält där man kan gissa på ett tal. En knapp för att gissa.
 *
 * STEG 1.1
 * Visa resultatet i en alert.
 *
 * STEG 1.2
 * Visa om resultatet var rätt eller inte i ett HTML-element.
 * (T.ex. ”Du gissade rätt!” eller ”Du gissade fel!”)
 * Ska så klart uppdateras varje gång användaren gissar.
 *
 * STEG 2
 * Visa om det gissade talet var för högt eller lågt i ett HTML-element.
 *
 * STEG 3
 * Visa antalet gissningar hittills i ett HTML-element.
 * Ska så klart också uppdateras varje gång användaren gissar.
 *
 * STEG 4
 * Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och
 * antalet gissningar ska nollställas).
 *
 */


// Referera till element i html
const cheatEl = document.querySelector('#cheat');
const formGuessEl = document.querySelector('#formGuess');
const inputGuessEl = document.querySelector('#inputGuess');
const btnGetLuckyEl = formGuessEl.querySelector('button[type="submit"]');
const guessesEl = document.querySelector('#guesses');
const turnoutEl = document.querySelector('#turnout');

//Generera ett random nummer mellan 1-10
const getRandomNumber = (max = 10) => {
	return Math.floor( Math.random() * max ) + 1;
}

//förvarar poäng i dessa variablar (vilket det korreckta numret är och hur många försök man gjort)
let correctNumber;
let attempts;

//ger variabeln värdet av när man kör igång funktionen getRandomNumber
correctNumber = getRandomNumber(); 
//ge attempts värdet 0 från start 
attempts = 0;
// det korrekta nummret för omgången kommer synas i denna diven (som är osynlig för användaren)
cheatEl.innerText = correctNumber;

//skapa en eventlistener för där man ska skriva in sitt nummer
formGuessEl.addEventListener("submit", (e) => {
    //kör preventDefault på submit fältet, alltså att sidan inte laddas om
	e.preventDefault();
    //gör om värdet av det man skriver i input-fältet till ett nummer, sedan ge det till variabeln guessedNumber
	const guessedNumber = Number(inputGuessEl.value);
	//if-statement för att se ifall correctNumber stämmer överens med det man gissat
	if (guessedNumber === correctNumber) {
        turnoutEl.innerText = `You guessed the correct number! The number was ${correctNumber}`;
	} else {
        turnoutEl.innerText = `You are WRONG!!! Guess again idiot!`;
	}
});