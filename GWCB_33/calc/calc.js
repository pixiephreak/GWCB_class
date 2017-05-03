// You will create an Express calculator application with one get route that is able
// to take in three parameters: an operation and two numbers.
//
// There are four operation values which a user may use:
// addition, subtraction, multiplication, and division.
//
// When the route is hit, your browser should display the result of the math operation
// and the two numbers on the screen.
//
// For example, when the user goes to the url http://localhost:3000/addition/10/1,
// the page should display 11.

var express = require('express');
var app = express();

//routes
app.get('/:operation/:firstNum/:secondNum', function(req, res){
  var operation = req.params.operation;
  var firstNum = parseInt(req.params.firstNum);
  var secondNum = parseInt(req.params.secondNum);
  var result;

  switch (operation){
    case 'add':
      result = firstNum + secondNum;
      break;
    case 'subtract':
      result = firstNum - secondNum;
      break;
    case 'multiply':
      result = firstNum * secondNum;
      break;
    case 'divide':
      result = firstNum / secondNum;
    default:
      console.log('cannot perform operation');
      //res.end();
  }

  res.send(result.toString());
});

app.listen(3002);
