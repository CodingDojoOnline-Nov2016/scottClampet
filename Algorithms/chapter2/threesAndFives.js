// Create threesAndFives() that adds values from 100 to 4000000
// (inclusive) if that value is evenly divisible by 3 or 5, but 
// not both. Display the final sum in the console.

function threesAndFives(start, end){
	var sum = 0;
	for(var i = start; i <= end; i++){
		if(i % 3 === 0 && i % 5 === 0){
			continue;
		} else if (i % 3 === 0 || i % 5 === 0){
			sum += i;
		}
	}
	return sum;
}

threesAndFives(100,4000000);