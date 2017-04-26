var mysql = require("mysql");

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,

  user: 'root',

  password: '',
  database: 'music'
});

connection.connect(function(err){
  if (err) throw err;
  console.log('connect as id'+connection.threadId);
});

// First create code that prints all songs within your database to the terminal.
connection.query('SELECT * FROM people', function(err, res){
  if(err) throw err;
  res.forEach(function(res){
    console.log(`id: ${res.id}`);
    console.log(`title: ${res.title}`);
    console.log(`artist: ${res.artist}`);
    console.log(`genre: ${res.genre}`);
  })

});


// Now create code that prints songs of a specific genre/artist to the terminal.
connection.query('SELECT * FROM people WHERE title=?', ['beyonce'], function(err, res){
  res.forEach(function(res){
    console.log(`id: ${res.id}`);
    console.log(`title: ${res.title}`);
    console.log(`artist: ${res.artist}`);
    console.log(`genre: ${res.genre}`);
  })
});

// There are a couple different ways to accomplish this task,
// but the most common one can be found within the documentation for the MySQL package.
