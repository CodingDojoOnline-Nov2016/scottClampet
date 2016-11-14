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

// Second iteration using while loop.

function average2(arr){
	var sum = 0;
	var i = 0;
	while(i < arr.length){
		sum += arr[i];
		i++;
	}
	return sum / arr.length;
}
var array = [1,2,3];
average2(array);