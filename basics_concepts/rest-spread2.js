function talk(greeting, farewell, names) { 
    names.forEach(function(name) {
        console.log(`${greeting} ${name}`)
        console.log(`${farewell} ${name}`)
    })
} 

function talk2(greeting, farewell) {
    console.log(arguments) 
    var args = Array.prototype.slice.call(arguments, 2) 
    console.log(args) 

} 

//talk('hello', 'goodbye', ['bill', 'joe', 'morty']);          
talk2('hello', 'goodbye', 'bill', 'joe', 'morty');          


function talk3(greeting, farewell, ...names) { 
    names.forEach(function(name) {
        console.log(`${greeting} ${name}!`)
        console.log(`${farewell} ${name}!`)
    })
} 

var arr = ['hello', 'goodbye']

talk3('hello', 'goodbye', ['bill', 'joe', 'morty']);          
talk3(...arr, 'bill', 'joe', 'morty')
