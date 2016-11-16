// Implement function sigma(num) that given a number, returns the sum of 
// all positive integers up to number(inclusive). Ex.:sigma(3) = 6(or 1 + 2 + 3); 
// sigma(5) = 15(or 1+2+3+4+5).

function sigma(num){
	num = num;
	var sum = 0;

	while(num > 0){
		sum += num;
		console.log(sum);
		num-=1;
	}
	return sum;
}

sigma(5);