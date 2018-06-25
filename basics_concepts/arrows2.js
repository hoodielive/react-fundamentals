function Person(name) {
    this.name = name 
} 

Person.prototype.sayNameTimed = function() {
    var self = this 
    setTimeout(function() { 
        console.log(`My name is ${self.name}`) 
    }, 1000)
} 

Person.prototype.sayNameTimed2 = function() {
    setTimeout(function() { 
        console.log(`My name is ${this.name}`) 
    }.bind(this), 1000)
} 

Person.prototype.sayNameTimed3 = function () { 
    setTimeout(() => {
        console.log(`My name is ${this.name}`)
    }, 1000)
} 

var p1 = new Person('Sean') 
p1.sayNameTimed() 

var p2 = new Person('Larry') 
p2.sayNameTimed2() 

var p3 = new Person('Lil Daryl') 
p3.sayNameTimed3() 
