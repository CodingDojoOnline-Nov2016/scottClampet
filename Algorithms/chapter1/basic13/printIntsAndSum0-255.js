// Print integers from 0 to 255, and with each
// integer print the sum so far.

function intsAndSum(){
	var sum = 0;
	for(var i = 0; i < 256; i++){
		console.log(i);
		sum = sum + i;
		console.log("Sum so far:" + sum);
	}
}

intsAndSum();

// Second interation using while loop.

function intsAndSum2(){
	var sum = 0;
	var i = 0;
	while(i < 256){
		console.log(i);
		sum += i;
		console.log("Sum so far: " + sum);
		i++;
	}
}

intsAndSum2();