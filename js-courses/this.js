function calculateAge(years) {
    return `${years} years from today ${this.name} will be ${
        this.age + years
    } years old. `;
}

const person1 = {
    name: "Kate Austin",
    age: 25
}

const person2 = {
    name: "Kim Son Yung",
    age: 35
}

const person3 = {
    name: "Dr. Chan",
    age: 45
}

console.log(calculateAge.call(person1, 20) + '\n')

console.log(calculateAge.call(person2, 20) + '\n')

console.log(calculateAge.apply(person3, [20]) + '\n')