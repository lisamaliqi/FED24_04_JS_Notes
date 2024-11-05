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
    hobbies: ['Tail-wagging', 'Eating lots of treats', 'Car-chasing'],
    owner: {
        name: 'Mr Bean',
        age: 57,
    }
}

//för att få tag på mr bean:
barksby.owner.name;
console.log(barksby.owner.name);

//hur jag får ut allt i en array tillsammans:
console.log(barksby.hobbies.join(', '));//-->Tail-wagging, Eating lots of treats, Car-chasing
