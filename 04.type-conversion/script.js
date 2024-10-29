let points = 100;
console.log('points: ', points, typeof sum);//-->sum:  100 number

let batman = 'batman';
console.log('batman: ', batman, typeof batman);//-->batman:  batman string

let stringPoints = '25';
console.log('stringPoints: ', stringPoints, typeof stringPoints);//-->stringPoints:  25 string


//       type coersion
let sumPoints = points + 25;
console.log('sumPoints: ', sumPoints, typeof sumPoints);//-->sumPoints:  125 number

sumPoints = points + stringPoints;
console.log('sumPoints: ', sumPoints, typeof sumPoints);//-->sumPoints:  10025 string
//JS ggör hellre nummer till strängar än strängar till nummer 



//      Type conversion/Type casting
//string to number
let convertedStringPoints = Number(stringPoints);//VIKTIGT med STORT N i Number()
console.log(convertedStringPoints, typeof convertedStringPoints);//-->25 'number'   står som ett nummer, från string till number

let convertedBatman = Number(batman);
console.log(convertedBatman, typeof convertedBatman);//-->NaN 'number'

//number to string
let convertedPoints = String(points);
console.log(convertedPoints, typeof convertedPoints);//-->100 string


//booleans conversion
let result;

result = Boolean(100);//-->true
result = Boolean(1);//-->true
result = Boolean(0);//-->false
result = Boolean(-1);//-->true
result = Boolean(-100);//-->true

result = Boolean('i am groot');//-->true
result = Boolean('');//-->false
result = Boolean(' ');//-->true

console.log('result:', result, typeof result);//-->result: true boolean

//alla booleans som blir false:
/*
Boolean(0);
Boolean(-0);
Boolean('');
Boolean(null);
Boolean(undefined);
Boolean(NaN);
Boolean(false);
*/

