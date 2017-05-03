// Create a Node Application with Express, MySQL, and Body Parser with three Express routes.
//
var mysql = require('mysql');
var express = require('express');
var config = require('./config');
var connection = mysql.createConnection(config);
var app = expres()
var newChar = [{
  name: 'jerry',
  attitude: 'neurotic',
  coolness_points: 0
},{
  name: 'elaine',
  attitude: 'flippant',
  coolness_points: 9
},{
  name: 'kramer',
  attitude: 'kooky',
  coolness_points: 0
},{
  name: 'george',
  attitude: 'self-involved',
  coolness_points: 0
}];

// Create a /cast route that will display all the actors and their data ordered by their id's.
app.get('/cast', function(req, res){
  connection.query("SELECT * FROM actors order by id", function(err,res){
    //create html
    var html = `<h1>Actors<h1>`
    // send html
  })
});
//
// Create a /coolness-chart route that will display all the actors and their data ordered
// by their coolness points.
//
// Create a /attitude-chart/:att route that will display all the actors for a specific
// type of attitude.

connection.connect(function(err){
  if (err) throw err;
  console.log(`connected at ${connection.threadId}`);
});

// Add in four actors with different names, coolness_points, and attitudes.
// newChar.forEach(function(char){
//   connection.query('INSERT INTO actors SET ?', char);
// });
