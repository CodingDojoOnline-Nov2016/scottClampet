// Square each value in a given array, returning that
// same array with changed values. 

function squareValues(arr){
	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i] * arr[i];
	}
	return arr;
}

var array = [1,2,3,4,5];
squareValues(array);

// Second iteration using while loop.

function squareValues2(arr){
	var i = 0;
	while(i < arr.length){
		arr[i] *= arr[i];
		i++;
	}
	return arr;
}

var array = [1,2,3,4,5];
squareValues2(array);