// Iterate through a given array, printing each value.

function iterateAndPrint(arr){
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}

var array = [1,2,3,4,5,5];
iterateAndPrint(array);

// Second iteration using while loop.

function iterateAndPrint2(arr){
	var i = 0;
	while(i < arr.length){
		console.log(arr[i]);
		i++;
	}
}

var array = [1,2,3,4,5,5];
iterateAndPrint2(array);