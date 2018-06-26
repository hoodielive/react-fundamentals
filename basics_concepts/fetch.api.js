const FETCH_TIMEOUT = 5000; 
let didTimeout = false; 

new Promise(function(resolve, reject) { 
	const timeout = setTimeOut(function() { 
		didTimeOut = true;
		reject(new Error('Request timed out')); 
	}, FETCH_TIMEOUT); 

