// Instructions:

// Starting from scratch, build a Node application called bank.js which
//allows takes in user inputs via the command line to register bank transactions.

// The transactions possible are:

// total - this should tally up all of the money
//in the bank balance and display it for the user.

// deposit <number> - this should add a positive amount to the bank balance. (No need to display the total here)

// withdraw <number> - this should add a negative amount to the bank balance. (No need to display the total here)

// lotto - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.

// For all deposits, withdrawals, or lotto purchases the transaction should be registered in the bank.txt file.

// HINT: Consider making a series of if-then or switch-case statements to identify the "type" of transaction and the "amount" involved (if relevant).

// Bonus: If you finish early, consider finding creative ways to expand the functionality. Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to withdraw more than they hold, etc.

var fs = require('fs');

var transaction = process.argv[2];
var funds = process.argv[3];
var register;

fs.readFile('bank.txt', 'utf8', function(error, data){
	if(error){
		console.log(error);
	}

	register = registerFactory(data);

	switch (transaction) {
	  case 'total':
	    register.total();
	    break;
	  case 'deposit':
	    register.deposit(parseFloat(funds));
	    break;
	  case 'withdraw':
	    register.withdraw(parseFloat(funds));
	    break;
	  case 'lotto':
	    register.lotto();
	    break;
	  default:
	    console.log(`We don't process ${transaction}s at this bank`);
	}

	console.log("Is there anything else you'd like?");

})




// funciton accepts data as param and returns register obj

function registerFactory(data){
	return {
			arr: data.split(', '),
			drawer: 0,
			total: function(){
				this.drawer = this.arr.reduce(function(acc,val){
					return parseFloat(acc) + parseFloat(val);
				},0);
				console.log(this.drawer.toFixed(2));
			},
			deposit: function(funds){
				fs.appendFile('bank.txt', `, ${funds}` , 'utf8', function(error){
					if(error){
						console.log(error);
					}
				});
			},
			withdraw: function(funds){
				fs.appendFile('bank.txt', `, -${funds}`, 'utf8', function(error){
					if(error){
						console.log(error);
					}
				})
			},
			lotto: function(){
				fs.appendFile('bank.txt', `, -${0.25}`, 'utf8', function(error){
					if(error){
						console.log(error);
					}
					var myPick = Math.floor((Math.random() * 2) + 1);
					if(myPick === 1){
						fs.appendFile('bank.txt', `, -${((Math.random()*2)+1).toFixed(2)}`, 'utf8', function(error){
							if(error){
								console.log(error);
							}
						})
					}else{
						fs.appendFile('bank.txt', `, ${((Math.random()*2)+1).toFixed(2)}`, 'utf8', function(error){
							if(error){
								console.log(error);
							}
						})
					}
				})
			}
		};

	}





