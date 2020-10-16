// Калькулятор
//
//
// Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат,
// по умолчанию должны присутствовать методы add, substract
// Также, он должен хранить историю всех операций и выводить ее по запросу:
//
//
// calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*',
// operands: [10,2]}, {operation: '/', operands: [10,2]}] */

function Calc() {

    this.methods = {
        "+": (a, b) => a + b,
        "*": (a, b) => a * b
    };
    this.historyCalc = [];

    this.operation = function(str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        this.historyCalc.push({operation: op, operands: [a, b]})

        return console.log(this.methods[op](a, b));
    }

    this.addOperation = function(name, func) {
        this.methods[name] = func;
    };

    this.history = function () {
        return console.log(this.historyCalc);
    }

    this.clearHistory = function () {
        this.historyCalc = [];
    }
}


const calculator = new Calc()

calculator.operation('31 + 32') // 63
calculator.operation('10 * 2') // 10
calculator.addOperation('/', (a, b) => a / b)
calculator.operation('10 / 2') // 5

calculator.history()

calculator.clearHistory()
calculator.history() // []