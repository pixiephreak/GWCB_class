// Create a basic command line Node application using the inquirer package.

// Your application should ask the user any five questions of your choosing.

// The question set should include at least one:

// Basic input,
// Password
// List,
// Checkbox,
// Confirm
// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.

// HINT: See the inquirer GitHub documentation "examples" page if you need help.

// Remember to get creative with your code!

var inquirer = require('inquirer');
var pw = 'doody';

inquirer.prompt([
	{
		type:'input',
		message: 'Your name, please',
		name: 'name'
	},
	{
		type:'password',
		message: 'Establish a password',
		name: 'password'
	},
	{
		type: 'list',
		message: 'What is your favorite activity?',
		choices: ['yoga', 'eating','coding','gossiping'],
		name: 'activities'
	},
	{
		type: 'checkbox',
		message: "Which languages do you speak?",
		choices: ['Arabic', 'Farsi','English', 'Hindi','Spanish'],
		name: 'languages'
	},
	{
		type:'confirm',
		message:'Are you really sure',
		name: 'confimr',
		default: true
	}

	]).then(function(user){
		console.log(JSON.stringify(user, null, 2));
	})