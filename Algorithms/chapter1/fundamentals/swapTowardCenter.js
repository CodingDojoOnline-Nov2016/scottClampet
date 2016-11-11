// Given array, swap first and last, third and third-tolast,
// etc. Input[true,42,"Ada",2,"pizza"]
// becomes ["pizza",42,"Ada",2,true].
// Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapCenter(arr) {
	var len = arr.length;
	for(var i = 0; i < len / 2; i += 2){
		var temp = arr[i];
		arr[i] = arr[len - 1 - i];
		arr[len - 1 - i] = temp;
	}
	return arr;

}

var array = [1,2,3,4,5,6];
swapCenter(array);