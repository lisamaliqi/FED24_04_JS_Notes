//CLONE

//pekar på samma, detta blir ingen clone
const simple_numbers = [3, 7, 10, 13];
const other_numbers = simple_numbers;
other_numbers.push(42);

console.log('simple numbers: ', simple_numbers);
console.log('other numbers: ', other_numbers);


//ett fungerande sätt att klona
const simple_numbers2 = [3, 7, 10, 13];
const other_numbers2 = simple_numbers2.filter((num) => {
    return true;
});
other_numbers2.push(42);

console.log('simple numbers2: ', simple_numbers2);
console.log('other numbers2: ', other_numbers2);



//ett bättre sätt att klona
const simple_numbers3 = [3, 7, 10, 13];
const other_numbers3 = [ ...simple_numbers3];
other_numbers3.push(42);

console.log('simple numbers3: ', simple_numbers3);
console.log('other numbers3: ', other_numbers3);