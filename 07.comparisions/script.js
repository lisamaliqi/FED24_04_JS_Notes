const minAge = 18;
const maxAge = 65;

let myAge = 65;
console.log('Age is: ', myAge);

console.log('Is age greater than minAge?', myAge > minAge);//--> 65 större än 18 = true
console.log('Is age greater than OR equal to minAge?', myAge >= minAge);//--> 65 större än ELLER lika med 18 = true

console.log('Is age less than maxAge?', myAge < maxAge);//65 mindre än 65 = false
console.log('Is age less than OR equal to maxAge?', myAge <= maxAge);//65 mindre än ELLER lika med 65 = true

console.log('is age equal to maxAge?', myAge == maxAge);//65 är 65 = true
console.log('is age NOT equal to maxAge?', myAge != maxAge);//65 INTE är 65 = false
console.log('---------------------------------------------------');


//             Loose vs strict comparision

//loose = different datatypes can be equal
let age = 23;
console.log('23 == 23', age == 23);//-->23 == 23 true
console.log('23 == "23"', age == '23');//-->23 == "23" true
console.log('23 != 23', age != 23);//-->23 != 23 false
console.log('23 != "23"', age != '23');//-->23 != "23" false
console.log('---------------------------------------------------');

//strict = använd i princip ALLTID strikt jämförelse 
console.log('23 === 23', age === 23);//-->23 === 23 true
console.log('23 === "23"', age === '23');//-->23 === "23" false
console.log('23 !== 23', age !== 23);//-->23 !== 23 false
console.log('23 !== "23"', age !== '23');//-->23 !== "23" true
console.log('---------------------------------------------------');








