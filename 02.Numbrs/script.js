let width = 80;
let height = 40;

console.log(width + height);//-->120 visas som nummer
console.log('120');//-->visas som string (olika färger)

let area = width * height;
let circumference = width * 2 * height * 2;

console.log('Area of square is: ', area);//-->Area of square is:  3200
console.log('Curcumferance of square is: ', circumference);//-->Curcumferance of square is:  12800

let radius = 20;
const pi = 3.14159;

let circleCircumference = pi * 2 * radius;

console.log('Curcumferance of circle is: ', circleCircumference);//-->Curcumferance of circle is:  125.6636

let circleCircumferencePI = Math.PI * 2 * radius;//detta ger samma effekt som tidigare let, fast fler decimaler 
let circleArea = Math.PI * radius ** 2;//** är lika med upphögt i 
console.log('Area of circle is: ', circleArea);//-->Area of circle is:  1256.6370614359173


let points = 10;
console.log(points + 1);//-->11
points++;//+1 ökas EFTER värdet är läst, ex kan man ej göra såhär:
//console.log(points++);
//console.log(++points);detta räknar +1 först och SEN points, alltså ökar med +1 denna rad
console.log(points);//-->11


let score = 50;
score = score + 5;//-->50 + 5 = 55
score = score - 15;//-->55 - 15 = 40
score = score * 2;//-->40 * 2 = 80
score = score / 4;//-->80 / 4 = 20
console.log('Score is: ', score);//-->20

score = 50;
score += 5;//-->50 + 5 = 55
score -= 15;//-->55 - 15 = 40
score *= 2;//-->40 * 2 = 80
score /= 4;//-->80 / 4 = 20
console.log('Score after short command is: ', score);//-->20

let msg = 'Hi';
msg += ' mom';
console.log(msg);//-->Hi mom



//             NaN - Not a Number
console.log('10 divided by 2 is:', 10 / 2);//-->10 divided by 2 is: 5
console.log(5 + ' points');//-->5 points
console.log('Points ' + 5);//-->Points 5
console.log('Points ' - 5);//-->NaN
console.log('Points ' * 5);//-->NaN
console.log('Points ' / 5);//-->NaN
