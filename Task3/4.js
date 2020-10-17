// Система продажи билетов
// Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их

function Kassa () {

    this.createEvent = function (name, price) {
        this[name] = {
            price: price,
            cash: 500,
            ticketId: [123456] //добавил для проверки удаления билета
        }
    }

    this.showEvent = function (name) {
        return console.log('Итог: ', this[name]);
    }

    this.buyTicket = function (name) {
        let rndId = randomInteger();
        this[name].ticketId.push(rndId);
        this[name].cash += this[name].price;
        return console.log(`Ваш билет: ${rndId}`);
    }

    this.returnTicket = function (name, id) {
        const bilet = this[name].ticketId.findIndex(item => item === Number(id));
        this[name].ticketId.splice(bilet, 1);
        this[name].cash -= this[name].price;
        return console.log(`Билет ${id} удален, остались билеты: ${this[name].ticketId}`);
    }
}

function randomInteger() {
    let rand = 100000 + Math.random() * (999999 + 1 - 100000);
    return Math.floor(rand);
}


const ticketWindow = new Kassa();

ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
ticketWindow.buyTicket('Concert')
ticketWindow.buyTicket('Concert')
ticketWindow.buyTicket('Concert')

ticketWindow.returnTicket('Concert', '123456')
ticketWindow.showEvent('Concert');
/* Добавляем сумму за билет в кассу, возвращаем
ticketWindow.buyTicket('Concert')
ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
// случайный шестизначный ID билета, создать ID можно любым способом */

// ticketWindow.returnTicket('123456') /* Возвращаем билет, если в системе такой id записан
// как проданный, он должен быть удален из списка проданных и из кассы должна быть
// вычтена соответствующая его цене сумма */