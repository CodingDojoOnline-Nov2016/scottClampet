// Assume you have a tet field that is exactly 75 character long. You
// want to fill it with spaces and asterisks('*'), sometimes called
// stars. You should print the given number of asterisks consecutively.
// Depending on which funcion is called, those stars should be 
// left-justified(first star would be very first char in txt field), 
// or right-justified, or center-justified(with same number of spaces on either side
// plus/minus one).

// Write a function drawLeftStars(num) that accepts a number 
// and prints that many asterisks.

function drawLeftStars(num){
	var textfield = " ";
	while(textfield.length <= 75){
		if(num > 0){
			textfield += "*"
			num-=1;
		} else {
			textfield += " ";
		}
	}
	return textfield;
}

console.log(drawLeftStars(14));