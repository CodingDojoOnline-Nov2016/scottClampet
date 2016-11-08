// Create a function that takes array of numbers.
// The function should print the lowest value in the
// array, and return the highest value in the array. 

function printReturn(arr){
	var low = arr[0];
	var high = arr[0];

	for(var i = 1; arr.length; i++){
		if(arr[i] < low){
			low = arr[i];
		}
		if(arr[i] > high){
			high = arr[i];
		}
	}
	console.log(low);
	return high;
}

var arr1 = [3,2,4,5,6];
printReturn(arr1);
