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
    // this.build = function (type) {
    //     return (type === 'motorboat') ? console.log('Моторный корабль построен') : console.log('Не могу построить этот тип корабля');
    // };
    this.repair = function (type) {
        return (type === 'motorboat') ? console.log('Моторный корабль отремонтирован') : console.log('Не могу ремонтировать этот тип корабля');
    };
    this.repaint = function (type) {
        return console.log('Корабль перекрашен');
    };
    this.change = function (type) {
        return (type === 'motorboat') ? console.log('Моторный корабль заменен') : console.log('Не могу заменить этот тип корабля');
    };
}


const ShipyardMotorboat = function () {
    this.build = function (type, power, material) {
        return (type === 'motorboat') ? console.log(`Моторный корабль мощностью ${power} из ${material} построен!`) : console.log('Не могу построить этот тип корабля');
    };
}

const ShipyardSailboat = function () {
    this.build = function (type, n, square) {
        return (type === 'sailboat') ? console.log(`Парусный корабль c ${n} мачт и площадью парусов ${square} построен!`) : console.log('Не могу построить этот тип корабля');
    };
}

ShipyardMotorboat.prototype = new Shipyard();
ShipyardSailboat.prototype = new Shipyard();


const ship1 = new ShipyardMotorboat();
const ship2 = new ShipyardSailboat();
const ship3 = new ShipyardMotorboat();


ship1.build('sailboat');
ship1.build('motorboat', 1200, 'steal');
ship2.build('sailboat', 5, 100);
ship2.build('motorboat');

ship3.change('motorboat');