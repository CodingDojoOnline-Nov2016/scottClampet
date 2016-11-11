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