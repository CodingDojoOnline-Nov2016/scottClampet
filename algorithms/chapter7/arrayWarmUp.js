// return the average value of an array of unsorted numbers

function arrayAvg(arr){
	var avg = 0;
	var len = arr.length;
	for(var i = 0; i < len; i++){
		avg += arr[i] / len;
	}
	return avg;
}

var arr1 = [2,4,3,5,7];
console.log(arrayAvg(arr1));