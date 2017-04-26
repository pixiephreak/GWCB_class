// Instructions:
//
// Write a function that accepts a string and a function as arguments.
// It should log the string, and then run the function.
//
// Write a function that accepts a boolean value and a function as arguments.
// It should run the function if and only if the boolean argument is true.
//
// Write a function that accepts a function (F) and a value (V),
// and returns a function that returns the result of running F on V.
// This sounds tricky, but it's easier than it sounds—just take it step by step!
//
// Finally, write a short message to a file using fs.writeFile.
// Does this function use callbacks? If so, identify them.

// var App = function() {
//
//   self.anything = 'hi';
//   self.firstFunc = function(string, func){
//     console.log(string);
//     func();
//   };
//   self.secFunc = function(arg, func){
//     if(arg){
//       func();
//     }
//   };
//   self.thirdFunc = function(arg, func){
//     var output = function(){
//       return func(arg);
//     }
//     return output;
//   }
// };
//
// console.log(App.anything);

function firstFunc(string, func){
  console.log(string);
  func();
};

function secFunc(arg, func){
    if(arg){
      func();
    }
  };

function thirdFunc(val, func){
    var output = function(){
      func(val);
    }
    return output;
  };

console.log(thirdFunc('grr', secFunc));
