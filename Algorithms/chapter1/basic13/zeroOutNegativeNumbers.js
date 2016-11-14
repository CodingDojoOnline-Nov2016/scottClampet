// Return the given array, after setting any negative
// values to zero. 

function zeroOut(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < 0){
			arr[i] = 0;
		}
	}
	return arr;
}

var array = [-1,-4,33,4,-6];
zeroOut(array);

// Second iteration using while loop.

function zeroOut2(arr){
	var i = 0;
	while(i < arr.length){
		if(arr[i] < 0){
			arr[i] = 0;
		}
		i++;
	}
	return arr;
}

var array = [-1,-4,33,4,-6];
zeroOut2(array);