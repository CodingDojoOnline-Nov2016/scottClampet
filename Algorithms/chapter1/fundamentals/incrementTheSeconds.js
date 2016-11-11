// Given an array of numbers arr, add 1 to every
// second element, specifically those whose index
// is odd (arr[1], [3], [5], etc). Afterward,
// console.log each array value and return arr. 

function incrementTheSec(arr){
	for(var i = 0; i < arr.length; i++){
		if(i % 2 !== 0){
			arr[i] = arr[i] + 1;
		}
		console.log(arr[i]);
	}
	return arr;
}

var array = [0,1,2,3,4];
incrementTheSec(array);