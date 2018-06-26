class Person {
    constructor(name) {
        this.name = name 
    } 
    sayName() {
        console.log(`My name is ${this.name}`) 
    } 
} 

var p1 = new Person('heru') 

p1.sayName() 

console.log(p1.__proto__ === Person.prototype)
