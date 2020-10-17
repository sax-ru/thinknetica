// Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам:
//   Есть следующее расширение объектов:
//   Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник

const john = {
    name: "John",
    lastName: "Smith",
    position: "Senior engineer",
    startDate: "10.10.1990",
    endDate: "10.10.2000",
    baseSalary: "10000",
    salaryCurrency: "$",
    location: "Russia",
    department: "IT",
    phoneNumber: "+1234567890",
    eat: function() {},
    sleep: function() {},
    callFriend: function() {},
    writeReport: function() {},
    organizeMeeting: function () {},
    retire: function () {},
    startVacation: function () {}
};

const Human = function (name, lastName, phoneNumber) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.eat = function () {};
    this.sleep = function () {};
    this.callFriend = function () {};
}

const Staff = function (position, baseSalary, salaryCurrency, location, department) {
    this.position = position;
    this.baseSalary = baseSalary;
    this.salaryCurrency = salaryCurrency;
    this.location = location;
    this.department = department;
    this.writeReport = function () {};
    this.organizeMeeting= function () {};
    this.startVacation= function () {};
}

const StaffOff = function (startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.retire = function () {};
}

Staff.prototype = new Human();
StaffOff.prototype = new Staff();