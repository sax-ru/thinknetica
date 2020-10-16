// Кэширование
// Замыкания можно использовать для сохранения состояния и дальнейшей работы с ним.
// //
// //     Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат.
// //     Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя его повторно
//
const cache = () => {
    return (x, n) => {
        if (this.x === x && this.n === n) {
            this.fromCache = true;
            return console.log({value: this.res, fromCache: this.fromCache})
        }
        this.fromCache = false;
        this.x = x;
        this.n = n;
        this.res = x ** n;
        return console.log({value: this.res, fromCache: this.fromCache})

    };
}


const calculate = cache();

calculate(3, 3); // { value: 27, fromCache: false}
calculate(2, 10); // { value: 1024, fromCache: false}
calculate(2, 10); // { value: 1024, fromCache: true}

