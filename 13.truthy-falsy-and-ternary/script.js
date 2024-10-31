

let message = '' //-->falsey pga saknar mellanrum
message = ' ';//-->truthy pga mellanrum 

if(message){
    console.log('Message is truthy');
} else {
    console.log('Message is falsey');
}


let username = 'false';//-->welcome false
username = false;//-->welcome anonymous haxx0r

if(!username){
    username = 'Anonymous haxx0r';
}

console.log(`Welcome ${username}`);


username ='pelle';
if(username) {
    let msg = 'you have a name!'
} else {
    let msg = 'You have NO NAME?!'
}
// console.log(msg);//-->felmeddelande, msg is not defined pga  ej global scope


username ='lisa';
let msg;
if(username) {
    msg = 'you have a name!'
} else {
    msg = 'You have NO NAME?!'
}
console.log(msg);


username = 'tova';
msg = (username) 
    ? `You have a name, it is ${username}, wow`//om det är true
    : 'YOU HAVE NO NAME?!?!?';//in det är fakse

console.log(msg);

let age = 23;
let allowEntry = age > 18 ? true : false;

console.log(allowEntry);//-->true pga jag är över 18

allowEntry = age > 18 ? 'you are old!' : 'you are young';

console.log(allowEntry);//-->you are old! pga den är true 


