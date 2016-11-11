// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores,
// and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given
// 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .

function grade(score){
	var grade;
	if(score < 60){
		grade = "F";
	} else if(score < 63){
		grade = "D-";
	} else if(score < 70 && score > 67){
		grade = "D+";
	} else if(score < 70){
		grade = "D";
	} else if(score < 73){
		grade = "C-";
	} else if(score < 80 && score > 77){
		grade = "C+";
	} else if(score < 80){
		grade = "C";
	} else if(score < 83){
		grade = "B-";
	} else if(score < 90 && score > 87){
		grade = "B+";
	} else if(score < 90){
		grade = "B";
	} else if(score < 93){
		grade = "A-";
	} else if(score < 100 && score > 97){
		grade = "A+"
	} else if(score <= 100){
		grade = "A";
	} else {
		console.log("Do you know what a number looks like?!");
	}
	console.log("Score:" + score + " " + "Grade:" + grade);
}

grade(99);