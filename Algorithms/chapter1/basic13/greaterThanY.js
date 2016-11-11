// Given an array and a value Y, count and print the
// number of array values greater than Y.

function greaterThanY(arr,Y){
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > Y){
			count++;
		}
	}
	console.log(count);
}

var array = [1,1,1,4,4,5];
greaterThanY(array,1);