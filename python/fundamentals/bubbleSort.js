
arr = [6,5,3,1,8,7,2,4]

function bubbleSort(arr){
	for(var i = 0; i < arr.length - 1; i++){
		if(arr[i] > arr[i + 1]){
			temp = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = temp;
		} else {
			continue;
		}
	}
	return arr;
}
console.log(bubbleSort(arr));