// Return whether a given integer is prime. 

function isPrime(num){
	var count = 0;
	for(var i = 1; i <= num; i++){
		if(num % i === 0){
			count++;
		}
	}
	if(count == 2){
		console.log("Is Prime");
	} else {
		console.log("Hell Nah");
	}
}

isPrime(11);

function isPrime2(num){
	if((num !== 2 && num !== 3) (num === 0 || num === 1 || num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0 || num % 11 === 0)){
		console.log("Not");
	}
	return "Yes I am Prime";
}

isPrime2(13);