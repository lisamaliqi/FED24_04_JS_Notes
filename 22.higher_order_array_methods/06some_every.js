//Array.every()
//kollar ifall ALLA items i en array stämmer det man efterfrågar

const everyonePassed = students.every((student) => {
    return student >= 40;
});
console.log(everyonePassed);


//array.some()
//kollar ifall 1 eller fler items i en array stämmer det man efterfrågar
const somePassed = students.some((student) => {
    return student >= 40;
});
console.log(somePassed);


///ta ut johans notes i detta!