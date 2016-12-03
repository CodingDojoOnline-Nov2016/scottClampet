
var str1 = "(())";
var str2 = "(()(";

function parensValid(str){
	var parens = 0;
	for(var i = 0; i < str.length; i++){
		if(str[i] == '('){
			parens++;
		}
		else if(str[i] == ')'){
			parens--;
		}
		if(parens < 0){
			return false;
		}
	}
	return !parens; //implies a comparison. Says "Return me whatever (this) evaluate to"
}

console.log(parensValid(str1));
console.log(parensValid(str2));