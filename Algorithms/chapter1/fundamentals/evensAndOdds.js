// Create a function that accepts an array. Every
// time that array has three odd values in a row,
// print "That’s odd!" Every time the array has
// three evens in a row, print "Even more so!" 

function evenOdd(arr) {
	for(var i = 0; i < arr.length - 2; i++){
		if(arr[i] % 2 === 0 && arr[i] + 1 % 2 === 0 && arr[i] + 2 % === 0){
			console.log("Even more so!");
		}
		if(arr[i] % 2 !== 0 && arr[i] + 1 % 2 !== 0 && arr[i] + 2 % 2 !== 0){
			console.log("That's odd!");
		}
	}
}
 var array = [1,1,1,3,3,3,4,5,4,4,4];
 evenOdd(array);