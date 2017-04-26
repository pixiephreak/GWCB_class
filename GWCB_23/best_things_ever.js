// nathan [7:06 PM]
// ```Instructions:

// Create a Node application that reads the best_things_ever.txt file, parses the comma separated elements, and ultimately console logs each element in the file on separate lines.

// HINT: If you are struggling to figure out how to loop your way through the text, look into the .split() method. This could make your life a whole lot easier.
// Your final output should look something like this:

// lazy boy recliner
//   massage
//   meditation
//   hot shower
//   cheese fondue
//   hot coffee with cashew milk
//   kitten falling asleep on my lap

var fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', function(error, data){
	if(error){
		console.error(error);
	}
	// console.log('data:', data);
	var array = data.split(',');
	// console.log('array:', array)
	array.forEach(function(thing){
		console.log(`A best thing: ${thing.trim()}`);
	})
})