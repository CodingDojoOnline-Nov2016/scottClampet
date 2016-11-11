// Print integers from 0 to 255, and with each
// integer print the sum so far.

function intsAndSum(){
	var sum = 0;
	for(var i = 0; i < 255; i++){
		console.log(i);
		sum = sum + i;
		console.log("Sum so far:" + sum);
	}
}

intsAndSum();