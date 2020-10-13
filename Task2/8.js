// Создать объект human со следующими возможностями:
// const fullName = 'Ivan Ivanov';

const human = Object.create({}, {
    fullName: {
        set: function (value) {
            [this.firstName, this.lastName] = value.split(' ')
        },
        get() {
            return `Имя: ${this.firstName} Фамилие: ${this.lastName}`;
        }
    },
    dateOfBirth: {
        set: function (value) {
            let date = new Date();
            this.age = date.getFullYear() - value;
            // console.log(this.age);
        },
        get() {
            return `Полных лет: ${this.age}`;
        }
    }
})

human.fullName = 'Ivan Ivanov';
human.dateOfBirth = 2000;

console.log(human.fullName);
console.log(human.dateOfBirth);
