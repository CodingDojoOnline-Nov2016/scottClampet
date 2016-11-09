// Add odd integers from -300,000 to 300,000, and
// console.log the final sum. Is there a shortcut?

function addOdds(start, end){
	var sum = 0;
	for(var i = start; i <= end; i++){
		if(i % 2 !== 0){
			sum += i;
		}
	}
	console.log(sum);
}

addOdds(-300000,300000);