// Create an array with all the odd integers between
// 1 and 255 (inclusive). 

function arrayWithOdds(){
	var newArr = [];
	for(var i = 2; i <= 255; i++)
		if(i % 2 !== 0){
			newArr.push(i);
		}
	return newArr;
}

arrayWithOdds();