//Functions vs methods
//functions kan vi anropa själv, medans method måste vi anropa i context med någont annat, ofast med hjälp av "."
let username = 'lisamanelli'

//method
username.toUpperCase();
console.log(username.toUpperCase());

//function
const makeUpperCase = (str) => {
    return str.toUpperCase() + '!1!1!1!1';
}

makeUpperCase(username);
console.log(makeUpperCase(username));


let names = ['Kalle', 'Kajsa', 'Joakim', 'Knatte', 'Fnatte'];
names.push('Tjatte')
console.log(names);


//function callback

const logToConsol = txt => {
    console.log(txt);
}

const nagUser = (txt) => {
    alert(txt);
}

const makeMoreInteresting = (txt, callback) => {
    const interestingText = txt + '!!!!!!!!';
    callback(interestingText);
}

makeMoreInteresting('i love coffee', logToConsol);//du kan ändra andra parametern med logToConsol elr nagUser


makeMoreInteresting('omg omg omg', txt => {
    console.log(txt);
});//skickar in en annonym function, fungerar på samma sätt som den över


let students = ['Johan', 'Pelle', 'Börje', 'Kajan', 'Tiffany'];

for (let i = 0; i < students.length; i++) {
    const student = students[i]
    console.log(`The name of student ${i} is: `, student);
}//detta loopar alla studenter

console.log('Thats all the students!');
console.log('---------------------------------------------');

//methods for arrays 
students.push('Itzak');

//man brukar oftast använda forEach när man vill loopa en array 
//om man har en STOR array så kanske man ska köra loop
//forEach väntar ibland inte på att något ska bli klart innan den fortsätter till nästa 
//för varje student, gör något
students.forEach((student) => {
    //detta kommer att göras för varje student 
    console.log('Student: ', student);
});//detta kommer också att loopa alla studenter


