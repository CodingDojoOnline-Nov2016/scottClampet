// Your function should accept an array. If value at [0] is greater than array’s 
// length, print "Too big!"; if value at [0] is less than array’s length, 
// print "Too small!"; otherwise print "Just right!". 

function fitTheFirst(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[0] > arr.length){
			console.log("Too big!");
		} else if(arr[0] < arr.length){
			console.log("Too small!");
		} else {
			console.log("Just right!");
		}
	}
}

fitTheFirst([3,4,3]);