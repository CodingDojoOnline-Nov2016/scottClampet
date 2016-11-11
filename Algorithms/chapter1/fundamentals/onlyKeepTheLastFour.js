// Stan learned something today: that reducing an array’s .length immediately shortens it by that
// amount. Given array arr and number X, remove all except the last X elements, and return arr
// (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it. 

function popFront(arr){
	var holder = arr[0];
	for(var i = 0; i < arr.length - 1; i++){
		arr[i] = arr[i + 1];
	}
	return holder;
}

var arrayToPop = [1,2,3,4,5];
console.log(arrayToPop);
console.log(popFront(arrayToPop));

function onlyKeepTheLastFew(arr, x){
	while(arr.length > x){
		popFront(arr);
	}
	return arr;
}

console.log(onlyKeepTheLastFew(arrayToPop,3));