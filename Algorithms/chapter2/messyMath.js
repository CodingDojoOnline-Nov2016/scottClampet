// Create a function messyMath(num) that will return the 
// following sum: add all integers from 0 up to the given num. 
// Except for the following special cases of our count value.




function messyMath(num){
	var count = 0;
	var sum = 0;
	for(var i = 0; i <= num; i++){
		if(count % 3 === 0){
			count++;
			continue;
		} else if(count % 7 === 0){
			sum += i * 2;
			count++;	
		} else {
			sum += i;
			count++;
		}
		if(count * 3 === num){
			return -1;
		}
	}
	return sum;
}

messyMath(15);