//                  REDUCE

//nummer
const simple_numbers = [3, 7, 13, 19];


//gammla sättet att addera summorna tillsammans 
let oldSum = 0;
simple_numbers.forEach((num) => {
    oldSum = oldSum + num;
});
console.log('oldSum är: ', oldSum);


//nya sättet, med reduce
//anropas för varje tal i arrayen
let newSum = simple_numbers.reduce((prev, curr) => { //prev = 0 pga startvärde, curr är vart man är i arrayen
    return prev + curr;//1. 0+3   2. 3+7    3. 10+13    4. 23+19
}, 0);//startvärde på 0, hade funkat ändå men är lite bad practice 
console.log('newSum är: ', newSum);


const students = [
    {
        name: "Johan",
        points: 1337,
    },
    {
        name: "Pernilla",
        points: -2,
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

//hämta ut totala poängen för alla studenter
const totalPoints = students.reduce((prev, curr) => {
    return prev + curr.points; //summan + studentens poäng 
}, 0);
console.log('all points: ', totalPoints);


//övning:
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

//beräkna totala lager-värdet (totala är 691,24)
//priset * in stock

const totalStockValue = products.reduce((prev, curr) => {
    return prev + (curr.in_stock * curr.price);
}, 0);

console.log(totalStockValue);