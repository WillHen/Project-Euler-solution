function findPalin(){
		function checkPalin(num){
			if(num.toString().split("").reverse().join("") === num.toString()){
			return true }
			return false  		}
	var palin = 0;
	for(var i = 999; i > 0; i--){
		for(var j = 0; j < 999; j++){
			var temp = i * j;
			if((checkPalin(temp)) && temp > palin){ palin = temp}
									}
								}
return palin 		}