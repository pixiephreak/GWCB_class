// Instructions:
//
// Implement the logic for the WeatherAdmin component. As with the CLI component, you should start with pseudocode.
//
// This component requires you to read and save information. Be sure to require the appropriate Node package.
//
// Create a WeatherAdmin constructor. This constructor should return an object with two methods.
//
// One of those methods is newUserSearch, which should accept a user's name and location; search for the weather in their area; and save the user's information in a log of all searches users have made thus far.
//
// The other method is getData, which should log or return a list of all of the searches users have executed thus far.
//
// When you finish, return to the code for your CLI and incorporate your completed WeatherAdmin component.

var fs = require('fs');


var WeatherAdmin = function(name, location){
  this.newUserSearch = function(){
    var data = new UserSearch(name, location);
    fs.appendFile('log.txt', data, function (err) {
      if(error){
						console.log(error);
					}
});
  },
  this.getData = function(){
    fs.readFile('log.txt',  function(error, data){
      if(error){
		      console.log(error);
	    }
      console.log(data);
    })
  }
}
