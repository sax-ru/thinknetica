// С помощью прототипа реализовать структуру "Квадрат" которая будет расширять
// структуру "Прямоугольник", должна быть возможность задавать размеры обеим
// фигурам и получать их площадь и периметр

const Rectangle = function () {
    this.square = function (a, b) {
        return a * b;
    }
    this.perimeter = function (a, b) {
        return (a + b) * 2;
    }
}

const Square = function () {
    this.square = function (a) {
        return a * a;
    }
    this.perimeter = function (a) {
        return 4 * a;
    }
}
Square.prototype = new Rectangle() ;


// const test = new Rectangle();
// const test2 = new Square();
//
// console.log(test.square(2, 5));
// console.log(test.perimeter(2, 5));
// console.log(test2.perimeter(2));