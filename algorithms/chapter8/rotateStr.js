
function rotateString(str, rot) {
	// If not a str return or is an empty str return false
	if(typeof str !== "string" || !str.length) {
		return false;
	}

	var newStr = "";

	if(rot > str.length) {
		rot = rot % str.length;
	}
		
		for(i = str.length; i < str.length * 2; i++) {
			var grabber = (i - rot) % str.length;
			newStr += str[grabber];
		}

	return newStr;
}

console.log(rotateString("Rotates", 3));
// console.log(5 % 7)