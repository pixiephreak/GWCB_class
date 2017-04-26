var mysql = require('mysql');
var inquirer = require('inquirer');
var config = require('./config');
var connection = mysql.createConnection(config);
var artists = [];
var popularArtists = [];

connection.connect(function(err){
  if(err) throw err;
  // console.log('connect as id'+ connection.threadId);
});

// A query which returns all data for songs sung by a specific artist

connection.query('SELECT * FROM top5000 WHERE artist=?',['rihanna'], function(err,res){

  if(err) throw err;
  if(res.length>0){
    res.forEach(function(entry){
      console.log(entry.song);
    });
  }else(console.log('Sorry, this artist did not make the list.'));

});

// A query which returns all artists who appear within the top 5000 more than once
connection.query('SELECT * FROM top5000', function(err,res){
  res.forEach(function(entry) {

    if(artists.indexOf(entry.artist) === -1 ){
      artists.push(entry.artist);
    }else{
      if(popularArtists.indexOf(entry.artist) === -1){
        popularArtists.push(entry.artist);
      }
    }
  });
  console.log("Artists who have multiple hits: ", popularArtists.length);
  popularArtists.forEach(function(artist){
      console.log(artist);
  });
});
// A query which returns all data contained within a specific range

// A query which searches for a specific song in the top 5000 and returns the data for it
//put the parsing logic in the select string so that it happens server side
connection.query('SELECT * FROM top5000',)
