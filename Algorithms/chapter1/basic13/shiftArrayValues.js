// Given an array, move all values forward by one
// index, dropping the first and leaving a '0' value
// at the end.

function shiftArray(arr){
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		arr[i] += count;
		count++
	}
	return arr;
}

var array = [1,2,3,4];
shiftArray(array);

// Second iteration using while loop.

function shift