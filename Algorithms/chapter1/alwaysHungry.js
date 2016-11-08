// Create a function that accepts an array, and
// prints "yummy" each time one of the values is
// equal to "food". If no array elements are
// "food", then print "I'm hungry" once. 

function alwaysHun(arr){
	var i = 0;
	var foodCount = 0;

	while(i < arr.length){
		if(arr[i] == "food"){
			console.log("yummy");
			foodCount++
			i++;
		} else {
			i++
		}
	}
	if(foodCount === 0){
		return "I'm hungry";
	}
}

var arr1 = [1,"food", 3, 4, "food"];
var arr2 = [1,2,3,4];

alwaysHun(arr1);