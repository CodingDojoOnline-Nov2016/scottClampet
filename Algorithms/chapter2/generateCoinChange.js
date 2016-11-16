

function generateCoinChange(num){
	var Q = 0, D = 0, N = 0, P = 0;
	while(num > 0){
		if(num - 25 >= 0){
			num-=25;
			Q++;
			
		} else if(num - 10 > 0){
			num-=10;
			D++;
			
		} else if(num - 5 > 0){
			num-=5;
			N++;
			
		} else if(num - 1 >= 0){
			num-=1;
			P++
			
		}
	}
	console.log("quarters: "+Q+" dimes: "+D+" nickles: "+N+" pennies: "+P);
}

generateCoinChange(94);