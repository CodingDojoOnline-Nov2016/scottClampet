// For [1,3,5,7,9,13], print values that are greater than its 2nd value. 
// Return how many values this is. 

function secondGreator(arr){
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[1] < arr[i]){
			console.log(i);
			count++;
		}
	}
	return count;
}
var run = secondGreator([1,2,4,5,6,0]);