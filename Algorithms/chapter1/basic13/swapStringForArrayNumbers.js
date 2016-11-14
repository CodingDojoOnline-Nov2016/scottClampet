// Given an array of numbers, replace any negative
// values with the string 'Dojo'.

function swapForString(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < 0){
			arr[i] = 'Dojo';
		}
	}
	return arr;
}

var array = [2,-3,5,6,-4,-2];
swapForString(array);

// Second iteration using while loop.

function swapForString2(arr){
	var i = 0;
	while(i < arr.length){
		if(arr[i] < 0){
			arr[i] = "Dojo";
		}
		i++;
	}
	return arr;
}

var array = [2,-3,5,6,-4,-2];
swapForString2(array);