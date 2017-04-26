// Instructions
//
// In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.
//
// Your "Programmer" constructor should be able to take in the following information...
//
// The programmer's name
// Their position/job title
// How old they are
// Favorite programming language
// Now create a method for the constructor that would print all of the information contained within an object to the console.
//
// Finally, create a "Programmer" object and call the method to print its contents

var Programmer = function(name, title, age, script){
  this.name = name;
  this.title = title;
  this.age = age;
  this.script = script;
  this.print= function(){
    console.log(`Name: ${this.name}, Title: ${this.title}, Age: ${age}, Script: ${script}`);
  }
};

var celia = new Programmer('Celia Hernandez-Coto', 'baller', '67','Clojure');

celia.print();
