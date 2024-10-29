//DÅLIGT
let points1 = 1;
let points2 = 42;
let points3 = 1337;
let points4 = 999;

//BÄTTRE
let points = [1, 42, 1337, 999];

let students = [
    'Deadpool',
    'Black Widow',
    'Iron-Man',
    'Spider-Man',
];

console.log('Students:',students);
console.log('The second students name is: ', students[1]);//-->The second students name is:  Black Widow

console.log(`We have ${students.length} students in our class`);//-->We have 4 students in our class



//     non-destructive methods

console.log('The students names are: ' + students);//-->The students names are: Deadpool,Black Widow,Iron-Man,Spider-Man

//Join all items in an array to a string
let names = students.join(' ');
console.log('The students names are: ' + names);//-->The students names are: Deadpool Black Widow Iron-Man Spider-Man
console.log('The students points are: ' + points.join(', '));//-->The students points are: 1, 42, 1337, 999
//gör om de nummrena som finns i arrayn "points" till en string 

//find if iron-man exist in the array
console.log('Does Iron-Man exist in the array?', students.includes('Iron-Man'));//-->Does Iron-Man exist in the array? true

//concatenate two arrays together
let friends = [
    'Batman',
    'Superman',
    'Green Lantern',
    'Joker',
    'Harley Quinn',
];
let mashup = students.concat(friends);//lägger ihop en arary med en annan
console.log(mashup);//-->['Deadpool', 'Black Widow', 'Iron-Man', 'Spider-Man', 'Batman', 'Superman', 'Green Lantern', 'Joker', 'Harley Quinn']
console.log(students);//students array är oförändrad, man har kvar de två gamla listorna trotts mashup



//             Destructive methods
//lägg till 'Wanda' i slutet av arrayen
students.push('Wanda');//push() lägger till wanda i slutet på arrayn
console.log(students);//-->['Deadpool', 'Black Widow', 'Iron-Man', 'Spider-Man', 'Wanda']

students.pop();//tar bort sista produkten i arrayn 
console.log(students);//-->['Deadpool', 'Black Widow', 'Iron-Man', 'Spider-Man']

students.shift();//--> tar bort första produkten i arrayn
console.log(students);//-->['Black Widow', 'Iron-Man', 'Spider-Man']

students.unshift('Wanda');//lägger till Wanda i början på arrayn
console.log(students);//-->['Wanda', 'Black Widow', 'Iron-Man', 'Spider-Man']




