// Based on earlier “Countdown By Fours”, given
// lowNum, highNum, mult, print multiples of mult
// from highNum down to lowNum, using a FOR.
// For (2,9,3), print 9 6 3 (on successive lines). 

function flexCount(lownum,highNum,mult){
	for(var i = highNum; i >= lownum; i-=mult){
		console.log(i);
	}
}

flexCount(2,9,3);