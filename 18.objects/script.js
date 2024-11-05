//Objects

const fluffles = {
    name: 'Mr fluffles', 
//   key       value 
    age: 3,
    owner: 'Bengt',
    hobbies: 'Annoy people',
    species: 'Cat',
}

const captainCat = {
    name: 'Captain Cat',
    species: 'Cat',
    age: 9,
    owner: 'Agda',
    hobbies: 'HIIT',
}

//få tag på object property genom dot-notation, vanligast 
console.log('Fluffles name: ', fluffles.name);//för att få tag på fluffles namn 
console.log('Fluffles owner: ', fluffles.owner);//för att få tag på fluffles owner 

//går också med square bracket notation
//man gör detta väldigt sällan
console.log('Fluffles name: ', fluffles['name']);//för att få tag på fluffles namn 



const showPetInfo = (pet) => {
    //NAME is a SPICEAS of AGE year(s) old. His owner is OWNER and his favorite hobby
    //is HOBBY.
    console.log(`${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His owner is ${pet.owner} and his favorite hobby is ${pet.hobbies}.`);
    
}

//dessa två printar ut samma värde, trotts att de är i olika ordningar i objektet
showPetInfo(fluffles);
showPetInfo(captainCat);

fluffles.hobbies = 'Being crazy'; //detta ändrar värdet i object



//methods i objects
//objects kan också innehålla mer complexa (reference) data types
const barksby = {
    name: 'Mr Barksby',
    species: 'Dog',
    age: 5,
    sound: 'Woffff!',
    hobbies: ['Tail-wagging', 'Eating lots of treats', 'Car-chasing'],//innehåller en array
   ageCounter: 0,
    owner: {//innehåller ett object
        name: 'Mr Bean',
        age: 57,
    },
    speak: function() {//innehåller en function
        console.log(`Hello this is ${this.name}, i am ${barksby.age} years old`);
        //jag kan här ändra barksby till this, det ger samma resultat

        //lägg till +1 på ageCounter varje gång den körs
        this.ageCounter++;
        console.log(`Age went to: ${this.ageCounter}`);
        
    },
    info: function () {
        console.log(this);//this refererar oftast objektet som methoden finns på
        //använd INTE arrow function 
    }
}

//för att få tag på mr bean:
barksby.owner.name;
console.log(barksby.owner.name);

//hur jag får ut allt i en array tillsammans:
console.log(barksby.hobbies.join(', '));//-->Tail-wagging, Eating lots of treats, Car-chasing

//få ut funktionerna 
barksby.speak();//-->Age went to: 1
barksby.speak();//-->Age went to: 2
barksby.speak();//-->Age went to: 3
barksby.speak();//-->Age went to: 4
barksby.info();