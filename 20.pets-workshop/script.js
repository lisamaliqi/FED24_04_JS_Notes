/**
 * DOM - Document Object Model - Petslist
 *
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med info om varje pet enligt nedan. Ersätt det som står med
 * stora bokstäver med rätt sak för varje `pet`.
 *
 * Koden ni skriver ska fungera *oavsett* hur många (eller få) husdjur som
 * finns i array:en `pets`! Ni kan testa detta genom att ta bort kommenteringen
 * av det sista husdjuret i array:en.
 *
 * 👶🏻 STEG 1
 * NAME is a SPECIES of AGE year(s) old.
 *
 * 😊 STEG 2
 * NAME is a SPECIES of AGE year(s) old. His favorite
 * hobbies is to HOBBIES.
 *
 * 🤓 STEG 3 (skriv endast ut owner om det finns någon)
 * NAME is a SPECIES of AGE year(s) old. His owner is OWNER and his favorite
 * hobbies is to HOBBIES.
 *
 */

// Array of pets
const pets = [
	{
		name: "Mr Barksby",
		species: "Dog",
		age: 5,
		hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
		owner: {
			name: "Mr Beans",
			age: 57,
		},
		sound: "WOOOFF!",
		speak() {
			console.log(`${this.name} sound: ${this.sound}`);
		}
	},
	{
		hobbies: ["Be cute"],
		species: "Kitten",
		age: 1,
		name: "Meow Jr",
		sound: "meooow!",
		meowCounter: 0,
		speak() { // same as writing "speak: function() {}"
			this.meowCounter++;
			console.log(this.sound);
			console.log(`Meowed times today: ${this.meowCounter}`);
		}
	},
	{
		hobbies: ["Be cute"],
		species: "Old kitten",
		age: 9,
		name: "Meow Sr",
		sound: "meooow!",
		meowCounter: 0,
		speak() { // same as writing "speak: function() {}"
			this.meowCounter++;
			console.log(this.sound);
			console.log(`Meowed times today: ${this.meowCounter}`);
		}
	}
];



/* 
    <div class="container">
		<h1>22-pets</h1>

		<h2>My pets</h2>
		<ul id="petslist">
			<!-- <li>NAME is a SPECIES of AGE year(s) old.</li> -->
		</ul>
	</div>
     */
/* 
const content = document.querySelector('.content');
console.log(content.innerHTML);//se vad för HTML som är inne i class=content 
content.innerHTML = '<h2>Make this a new h2!</h2>';//har ändrat html värdet till h2 

const people = ['Mario', 'Luigi', 'Yoshi'];
people.forEach (person => {
    content.innerHTML += `<p>${person}</p>`;//en lista från arrayn people syns i dokumentet
});
  */

//hämtar ut id "petslist" från HTML
const petsList = document.querySelector('#petslist');




// 👶🏻 STEG 1
//  * NAME is a SPECIES of AGE year(s) old.

//skapa en forEach så att jag kan gå igenom alla objekt i arrayn. 
/* pets.forEach((pet) => {
    //tar ut id petslist och lägger till med hjälp av innerHTML, kan då skapa <li></li> taggar 
    //måste vara += pga annars hade de bara skrivit över varandra, nu läggs de ihop tillsammans 
    petsList.innerHTML += `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old.</li>`;
    // console.log(`${pet.name} is a ${pet.species} of ${pet.age} year(s) old.`);
}); */





// 😊 STEG 2
//  * NAME is a SPECIES of AGE year(s) old. His favorite
//  * hobbies is to HOBBIES.

/* 
pets.forEach((pet) => {
    petsList.innerHTML += `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His favorite hobbies is to ${pet.hobbies.join(', ')}</li>`;
});                                                                                                 //samma princip som innan, men kör också join så det ser finare ut.
 */





// 🤓 STEG 3 (skriv endast ut owner om det finns någon)
//  * NAME is a SPECIES of AGE year(s) old. His owner is OWNER and his favorite
//  * hobbies is to HOBBIES.

pets.forEach((pet) => {
    //skapar if-statement
    if (pet.owner) { //om djuret har en "owner" --> printa detta
        petsList.innerHTML += `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His owner is ${pet.owner.name} and his favorite hobbies is to ${pet.hobbies.join(', ')}</li>`;
    } else { //om djuret INTE har en "owner" --> printa detta
        petsList.innerHTML += `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His favorite hobbies is to ${pet.hobbies.join(', ')}</li>`;
    }
});   





