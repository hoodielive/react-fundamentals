var fs = require('fs') 

/*var file = fs.readFileSync('./script.js') 
console.log(file.toString()) 
*/

fs.readFile('./script', function(err, data) {
    console.log(3)
    // handle err case
    if(err) {
        console.log(err)
        return
    }
    console.log(data.toString()) 
})
console.log(1)
console.log(2)

function helper() {
    console.log(2)
} 
