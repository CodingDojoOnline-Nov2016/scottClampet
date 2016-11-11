// Write a function that accepts any array, and returns a new array with 
// the array values that are greater than its 2nd value. 
// Print how many values this is. What will you do if the array is only 
// one element long? 

function greaterThanAgain(arr){
	var newArr = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[1] < arr[i]){
			newArr.push(arr[i]);
		}
	}
	console.log(arr.length);
	return newArr;
}

var greaterThanAgain([1,2,3,4,3]);