// Instructions

// Using the code sent to you earlier as a reference
// and using the code provided to you as a starter,
// create a Node application which takes in a movie name
// as a command line argument then uses the OMDB API to
// retrieve and return the release date to the console.

// For this activity you have two options:

// Easier: Require that the user provide a movie with
// a single word in the title (ex: Cinderella)

// Harder: Allow the user to provide a movie with as
// many words as possible (ex: Forrest Gump).

// Hint: Start by figuring out what your API URL
// should be then use the starter code as a guide.

// Hint: Remember to npm install request or else your
// code will not work no matter what

var request = require('request');
var nodeArg = process.argv;
var titleArr= nodeArg.slice(2);
console.log(titleArr);
var title = titleArr.join('+');
var queryURl = `http://www.omdbapi.com/?t=${title}`;
console.log(queryURl);



request(queryURl, function(error, response, body){
	if(!error && response.statusCode == 200){
		console.log(JSON.parse(body));
		console.log(JSON.parse(body).Title, ' ', JSON.parse(body).Rated);
	}
})


