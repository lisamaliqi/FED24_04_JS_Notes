const minAge = 18;
const maxAge = 65;

let myAge = 42;

//   If statements 
if(myAge >= minAge) {//om myAge >= minAge är true, gör det som står under:
    console.log('Access granted!');
} else {//om myAge >= minAge inte är true, gör detta:
    console.log('You are too young to party')
}

//AND statement i if
if(myAge >= minAge && myAge <= maxAge) {//om myAge >= minAge && (OCH) myAge <= maxAge är true, gör det som står under:
    console.log('Access granted!');
} else {//om myAge >= minAge && (OCH) myAge <= maxAge inte är true, gör detta:
    console.log('You are too young or too old to party')
}

//OR statement i if
let username = 'lisa';
if(username === 'tova' || username === 'lisa'){//om username === 'tova' || (ELLER) username === 'lisa' är true, gör det som står under:
    console.log(`Im sorry ${username}, i cant open the door`);
} else { //om username === 'tova' || (ELLER) username === 'lisa' inte är true, gör detta:
    console.log('Welcome!');
}

//Advanced if statement 
if(myAge >= minAge && myAge <= maxAge) {
    console.log('You are between');
} else if(myAge < minAge) {
        console.log('young');
} else {
        console.log('old');
    }
console.log('-------------------------------------------------');


//              FOR LOOP  

console.log('starting loop...');

for(
    let i = 0;//låt i vara 0, start value av i
    i < 10;//loopa så länge i är mindre än 10, fortsätt, så länge i är true 
    i++//öka med +1 efter vaje loop, after each loop (iteration) do this
) {
    //här är loopen
    console.log('were looping, at loop number: ', i);
}
console.log('Done with the loop!');
console.log('-------------------------------------------------');


let students = [
    'Deadpool',
    'Black Widow',
    'Iron-Man',
    'Spider-Man',
    'Wanda',
    'Thanos',
];

console.log('Class of 2024:');
for(let i = 0; i < students.length; i++) {
    console.log(`student at index ${i} is:`, students[i]);
}


