// Instructions
//
// It's time to start making our playlist application a little more functional through including all four C.R.U.D elements within it.
//
// Add in some pieces of code that CREATE, UPDATE, and DELETE specific pieces of data from your MySQL database. Make sure to include a READ statement at the end as well to ensure that the changes you are making are working properly.
//
// BONUS: After successfully adding CRUD to your application, it's time to test your mettle and see if you can make it so this app is more dynamic. Add the ability for users to dynamically input their own data into the database using either the Prompt or Promptly NPM packages.
//
// HINT: Recall that you can create MySQL queries which include variables using question marks. Proper usage of this will help you quite a bit.
//
// HINT: Remember to take into account the scope of Prompt/Promptly when putting your application together.

var mysql = require('mysql');
var credentials = {
  host: 'localhost',
  port: 3306,

  user: 'root',

  password: '',
  database: 'music'
};
var connection = mysql.createConnection(credentials);
var newArtists = [{
  title: 'brenda holloway',
  artist: 'every little bit hurts',
  genre: 'soul'
},{title:'bonnie rait' ,
  artist:"i can't make you love me",
  genre: 'adult contemporary'
}]

newArtists.forEach(function(artist){
  connection.query('INSERT INTO people SET ?', artist);
})


connection.query('UPDATE people SET ? WHERE ?', [{genre:'dance'}, {title: 'rihanna'}],
function(err,response){
  console.log(response);
});

// connection.query('DELETE FROM people WHERE ?', {title:'brenda holloway'});

// create code that prints all songs within your database to the terminal.
connection.query('SELECT * FROM people', function(err, res){
  if(err) throw err;
  res.forEach(function(res){
    console.log(`id: ${res.id}`);
    console.log(`title: ${res.title}`);
    console.log(`artist: ${res.artist}`);
    console.log(`genre: ${res.genre}`);
    console.log(`- - - - - - - - - - - - - - - - - -`);
  })

});
