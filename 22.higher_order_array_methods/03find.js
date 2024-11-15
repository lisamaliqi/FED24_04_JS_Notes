//              FIND


//jag vill hitta det första talet som är >= 45
const numbers = [ 42, 5, 21, 50, 24, 18, 47];
console.log('original numbers: ', numbers);

//detta är ett ok sätt:
const largeNumbers = numbers.filter((number) => number >= 45);
console.log('LargeNumber: ', largeNumbers);
const oldFirstLargeNumber = largeNumbers[0];
console.log('oldFirstLargeNumber: ', oldFirstLargeNumber);


//mycket bättre sätt:
const firstLargeNumber = numbers.find((number) => {
    return number >= 45;
});
console.log('firstLargeNumber: ', firstLargeNumber);
