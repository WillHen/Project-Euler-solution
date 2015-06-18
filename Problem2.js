function fib(){
		var fibs = [1,2], i = 1;
		var evens = 2
		while(fibs[i] < 4000000){
			i++;
			fibs[i] = fibs[i-1] + fibs[i-2];
			if(fibs[i] % 2 === 0 && fibs[i] < 4000000){evens+= fibs[i] }
								}
	return evens;
}
