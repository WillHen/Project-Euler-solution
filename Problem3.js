function primeFac(){
		var ans = 1;
		for(var i = 2; i < 600851475143 ; i++){
			if(600851475143  % i === 0){
			ans *= i
			if(ans === 600851475143 ){return i}
										}
												}
	return ans
}