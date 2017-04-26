// Instructions:

// Starting from a blank JavaScript file, create a Node application that takes in two command line arguments and checks if they are equal. If the two numbers are equal then output: "true". Otherwise output: "false".

// Bonus: Check if the two numbers are both multiples of 7. Again output "true" if they are and output "false" if they are not.

// Hint: console.log(process.argv) as a starting point if you are completely lost.

console.log('Are the two numbers equal? ', process.argv[2] === process.argv[3])

if(process.argv[2]%7 === 0 && process.argv[3]%7 === 0){
	console.log('Both numbers divisible are by 7.');
}
