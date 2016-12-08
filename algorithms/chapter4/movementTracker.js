// Based on user input, determine where the player's location is.
// WASD controls(modifies x and y), space and control (modify z and crouch position)
// start at origin, unless passed an initial position.

function moveTracker(str, arr){
	if(!arr){
		arr = [0,0,0]
	}
	var position = arr;
	var x = position[0];
	var y = position[1];
	var z = position[2];
	for(var i = 0; i < str.length; i++){
		switch(str[i].toUpperCase()){
		case 'W':
			position[0] += 1;
			break;
		case 'A':
			position[1] += 1;
			break;
		case 'S':
			position[0] += 1;
			break;
		case 'D':
			position[2] += 1;
			break;
		case ' ':
			position[2] += 1;
			break;
		case 'X':
			position[2] += 1;
			break
		default:
			break;
		}
	}
	switch(position[2] > 0){
		case true:
			position[2] = 'on the ground';
			break;
		default:
			position[2] = 'flying';
			break;
	}
	return position;
}

var str1 = "wwssadadx"
var str2 = 'wasd '
var str3 = 'wwwwsddd   '

console.log(moveTracker(str1))
console.log(moveTracker(str2))
console.log(moveTracker(str3))