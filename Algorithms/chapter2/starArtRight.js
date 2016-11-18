// Assume you have a tet field that is exactly 75 character long. You
// want to fill it with spaces and asterisks('*'), sometimes called
// stars. You should print the given number of asterisks consecutively.
// Depending on which funcion is called, those stars should be 
// left-justified(first star would be very first char in txt field), 
// or right-justified, or center-justified(with same number of spaces on either side
// plus/minus one).

// Write a functin drawRightStars(num) that prints 75 characters
// total. stars should build from right side. The last num 
// characters should be asterisks; the other 75 should be spaces.

function drawRightStars(num){
	var starString = " "
	var spaces = 75 - num;
	while(textfield.length <= 75){
		if(num > 0){
			textfield += "*";
			num-=1;
		} else {
			textfield += " ";
		}
	}
	return textfield;
	
}

console.log(drawRightStars(14));