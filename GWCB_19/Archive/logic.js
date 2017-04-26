// Initialize Firebase (YOUR OWN APP)
    var config = {
    apiKey: "AIzaSyDwDK00R7tZdVOTgLTNTYOnwFqBtifyhg8",
    authDomain: "gwcb-first-app.firebaseapp.com",
    databaseURL: "https://gwcb-first-app.firebaseio.com",
    storageBucket: "gwcb-first-app.appspot.com",
    messagingSenderId: "661284158379"
  };

// Create a variable to reference the database
var database = firebase.database();

// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data. (I.E FIREBASE HERE)
// HINT: Use databaseVariable.ref().on("value", function(snapshot) {}
 database.ref().on("value", function(snapshot) {
      console.log(snapshot.val());
      $("#click-value").html(snapshot.val().clickCount);
      clickCounter = snapshot.val().clickCount;
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });


// Inside our .on function...

// Console.log the initial "snapshot" value (the object itself)


// Change the initial value to reflect the initial value in Firebase
// HINT: snapshot.val().__________


// Change the value of our clickCounter to match the value in the database
// ___________ = snapshot.val().______________________


// Change the HTML using jQuery to reflect the updated clickCounter value


// Then include Firebase error logging
// HINT: }, function(errorObject)

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  })

  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase


  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").html(clickCounter);


});