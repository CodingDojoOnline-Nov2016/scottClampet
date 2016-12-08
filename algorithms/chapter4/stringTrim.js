
function stringTrim(str){
	var newStr = '';
	var start = 0;
	var end = 0;
	for(var i = 0; i < str.length; i++){
		if(str[i] !== '\n' && str[i] !== '\t' && str[i] !== ' '){
			end = i;
		}
	}
	for(var i = str.length - 1; i >= 0; i--){
		if(str[i] !== '\n' && str[i] !== '\t' && str[i] !== ' '){
			start = i;
		}
	}
	for(var i = start; i <= end; i++){
		newStr += str[i];
	}
	console.log('start', start, 'end', end);
	return newStr;
}

var str1 = '\n hello bob bob goodbye \t';

console.log(stringTrim(str1));