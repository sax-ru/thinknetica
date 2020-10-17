// Копилка
// Замыкания могут применяться для простой реализации инкапсуляции, т.е. для того чтобы скрыть реализацию какой-то функциональности.
//
//     Реализуйте функцию MoneyBox, который будет создавать объект с двумя методами:
//     addCoin - Добавляет 1 монету в копилку
// getAmount - Возвращает количество монет в копилке
// Не должно быть возможности задать количество монет напрямую, минуя метод addCoin. При создании в копилке нет монет.

const MoneyBox = function () {
    this.coin = 0;
    this.addCoin = () => {
        return this.coin++;
    }
    this.getAmount = () => {
        return console.log(this.coin);
    }

}

const box = new MoneyBox();

box.getAmount(); // 0
box.addCoin();
box.addCoin();
box.getAmount(); // 2
