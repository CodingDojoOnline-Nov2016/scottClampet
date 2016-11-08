// Given array of numbers, create function to
// replace last value with number of positive values.
// Example, countPositives([-1,1,1,1])
// changes array to [-1,1,1,3] and returns it. 

function countPos(arr){
	var count = 0;
	for(var idx = 0; idx < arr.length; idx++){
		if(arr[idx] > 0){
			count = count++;
		}
	}
	arr[arr.length - 1] = count;
	return arr;
}

var arr1 = [-1,2,3,4];
countPos(arr1);