// Instructions:
//
// Create a command-line node application that takes in parameters like this:
//
// node calculator.js add 1 2 ... and outputs 3
//
// node calculator.js subtract 5 2 ... and outputs 3
//
// node calculator.js multiply 3 2 ... and outputs 6
//
// node calculator.js divide 8 2 ... and outputs 4
//
// node calculator.js remainder 7 2... and outputs 1
//
// Bonus: Enable your calculator application to also handle the below cases: node calculator.js exp 7 2 ... and output 49 (7 squared) node calculator.js algebra 4x+2=10... and output 2. (Hint: Assume the algebra will always be in this exact form and will always be addition)
//
//

var calculator = {
  add: function(num1, num2){
    console.log(parseInt(process.argv[3]) + parseInt(process.argv[4]));
  },
  subtract:function(num1, num2){
    console.log(parseInt(process.argv[3]) + parseInt(process.argv[4]));
  },
  multiply: function(num1, num2){
    console.log(parseInt(process.argv[3]) * parseInt(process.argv[4]));
  },
  divide: function(num1, num2){
    console.log(parseInt(process.argv[3]) / parseInt(process.argv[4]));
  },
  remainder: function(num1, num2){
    console.log(parseInt(process.argv[3]) % parseInt(process.argv[4]));
  }
};


if(process.argv[2] === 'add'){calculator.add()}
else if(process.argv[2] === 'subtract'){calculator.add()}
else if(process.argv[2] === 'multiply'){calculator.add()}
else if(process.argv[2] === 'divide'){calculator.add()}
else if(process.argv[2] === 'remainder'){calculator.add()}
else{ console.log('please use one of the allowed commands')}
