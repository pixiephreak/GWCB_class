// Instructions
//
// Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.
//
// Start out by creating a constructor function called "Player" with the following properties and methods...
//
// Player name: Property which contains the player's name
// Position: Property which holds the player's position
// Offense: Property which is a value between 1 and 10 to show how good this player is on offense
// Defense: Property which is a value between 1 and 10 to show how good this player is on defense
// GoodGame: Method which increases either the player's offense or defense property based upon a coinflip.
// BadGame: Method which decreases either the player's offense or defense property based upon a coinflip.
// PrintStats: Method which prints all of the player's properties to the screen
// Now create a program which allows you to create 8 unique players; 5 starters and 3 subs.
//
// Once all of the players have been created, print their stats.
//
// Once your code is functioning properly, move on to create a function called "playGame" which will be run once all of your players have been created and will do the following...
//
// Loops 10 times
// Each time the function loops, two random numbers between 1 and 50 are rolled and compared against your starter's offensive and defensive stats
// If the first number is lower than the sum of your team's offensive stat, add one point to your team's score.
// If the second number is higher than the sum of your team's defensive stat, remove one point from your team's score.
// After the score has been changed, you may choose to substitute any of your players within the starters array with any of those players within the subs array.
// If your score is positive after the game has finished, run goodGame() for all of those players currently within the starters array. If your score is negative after the game has finished, run badGame() for all of those players currently within your starters array. If the score is equal to zero, then do nothing.
// Prompts the player if they would like to play again: runs playGame from the start once more if they do and ends the program if they don't.
// HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.
//
// HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.
// var data = [
//   {
//   name: 'Vera Jimenez-Coto',
//   position: 'center',
//   offense: 0,
//   defense: 0,
//   isStarter: false,
//   isSub: false
// },
// {
// name: 'Lena Martinez-Hickey',
// position: 'forward',
// offense: 0,
// defense: 0,
// isStarter: false,
// isSub: false
// },
// {
// name: 'Selma Flores-Zumeta',
// position: 'guard',
// offense: 0,
// defense: 0,
// isStarter: false,
// isSub: false
// },
// {
// name: 'Alvena Talusan',
// position: 'guard',
// offense: 0,
// defense: 0,
// isStarter: false,
// isSub: false
// },
// {
// name: 'Agata Padua-Parker',
// position: 'something',
// offense: 0,
// defense: 0,
// isStarter: false,
// isSub: false
// },
// {
// name: 'Laura Tang-Terry',
// position: 'something',
// offense: 0,
// defense: 0,
// isStarter: false,
// isSub: false
// },
// {
// name: 'Katrina Reyes-King',
// position: 'something',
// offense: 0,
// defense: 0,
// isStarter: false,
// isSub: false
// },
// {
// name: 'Luna Lucha-Lata',
// position: 'something',
// offense: 0,
// defense: 0,
// isStarter: false,
// isSub: false
// }
// ];

var coin = function(range){
    return Math.floor((Math.random() * range));
}

inquirer = require('inquirer');

var players = [];

var Player = function(name,position) {
  this.name = name;
  this.position = position;
  this.offense = 0;
  this.defense = 0;
};

Player.prototype.goodGame = function(){
  if(coin(2) === 0){
    this.offense++;
  }else{
    this.defense++;
  }
};
Player.prototype.badGame = function(){

};
Player.prototype.printStats = function(){
  console.log(`Name: ${this.name}, Position: ${this.position}, Offense: ${this.offense}, Defense: ${this.defense}`);
};

var createCount = 0;
function createPlayer(){
  if(createCount<=5){
    userInput('isStarter');
  }else if(createCount<=8){
    userInput('isSub');
  }else{
    players.forEach(function(player){
      console.log(player);
    })
  }

};

function userInput(status){
  inquirer.prompt([
    {
      name: "name",
      message: "What is your name?"
    }, {
      name: "position",
      message: "What is yours position?"
    }
  ]).then(function(answers) {
    // initializes the variable newGuy to be a programmer object which will take
    // in all of the user's answers to the questions above
    var player = new Player(answers.name, answers.position);
    player.status = status;
    players.push(player);
    count++;
    createPlayer();
  });
}

// createPlayer();

// Loops 10 times
// Each time the function loops, two random numbers between 1 and 50 are rolled and compared against your starter's offensive and defensive stats
// If the first number is lower than the sum of your team's offensive stat, add one point to your team's score.
// If the second number is higher than the sum of your team's defensive stat, remove one point from your team's score.
// After the score has been changed, you may choose to substitute any of your players within the starters array with any of those players within the subs array.
// If your score is positive after the game has finished, run goodGame() for all of those players currently within the starters array. If your score is negative after the game has finished, run badGame() for all of those players currently within your starters array. If the score is equal to zero, then do nothing.
// Prompts the player if they would like to play again: runs playGame from the start once more if they do and ends the program if they don't.
// HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.
//
gameCount = 0;
function playGame(){
  if(gameCount<10){
    roll1 = coin(50);
    roll2 = coin(50);
  }
  console.log(roll1, roll2);
};

playGame();
