
	// ```Prime Checker:

	// Write a function that checks to see if a number is a prime number or not. Have it return true if it is, or false if it's not.

	// More Info:

	// More info on Prime numbers: https://www.mathsisfun.com/prime_numbers.html```

	function isPrime(number){
	  //make sure that the number is greater than 1
	  if(number > 1){
		  for(let i=2; i<number; i++){
		    if(number%i === 0){
		      return false;
		    }
	  }
	  	return true
	}
  return false
	}


	//return true
	console.log(isPrime(229));
// 	//return false
	console.log(isPrime(40));
	console.log(isPrime(25));
	console.log(isPrime(1));
