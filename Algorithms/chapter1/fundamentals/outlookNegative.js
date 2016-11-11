// Given an array, create and return a new one
// containing all the values of the provided array,
// made negative (not simply multiplied by -1).
// Given [1,-3,5], return [-1,-3,-5]. 

function outlookNeg(arr){
	var newArr = [];

	for(var i = 0; i < arr.length; i++){
		if(arr[i] > 0){
			arr[i] = arr[i] * -1;
			newArr.push(arr[i]);
		} else if(arr[i] < 0){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

var array = [1,-3,-4,5,6];
outlookNeg(array);