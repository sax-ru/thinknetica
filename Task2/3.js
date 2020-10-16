// Реализовать функцию для фильтрации массива по длине слов, значения длины указываются включительно, фильтр должен работать так:
//     const fruits = [‘orange’, ‘apple’, ‘banana’, ‘’]
// filterByLength(fruits, 0,5) // [‘apple’, ‘’]
const fruits = ['orange', 'apple', 'banana', ''];

function filterByLength(arr, min, max) {
    return arr.filter(item => item.length <= max && item.length >= min);
}

console.log(filterByLength(fruits, 0,5)); // ['apple', '']
