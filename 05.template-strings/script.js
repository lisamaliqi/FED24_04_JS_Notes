let test = 'JavaScript 101';
let student = 'Newbie coder';
let points = 1337;

//string concatenation
let msg = 'Hi ' + student + ', your result on ' + test + ' was ' + points + ' points';
console.log(msg);//-->Hi Newbie coder, your result on JavaScript 101 was 1337 points

//template strings
msg = `Hi ${student}, your result on ${test} was ${points} points`;
console.log(msg);//-->Hi Newbie coder, your result on JavaScript 101 was 1337 points
//en annan fördel med template strings är att man kan ha flera 
//rader i en string ex:
/*
här kan jag skriva en text
som sedan fortsätter här
ifall jag har backticks, alltså `` 
*/

