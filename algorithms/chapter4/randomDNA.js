//Generate random DNA sequence

function randomDNA(){
	var seq = '';
	var bases = ['T','G','A','C'];
	for(var i = 0; i < 12; i++){
		seq += bases[Math.floor(Math.random() * 4)]
	}
	return seq;
}

console.log(randomDNA())