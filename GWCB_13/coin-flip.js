      function random(){
        return Math.floor((Math.random() * 2) );
      }


    // Coin Flip JavaScript
    // These variables are declared for us.
    var headsCount = 0;
    var tailsCount = 0;
    var wins = 0;
    var losses = 0;

    function flipThatCoin(result){
        //computer's guess
        var randomNumber = random();

        if(randomNumber === 0){

          $('#coin-image').html('<img alt="heads" src="http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg">')
          }else{
            $('#coin-image').html('<img alt="heads" src="http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg">')
          }

          if(randomNumber === result){
            console.log('you won');
            wins++
            $('#wins').html(`<h3>${wins}<h3>`)
          }else{
            console.log('you lost');
            losses++
            $('#losses').html(`<h3>${losses}<h3>`)
          }


      //  STEP THREE:

        // If result is equal to randomNumber, do the following:

          //  Increment wins by one.
          //  Find the div with an id of win-lose. Update it with an h2 of "Winner!"
          //  Find the div with an id of wins. Update it with the value of the wins variable.

        // Else:

          //  Increment losses by one.
          //  Find the div with an id of win-lose. Update it with an h2 of "Loser!"
          //  Find the div with an id of losses. Update it with the value of the losses variable.

    }
    $( document ).ready(function() {



    // This on click function has been completed for us.
    $("#heads").on("click", function() {
      headsCount++;
      $("#heads-chosen").html(headsCount);
      $("#guess").html("<b>Heads</b>");
      flipThatCoin(0);
      console.log('flipped')
    });

    $("#tails").on("click", function() {

      tailsCount++;
      $("#tails-chosen").html(tailsCount);
      $("#guess").html("<b>Tails</b>");
      flipThatCoin(1);
      console.log('flipped')

    });

    });
