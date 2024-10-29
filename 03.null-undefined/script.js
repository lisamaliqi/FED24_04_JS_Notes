//             Null & undefined
let score;
console.log(score);//-->undefined
//en datatyp som säger att detta inte har en datatyp 
//den är odefinerad, finns men saknar värde 

//typeof är ett sätt för oss att se vad för datatyp något är 
console.log('type of score: ', typeof score);//-->type of score:  undefined

score = 42;
console.log('value of score: ', score);//-->value of score:  42
console.log('type of score after setting to 42: ', typeof score);//-->type of score after setting to 42:  number

let a; //-->undefined
let b = null; //-->null
//skillnaden mellan null och undefined är att:
//undefined saknar ett värde medans null berättar att den inte har ett värde

console.log('a', a);//-->a undefined
console.log('b', b);//-->b null

console.log('a (undefined) + 5: ', a + 5);//-->a (undefined) + 5:  NaN
//varför det blir NaN pga man tar något som är odefinerat och försöker addera 5
console.log('b (null) + 5: ', b + 5);//-->b (null) + 5:  5
//varför det blir 5 är pga null kan ses som 0, så 0 + 5


//concatenating 
console.log('a:' + a);//-->a:undefined  
console.log('b:' + b);//-->b:null
//gör dessa till strings





