//          SORT()
//detta är en destrictiv metod

//namn
const names = ['Johan', 'Pernilla', 'Alicia', 'Maja', 'Elliot'];
console.log('Names in total chaos: ', names); //loggar namnen som hur de är i arrayn

//om vi vill sorta array i bokstavsordning
names.sort();
//sort är en destructiv method, det betyder att det ändrar originalvärdet (heap)
console.log('Names in propper alfabethical order: ', names);//loggar namnen i bokstavsordning

//omvänd bokstavsordning
names.reverse();
console.log('Names in reverse alfabethical order: ', names);//loggar namnen i bakvänd bokstavsordning
//hade jag lagt reverse innan jag gjort i sort så hade den printat originalarrayen i reverse, ej bokstavsordning


//nummer
const numbers = [47, 2, 642, 12, 311, 62, 27, 8, 26, 168, 42, 57, 23];
// const numbers = [47, 2, 642, 12, 311];

console.log('numbers in total chaos: ', numbers); //loggar numrena som hur de är i arrayn

// numbers.sort();
//sort gör om det till strings, därav går på första "karaktären"
console.log('numbers in total chaos, still..: ', numbers); //loggar i konstig ordning
//detta kommer inte fungera pga den går efter första siffran


//såhär sorterar man nummer i storlekssortering
//if a is less than b
numbers.sort((a, b) => {
    console.log(`comparing a: ${a} vs b: ${b}`);

    //snabb och enkel lösning
    //fungerar BARA pm man jämför NUMBERS
    return a - b;

    //man hade kunnat skriva detta också:
    //number.sort((a, b) => a - b);

    /* if (a < b) {
        console.log(`a ${a} is less than b ${b} and should be placed BEFORE`); 
        return -1;
    }
    
    //if a is greater than b 
    if(a > b) {
        console.log(`a ${a} is greater than b ${b} and should be placed AFTER`);
        return 0;
    }

    if (a === b) {
        console.log('a is equal to b');
        return 0;
    } */

});

console.log('numbers in propper number order: ', numbers);


//sort in object
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


console.log('students before sort: ', students);

//sortera arrayen baserat på number of points, lägst först
students.sort((a, b) => a.points - b.points);
//a = första object
//b = andra poäng
//a-b = två object minus varandra, fungerar ej, därav a.points - b.points för att nå points key-value 

console.log('students after sort (smallest to biggest): ', students);


//sortera arrayen baserat på number of points, störts först
students.sort((a, b) => b.points - a.points);
console.log('students after sort (biggest to smallest): ', students);

//man hade också kunnat ta sorteringen från första omgången och lägga till reverse: 
//students.sort((a, b) => a.points - b.points).reverse();
//eller:
// 1. students.sort((a, b) => a.points - b.points);
// 2. students.reverse();


//sortera studenter genom deras namn 
students.sort((a, b) => {
    const aName = a.name;
    const bName = b.name;

    if (aName < bName) {
        return -1;
    }

    if (aName > bName) {
        return 1;
    }

    return 0;
});

console.log('Students after sort by name: ', students);

