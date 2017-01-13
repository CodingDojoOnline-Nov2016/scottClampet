

function timeToEnglish(num){
	var start = 12
	var timepast = num * 24 / 1440;
	if(timepast > 12)
	// console.log(timepast)
	if(timepast % 1 === 0){
		var time = timepast;
		if(time === 1){
			return 'It is '+time+' hour past midnight'
		} else {
			return 'It is '+time+ " o'clock"
		}
	} else if((timepast - .5) % 1 === 0) {
		var time = timepast - .5 + 12;
		return 'It is half past '+ time
	}

}

console.log(timeToEnglish(90))