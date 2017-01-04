// return whether a given array has a balance point between indices, 
// where one side's sum is equal to the other's. Ex: [1,2,3,4,10] ---> true (between indices 3 & 4)
// but [1,2,4,2,1] --> false

function balancePoint(arr) {
	var sumLeft = 0;
	var sumRight = 0;
	var len = arr.length - 1;
	while(len){
		for(var i = 0; i < arr.length - len; i++) {
			sumLeft += arr[i];
			var balance = i;
		}
		for(var i = arr.length - len; i < arr.length; i++) {
			sumRight += arr[i];
		}
		console.log(balance)
		if(sumLeft === sumRight) {
			return true;
		}
		if(sumRight < sumLeft) {
			return false;
		}
		sumLeft = 0;
		sumRight = 0;
		len--;
	}
	return false;
}

var arr1 = [1,2,3,4,10]; //true
var arr2 = [1,2,4,2,1]; //false
// console.log(balancePoint(arr1))
// console.log(balancePoint(arr2))

function balancePoint2(arr) {
	var sumLeft = arr[0];
	var sumRight = 0;
	var idx = arr.length - 1;
	for(var i = 1; i < arr.length; i++) {
		sumRight += arr[i];
	}
	while(idx) {
		console.log('left', sumLeft, 'right', sumRight, 'idx', idx);
		if(sumLeft === sumRight) {
			return true;
		}
		if(sumRight < sumLeft) {
			console.log('breaking')
			return false;
		}
		sumLeft += arr[arr.length - idx]
		sumRight -= arr[arr.length - idx]
		idx--;
	}
	return false;
}

console.log(balancePoint2(arr1))
console.log(balancePoint2(arr2))