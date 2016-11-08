// Given array, create a function to return a new
// array where each value in the original has been
// doubled. Calling double([1,2,3]) should
// return [2,4,6] without changing original.

function double(arr){
	var newArr = [];
	for(var idx = 0; idx < arr.length; idx++){
		newArr[idx] = arr[idx] * 2;
	}
	return newArr;
}

var arr1 = [1,2,3];
double(arr1);