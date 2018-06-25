var arr = [1, 2, 3] 
var [a, , b] = arr 


console.log(a, b) 

;[a, b] = [b, a]
console.log(a, b) 

var dog = {
    name: 'sparky', 
    age: 5, 
    toys: ['rope', 'bone']
} 

var {name: dogName, age: dogAge, toys: dogToys} = dog 
console.log(dogName, dogAge, dogToys)
