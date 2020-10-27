// Реализовать 2 разных типа верфей, каждая из которых должна будет специализироваться на своем типе кораблей
//
// Для моторных кораблей доступны следующие специфичные характеристики:
//
// Мощность двигателя
// Материал корпуса
//
// Для парусных кораблей доступны следующие специфичные характеристики:
//
// Количество мачт
// Общая площадь парусов
//
//
// Что можно делать в верфи:
//
// Строить корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Перекрашивать корабли - Можно красить любые корабли
// Обменивать старый корабль на новый - Можно обменивать только корабли того же типа
//
//
// Главное требование: Чистый код, весь дублирующийся код для кораблей и верфей должен быть вынесен в их прототипы. Задание потребует воспользоваться гуглом для решения.
//
// Верфи и корабли должны создаваться с помощью функций-конструкторов.
// sailboat
// motorboat


const Shipyard = function () {
    // this.repair = function (type) {
    //     return (type === 'motorboat') ? console.log('Моторный корабль отремонтирован') : console.log('Не могу ремонтировать этот тип корабля');
    // };
    this.repaint = function () {
        return console.log('Корабль перекрашен');
    };
    // this.change = function (type) {
    //     return (type === 'motorboat') ? console.log('Моторный корабль заменен') : console.log('Не могу заменить этот тип корабля');
    // };
}


const ShipyardMotorboat = function () {
    this.build = function (power, material) {
        return console.log(`Моторный корабль мощностью ${power} из ${material} построен!`);
    };
    this.repair = function (type) {
        return console.log('Моторный корабль отремонтирован');
    };
    this.change = function (type) {
        return console.log('Моторный корабль заменен');
    };
}

const ShipyardSailboat = function () {
    this.build = function (quantity, square) {
        return console.log(`Парусный корабль c ${quantity} мачт и площадью парусов ${square} построен!`);
    };
    this.repair = function (type) {
        return console.log('Парусный корабль отремонтирован');
    };
    this.change = function (type) {
        return console.log('Парусный корабль заменен');
    };
}

ShipyardMotorboat.prototype = new Shipyard();
ShipyardSailboat.prototype = new Shipyard();

const ship1 = new ShipyardMotorboat();
const ship2 = new ShipyardSailboat();



ship1.build(1200, 'steal');
ship2.build(5, 100);

ship1.repair();
ship2.repair();

ship1.repaint();
ship2.repaint();
