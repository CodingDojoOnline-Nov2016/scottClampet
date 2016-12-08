function slice2(str, start, end) {
	var newString = '';
	var diff = 0;
	if(Math.abs(start) > str.length || Math.abs(end) > str.length) {
		return "Dude... you're better than this (argument longer than string)";
	}
	if(start < 0 && end < 0) {
		console.log("both vals are neg", "start", start, "end", end, "diff", diff);
		diff = start + end;
		start = str.length + start;
		end = str.length + end;
	} else if(start < 0) {
		console.log("only start is neg", "start", start, "end", end, "diff", diff);
		start = str.length + start;
		diff = start + 1 - end;
	} else if(end < 0) {
		var temp = start;
		start = end;
		end = temp;
		console.log("only end is neg", "start", start, "end", end, "diff", diff);
		start = str.length + start;
		diff = start + 1 - end;
		console.log("start", start, "end", end, "diff", diff);
	} else {
		var temp = start;
		start = end;
		end = temp;
		diff = start + 1 - end;
	}
	if(diff > str.length || diff <= 0) {
		return "overlapping start and end"
	}
	while(diff) {
		newString = str[start] + newString;
		start--;
		diff--;
	}
	return newString;
}
var str1 = "Hello World";
var str2 = "I will not juggle.";
var str3 = "Shake it like a polaroid picture";

console.log(slice2(str1, 3, 8));
// console.log(slice2(str2, 0, -11));
// console.log(slice2(str3, 0, 6));