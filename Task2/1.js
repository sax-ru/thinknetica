// Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой { word: 'smth', length: 1, isCapitalized: false}
const str = 'Мама мылА Раму';

const isCapitalized = str => str.toUpperCase()[0] === str[0];

function strToArray(str) {
    return str.split(' ').map(item => ({
        word: item,
        length: item.length,
        isCapitalized: isCapitalized(item),
    }))
}


console.log(strToArray(str));
