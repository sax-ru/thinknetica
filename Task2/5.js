// Есть массив сотрудников компании
//
// Нужно выполнить с ним следующие преобразования:
//     1. Узнать среднюю зарплату сотрудников
// 2. Отсортировать сотрудников по зарплате
// 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет


const employees = [
    {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 54,
        salary: 10000,
        position: 'Architect'
    },
    {
        firstName: 'Gustav',
        lastName: 'Andersen',
        age: 31,
        salary: 5000,
        position: 'Software engineer'
    },
    {
        firstName: 'Liz',
        lastName: 'Taylor',
        age: 20,
        salary: 7000,
        position: 'Manager'
    }
]

const salary = function (acc, curr) {
     return acc + +curr.salary;
}

const avgSalary = employees.reduce(salary, 0) / employees.length; //Узнать среднюю зарплату сотрудников
// const avg = employees.reduce(((acc, curr), 0) => acc + +curr.salary);

console.log(`Средняя зарплата сотрудников: ${avgSalary}`);
// console.log(avg);

const sortSalary = function (a, b) {
    return a.salary - b.salary;
}

const sortBySalary = employees.sort(sortSalary);

console.log('Отсортировать сотрудников по зарплате:', sortBySalary);


function filterBySalaryAge(arr, salary, age) { //  список сотрудников с зарплатой >4500 и возрастом > 25 лет
    return arr.filter(item => Number(item.salary) > salary && Number(item.age) > age).map(item => (`${item.firstName} ${item.lastName}`)).join(', ');
}

console.log('Список сотрудников с зарплатой >4500 и возрастом > 25 лет: ', filterBySalaryAge(employees, 4500,25));

