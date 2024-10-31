/*
Math.round() -- rundar en decimal till dess närmsta heltal
Math.floor() -- rundar NER en decimal till heltal
Math.ceil() -- rundar UPP en decimal till heltal
*/

console.log();


console.log(Math.random());//random nummer mellan 0-1

console.log(Math.random() * 10);//random nummer mellan 0-10


const floatBetween0And1 = Math.random() * 10;
const integerFloat = Math.round(floatBetween0And1);
console.log(integerFloat);//random nummer mellan 0-10 i heltal

console.log('---------------------------------');


//genererar random nummer mellan 1-10
const getRandomNumber = (number = 10) => {
    return Math.floor (Math.random() * number) + 1;
}

console.log(getRandomNumber(50));

console.log('---------------------------------');


let numbers = [];
for (let i = 0; i < 20; i++) {

    numbers.push( getRandomNumber(50) )
    
}

console.log('numbers; ', numbers.join(', '));




