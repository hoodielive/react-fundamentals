function add() {
    console.log(arguments)
    var result = Array.prototype.reduce.call(arguments, function(memo, value) {
        return memo + value 
    });  
    return result; 
}
console.log(add(2,4,3)) 
