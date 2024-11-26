//SHUFFLE


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
console.log('numbers before shuffling: ', numbers);


//dåligt sätt att shuffla
numbers.sort((a, b) => {
    //retunera negativa, 0 eller positiva nummer 
    return 0.5 - Math.random();
});
console.log('numbers after poor shuffling: ', numbers);


//fulfixa (shuffla igen)
numbers.sort((a, b) => {
    //retunera negativa, 0 eller positiva nummer 
    return 0.5 - Math.random();
});
console.log('numbers after poor shuffling: ', numbers);



//kolla johans kod, dedär ed fisher-yates
