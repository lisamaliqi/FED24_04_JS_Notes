//              MAP


const numbers = [ 42, 5, 21, 50, 24, 18, 47];
console.log('original numbers: ', numbers);

//utan map:
const oldDoubleNumbers = [];
numbers.forEach(number => {
    oldDoubleNumbers.push(number * 2);
});
console.log('Old doubled numbers: ', oldDoubleNumbers);

//med map, nya sättet, helt ok
//görs om till en helt ny array, man har fortfarande kvar den gammla arrayen 
const newDoubleNumbers = numbers.map(number => {
    return number * 2;
});
console.log('New double numbers: ', newDoubleNumbers);



const products = [
	{
		sku: "CORR-BWL",
		name: "Corrosive bowl",
		in_stock: 321,
		price: 0.99,
	},
	{
		sku: "CTN-SPCE",
		name: "Cotton spice rack",
		in_stock: 2,
		price: 149.99,
	},
	{
		sku: "GOOD-COOKIES",
		name: "Inside-out Oreo cookies",
		in_stock: 18,
		price: 2.49,
	},
	{
		sku: "BACK-BREAKER",
		name: "The uncomfortable broom",
		in_stock: 1,
		price: 28.65,
	},
];


//skapa en ny array med alla produkters sku
const oldSkus = [];
products.forEach(product => {
    oldSkus.push(product.sku);
});
console.log('Getting skus the old way: ', oldSkus);//istället för ett objekt vid varje index finns det bara en tetstring 


//med map
const newSkus = products.map(product => {
    return product.sku;
});
console.log('Getting skus with map(): ', newSkus);



//skapa en string representattion av alla produkter
const output = products.map(product => {
    return `<li> ${product.name}</li>`;
});

console.log(output);

