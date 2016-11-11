// Given an array, find and print its largest element.

function printMax(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	console.log(max);
}

var array = [1,2,3,4,5];
printMax(array);