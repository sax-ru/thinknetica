// Реализовать функцию для случайной сортировки элементов массива
const arr = [1, 2, 3, 4, 5];

function random(array) {
    return array.sort(() => Math.random() - 0.5);
}


console.log(random(arr));
