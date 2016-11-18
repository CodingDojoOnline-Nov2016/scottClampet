// Create clockHandAngles(seconds) that, given a number of seconds 
// since 12:00:00, prints angles (in degrees) of the hour, minute and
// seconds hands. As review, 360 degrees form a full rotation. 
// For input of 3600 secs (equivalent to 1:00:00), print 
// "Hour hand: 360 degs. Minute hand: 93 degs. Second hand: 180 degs".
// Note: in the second example, the angle for the minute hand is not
// simply 90 degs; it has advanced a bit further, because of the additional
// 30 secs in that minute so far.

function clockHandAngles(secs){
	var hrDeg = minDeg = hrs = mins = 0;
	if(seconds >= 3600){
		hrs = seconds/3600;
		hrDeg = (hrs/12)*360;
		if(hrDeg > 360){
			hrDeg = hrDeg % 3600;
		}
		seconds = seconds % 3600
	} 
	if(seconds >= 60){
		mins = seconds/60;
		minDeg = (mins/60)*360;
		seconds = seconds % 60;
	}
	secDeg = (seconds/60) * 360;
	hrDeg = hrDeg.toFixed(3);
	minDeg = minDeg.toFixed(3);
	secDeg = secDeg.toFixed(3);
	console.log("hour hand: "+HrDeg+" degs. Minute hand: "+minDeg+" degs. Second hand: "+secDeg+" degs.");
}

clockHandAngles(3600);
clockHandAngles(119730);
clockHandAngles(30);