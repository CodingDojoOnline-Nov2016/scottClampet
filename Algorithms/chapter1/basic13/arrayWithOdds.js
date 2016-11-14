// Create an array with all the odd integers between
// 1 and 255 (inclusive). 

function arrayWithOdds(){
	var newArr = [];
	for(var i = 1; i <= 255; i++)
		if(i % 2 !== 0){
			newArr.push(i);
		}
	return newArr;
}

arrayWithOdds();

// Second iteration using while loop.

function arrayWithOdds2(){
	var newArray = [];
	var i = 1;
	while(i < 256){
		if(i % 2 !== 0){
			newArray.push(i);
		}
		i++;
	}
	return newArray;
}

arrayWithOdds2();

