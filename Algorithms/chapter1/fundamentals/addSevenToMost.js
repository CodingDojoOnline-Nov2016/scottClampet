// Build function that accepts array. Return a new
// array with all values except first, adding 7 to
// each. Do not alter the original array.

function addSeven(arr){
	var newArray = [];

	for(var i = 0; i < arr.length; i++){
		if(arr[i] !== arr[0]){
			arr[i] = arr[i] + 7;
			newArray.push(arr[i]);
		}
	}
	return newArray;
}

var array = [1,2,3,4,5];
addSeven(array);