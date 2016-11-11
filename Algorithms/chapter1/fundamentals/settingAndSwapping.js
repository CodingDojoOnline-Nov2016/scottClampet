// Set myNumber to 42. Set myName to your name.
// Now swap myNumber into myName & vice versa. 

var myNumber = 42;
var myName = "Scott";

function swap(val1, val2){
	temp = val1;
	val1 = val2;
	val2 = temp;
	console.log(val1, val2);
}

swap(myNumber, myName);