// You are passed an array containing strings.
// Working within that same array, replace each
// string with a number – the length of the string at
// previous array index – and return the array. 

function previous(arr){
	for(var i = arr.length - 1; i > 0; i--){
		arr[i] = arr[i-1].length;
	}
	return arr;
}

var array = ["one", "two", "three", "four"];
previous(array);