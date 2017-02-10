function binSearch(num, arr, left=0, right=arr.length-1) {
	var len = right - left;
	console.log(right, 'R', left, 'L', len, 'len')
	if(len <= 1) {
		return num === arr[left] || num === arr[right];
	} else {
		var mid = Math.ceil(len / 2);
		mid = right - mid;
		console.log(arr[mid])
		if(num == arr[mid]) {
			return true;
		} else if(num > arr[mid]) {
			return binSearch(num, arr, mid, right);
		} else if(num < arr[mid]) {
			return binSearch(num, arr, left, mid);
		}
	}
}

var arr = [1,2,3,4,5,6,7,8,9];
console.log(binSearch(7,arr))