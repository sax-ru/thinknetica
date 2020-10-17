// Модифицировать прототип Array, добавив в него метод shuffle, чтобы получить возможность выполнять
// случайную сортировку для любого массива

Array.prototype.shuffle = function (array) {
    return array.sort(() => Math.random() - 0.5);
}