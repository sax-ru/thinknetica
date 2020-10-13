// Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент
const arrayN1 = [1, 2, 3, 4];
const arrayN2 = [1, 3, 3, 4];
const arrayS1 = ['a', 'b', 'c'];
const arrayS2 = ['a', 'b', 'c'];

function compareArrays(arr1, arr2) {
    let i = arr1.length;
    if (i !== arr2.length) {
        return false;
    }
    while (i--) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


console.log(compareArrays(arrayN1, arrayN2));
console.log(compareArrays(arrayS1, arrayS2));
