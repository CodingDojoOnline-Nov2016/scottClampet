// rotate matrix 90degrees to the right

function rotateMatrix(array){
    var newArray = [];
    // length of each array in (array)
    var arrayLength = array[0].length;

	// pushes an empty list, for each list in array, into newArray
    for(var i = 0; i < arrayLength; i++){
        newArray.push([]);
    };
    console.log(newArray);

    // loops right to left in array, adding relative values left to right to newArray.
    for(var i = array.length - 1; i >= 0; i--){
        for(var j = 0; j < arrayLength; j++){
            newArray[j].push(array[i][j]);
        };
    };

    return(newArray);
}
array1 = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[10,11,12]
	]
  

console.log(rotateMatrix(array1))


// should return = [
// 	[7,4,1],
// 	[8,5,2],
// 	[9,6,3]
// 	]