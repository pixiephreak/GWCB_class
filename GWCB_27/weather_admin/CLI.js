// require libs and exports
var fs = require('fs');
var request = require('request');
var WeatherAdmin = require('./WeatherAdmin');
//saves argv to var
var login = process.argv[2] || console.log('please enter a user');
var name = process.argc[3] || console.log('please enter a name');
var location = process.argv[4] || console.log('please enter a valid location');
var admin = new WeatherAdmin();

//determines if user is admin or client using an iff statment
if(login === 'admin'){
  admin.getData();
}else {
  admin.newUserSearch(userName, userLocation);
};
