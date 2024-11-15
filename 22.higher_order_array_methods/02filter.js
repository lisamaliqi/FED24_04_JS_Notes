//              FILTERS
//detta är INTE en destruktiv metod


const numbers = [ 42, 5, 21, 50, 24, 18, 47];
console.log('original numbers: ', numbers);

//gamla sättet:
const oldLargeNumbers = [];
numbers.forEach((number) => {
    if (number >= 25) {
        oldLargeNumbers.push(number);
    }
})

console.log('old way: ', oldLargeNumbers);


//filter methoden
const newLargeNumbers = numbers.filter((number) => {
    if (number >= 25) {
        return true;
    } else {
        return false;
    }
});

//man kan göra det ännu kortare: 
/*
const newLargeNumbers = numbers.filter(number => number >= 25);
*/

console.log('With filter method: ', newLargeNumbers);
console.log('ej destruktiv metod, numbers fungerar som vanligt: ', numbers);


//filtrera poängen 
const students = [
    {
        name: "Johan",
        points: 1337,
    },
    {
        name: "Pernilla",
        points: -3,
    },
    {
        name: "Alicia",
        points: 88,
    },
    {
        name: "Maja",
        points: 35,
    },
    {
        name: "Elliot",
        points: 42,
    },
];

//få tag i alla studenter för att få ut de som är godkända (>= 40 poäng)

const passedStudents = students.filter((student) => {
    if (student.points >= 40) {
        return true;
    } else {
        return false;
    }
});

//man kan också skriva:
/*
const passedStudents = students.filter((student) => {
    return student.points >= 40; 
});
*/

console.log('students who passed the test: ', passedStudents);
console.log('Mina gamla studenter finns kvar: ', students);

//ändrar värdet i students påverkar också passedStudents
students[0].points = 420;
console.log(students, passedStudents); 

//samma gäller om du ändrar värdet i passedStudents, då ändras också students
//detta pga array är en complex datatyp och befinner sig i en heap, alltså skapas bara "pekare"
passedStudents[0].points = 1010101010;
console.log(students, passedStudents);

