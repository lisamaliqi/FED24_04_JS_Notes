/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//alert('HEJ'); --> får upp pop-up i rutan där det står 'HEJ'
//alert är en blockerande kod, betyder att koden under ej går igång innan man "ok"ar alert

let x ='abc';
console.log(x);//-->abc    Ger ut samma värdet som raden nedan 
console.log('abc');//-->abc

x ='nytt värde'; //ändrar värdet på den tidigare "let"
console.log(x);//-->nytt värde    Ger ut samma värdet som raden nedan
console.log('nytt värde');//-->nytt värde

let lisa;  //-->en variabel som du ej gett ett värde till ännu 
console.log(lisa); //-->undefined
lisa = 'mitt namn är Lisa'; //-->ger variabeln som saknar ett värde ett värde
console.log(lisa);//-->mitt namn är Lisa

let myFirstName = 'Lisa';//använd camelCase när du skriver namn på variabel
let my_first_name = 'Lisa';//man kan också använda sig utav snake_case, men inte så mycket i JS
let MyFirstName = 'Lisa';//UpperCamelCase

const lastName = 'Maliqi';
console.log(lastName);

console.log(myFirstName + lastName);//-->LisaMaliqi
console.log(myFirstName + ' ' + lastName);//-->Lisa Maliqi

let fullName = MyFirstName + ' ' + lastName;
console.log('Your name is: ' + fullName);//-->Your name is: Lisa Maliqi

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////


//                                 STRINGS
//String properties
console.log('The length of your full name is: ' + fullName.length);//-->The length of your full name is: 11

//String methods
console.log('Your full name (but screaming): ' + fullName.toUpperCase());//-->Your full name (but screaming): LISA MALIQI
let screamingName = fullName.toUpperCase();
console.log(screamingName);//-->LISA MALIQI

console.log('Your full name (but whispering): ' + fullName.toLowerCase());//-->Your full name (but whispering): lisa maliqi

console.log('The first char of your name is: ' + fullName[0]);//-->The first char of your name is: L

console.log('The first "q" exist at index: ' + fullName.indexOf('q'));//-->The first "q" exist at index: 9

let newName = fullName.replace('Lisa', 'Tova');
console.log('New name is: ' + newName);//-->New name is: Tova Maliqi
console.log('Your old name is: ' + fullName);//-->Your old name is: Lisa Maliqi

let partOfName = fullName.slice(1,4);
console.log('Part of your name: ' + partOfName);//-->Part of your name: isa
