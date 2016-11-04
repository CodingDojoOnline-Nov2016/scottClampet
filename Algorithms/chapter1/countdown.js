// Create a function that accepts a number as an input. 
// Return a new array that counts down by one, from
// the number (as array’s ‘zero’th element) down to 0 (as the last element). 
// How long is this array? 

function countdown(number){
	var arr = [];
	for(var i = number; i >= 0; i--){
		arr.push(i);
	}
	return arr;
}

countdown(10);