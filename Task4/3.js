// Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам:
//   Есть следующее расширение объектов:
//   Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник
//
// const john = {
//     name: "John",
//     lastName: "Smith",
//     position: "Senior engineer",
//     startDate: "10.10.1990",
//     endDate: "10.10.2000",
//     baseSalary: "10000",
//     salaryCurrency: "$",
//     location: "Russia",
//     department: "IT",
//     phoneNumber: "+1234567890",
//     eat: function() {},
//     sleep: function() {},
//     callFriend: function() {},
//     writeReport: function() {},
//     organizeMeeting: function () {},
//     retire: function () {},
//     startVacation: function () {}
// };

const Human = function (name = 'John', lastName = 'Smith', phoneNumber = '+1234567890') {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.eat = function () {
        console.log('Ем');
    };
    this.sleep = function () {
        console.log('Сплю');
    };
    this.callFriend = function () {
        console.log('Звоню другу');
    };
}

const Staff = function (position = 'Senior engineer', baseSalary = '10000', salaryCurrency = '$', location = 'Russia', department = 'IT') {
    this.position = position;
    this.baseSalary = baseSalary;
    this.salaryCurrency = salaryCurrency;
    this.location = location;
    this.department = department;
    this.writeReport = function () {
        console.log('Пишу отчет');
    };
    this.organizeMeeting= function () {
        console.log('organizeMeeting');
    };
    this.startVacation= function () {
        console.log('startVacation');
    };
}

const StaffOff = function (startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.retire = function () {};
}


Staff.prototype = new Human();
StaffOff.prototype = new Staff();


const firedEmployee = new StaffOff('01.01.2019', '10.08.2020');


console.log(firedEmployee.name);
console.log(firedEmployee.startDate);
console.log(firedEmployee.position);
console.log(firedEmployee.eat());
