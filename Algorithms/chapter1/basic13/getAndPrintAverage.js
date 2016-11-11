// Analyze an array’s values and print the average.

function average(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum / arr.length;
}

var array = [1,2,3];
average(array);