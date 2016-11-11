// If 2 given numbers represent your birth month
// and day in either order, log "How did you know?", else log "Just another day...."

function yourBday(month, day){
	if(month === 04 && day === 10){
		console.log("How did you know?");
	} else {
		console.log("Just another day....");
	}
}

yourBday(04,10);