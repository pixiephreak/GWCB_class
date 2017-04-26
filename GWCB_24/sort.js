

// Starting from a blank file, create a Node-based command-line application that
// takes in a series of numbers from the user and returns the numbers sorted in
// ascending order.

// Note: Feel free to use Stack Overflow or Google to find
// the code for sorting integers numerically.
var nodeArg = process.argv;
var vals = [];

function sortNumber(a,b) {
    return a - b;
}

for(let i=2; i<nodeArg.length; i++){
	if (process.argv[i] != undefined && parseFloat(process.argv[i]) != NaN){
		vals.push(parseFloat(process.argv[i]))
	}else{
		break;
	}
}

console.log('Please enter a series of numbers separated by spaces.')
console.log('The numbers you entered from lowest to highest are:', vals.sort(sortNumber));