function bookIndex(arr){
	var str = '';
	var start = 0;
	var end = 0;
	str += arr[0];
	for(var i = 1; i < arr.length; i++){
		while(arr[i] + 1 == arr[i + 1]){
			str += arr[i] + '-' + arr[i + 2];
		}
		
	}
}

var arr1 = [1,13,14,15,37,38,70]
console.log(bookIndex(arr1));