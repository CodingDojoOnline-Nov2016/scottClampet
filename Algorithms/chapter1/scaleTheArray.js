// Given an array arr and a number num, multiply
// all values in arr by num, and return the changed
// array arr.

function scaleArr(arr, num){
	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i] * num;
	}
	return arr;
}

var array = [1,3,6,9];
scaleArr(array, 2);