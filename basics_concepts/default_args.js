function add(x, y=2) {
    y = y || 5 

    if ( y === undefined) {
        y = 256
    } 
    return x + y 
} 

console.log(add(4, 0)) 

