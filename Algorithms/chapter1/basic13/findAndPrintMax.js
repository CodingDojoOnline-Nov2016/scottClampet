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

// Second iteration using while loop.

function printMax2(arr){
	var max = arr[0];
	var i = 0;
	var len = arr.length;
	while(i < len){
		if(arr[i] > max){
			max = arr[i];		
		}
		i++;
	}
	console.log(max);
}

var array = [1,2,3,4,5];
printMax2(array);