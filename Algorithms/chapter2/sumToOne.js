// Implement sumToOne(num) that sums a given integer's digits 
// repeatedly until the sum is only one digit. Return that one-digit result. 
// Ex.: sumToOne(928) returns 1 because 9+2+8 = 19, then 1+9 = 10,
// the 1+0 = 1;

function sumToOne(num){
	if(num.toString().length === 1){
		return num;
	}
	num += "";
	var arr = [];
	for(var i = 0; i < num.length; i+=1){
		arr.push(num.charAt(i));
	}
	// console.log(arr);
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		parseInt(arr[i]);
		sum += parseInt(arr[i]);
	}
	// console.log(sum);
	// console.log((sum+="").length);
	if(sum.toString().length > 1){
		return sumToOne(sum);
	} else {
		return parseInt(sum);
	}
}

sumToOne(245);