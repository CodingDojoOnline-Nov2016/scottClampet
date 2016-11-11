// Print all odd integers from 1 to 255

function odds1To255(){
	for(var i = 1; i < 256; i++){
		if(i % 2 !== 0){
			console.log(i);
		}
	}
}

odds1To255();