function countSort(arr) {
	//find min/max values to find counter length
	var min = arr[0]
	var max = arr[0]
	len = arr.length
	for(var i = 0; i < len; i++) {
		if(arr[i] < min) {
			min = arr[i];
		} 
		else if(arr[i] > max) {
			max = arr[i];
		}
	}
	//set up counter
	var newArr = []
	var counter = []
	for(var i = 0; i < max-min+1; i++) {
		counter[i] = 0;
	}
	//add 1 to respective index for each arr value
	for(var i = 0; i < len; i++) {
		counter[arr[i] - min]++
	}
	var sortedIdx = 0
	for(var i = 0; i < counter.length; i++) {
		while(counter[i] > 0){
			arr[sortedIdx] = i + min;
			sortedIdx++;
			counter[i]--;
			// console.log(arr)
		}
	}
	console.log(counter)
	return arr
	// return 'min ' + min + ' max ' + max
}

var arr = [2,5,4,3,2,5,4,3]

console.log(countSort(arr))