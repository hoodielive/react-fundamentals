var fs = require('fs') 
  fs.readFile('./script.js', function(err,data)  {
    console.log("This is just so you'll know that we found script.js") 
      fs.readFile('./pyramid.js', function(err, data) {
        console.log("This is just so you'll know that we found pyramid.js") 
      })
  }) 
