// Initialize Firebase
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCdMKrJGlSIpNf1MMBcE1amN4AQv_ilfsk",
    authDomain: "gwcb-coderbay.firebaseapp.com",
    databaseURL: "https://gwcb-coderbay.firebaseio.com",
    storageBucket: "gwcb-coderbay.appspot.com",
    messagingSenderId: "220643269939"
  };
// Alex's
 // var config = {
 //    apiKey: "AIzaSyDlvxCQKZvjcCAJig09PMVORyYT0lenqrs",
 //    authDomain: "alex-project-5b1f2.firebaseapp.com",
 //    databaseURL: "https://alex-project-5b1f2.firebaseio.com",
 //    storageBucket: "alex-project-5b1f2.appspot.com",
 //    messagingSenderId: "186021086438"
 //  };
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;
var bidderName;
var bidderPrice;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the initial variables for highBidder equal to the stored values.
    highBidder = snapshot.val().highBidder
    highPrice = parseInt(snapshot.val().highPrice);

    // Change the HTML to reflect the initial value
    $('#highest-price').html(highPrice);
    $('#highest-bidder').html(highBidder);

    // Print the initial data to the console.
    console.log(highBidder);

  }

  // Keep the initial variables for highBidder equal to the initial values
  else {

    // Change the HTML to reflect the initial valueS
    $('#highest-price').html(highBidder);
    $('#high-bidder').html(highPrice);

    // Print the initial data to the console.
    console.log(highBidder)

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  bidderName = $('#bidder-name').val().trim();
  bidderPrice = $('#bidder-price').val().trim();


  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highPrice: bidderPrice,
      highBidder: bidderName
    }
    )

    // Log the new High Price

    console.log(highPrice);
    // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)
    highBidder = bidderName;
    highPrice = parseInt(bidderPrice);

    // Change the HTML to reflect the new high price and bidder
    $('#highest-bidder').html(highBidder);
    $('#highest-price').html(highPrice);
  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
