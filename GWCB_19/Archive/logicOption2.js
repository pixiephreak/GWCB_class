// Initialize Firebase (YOUR OWN APP)

    var config = {
    apiKey: "AIzaSyDwDK00R7tZdVOTgLTNTYOnwFqBtifyhg8",
    authDomain: "gwcb-first-app.firebaseapp.com",
    databaseURL: "https://gwcb-first-app.firebaseio.com",
    storageBucket: "gwcb-first-app.appspot.com",
    messagingSenderId: "661284158379"
  };

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
 database.ref().on("value", function(snapshot) {
      console.log(snapshot.val());
      $("#click-value").html(snapshot.val().clickCount);
      clickCounter = snapshot.val().clickCount;
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });



// Print the initial data to the console.
console.log(clickCounter);

// Change the html to reflect the initial value.


// Change the clickCounter to match the data in the database


// Log the value of the clickCounter


// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1


  // Alert User and reset the counter


  // Save new value to Firebase


  // Log the value of clickCounter


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue


  // Save new value to Firebase


  // Log the value of clickCounter


  // Change the HTML Values

});
