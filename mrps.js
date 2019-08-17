


//initialize firbase
var config = {
    apiKey: "AIzaSyBcCcQC5NuPxAYd4ADCgabJNYUeaA2VO4w",
    authDomain: "rps-multi-bfae4.firebaseapp.com",
    databaseURL: "https://rps-multi-bfae4.firebaseio.com",
    projectId: "rps-multi-bfae4",
    storageBucket: "rps-multi-bfae4.appspot.com",
    messagingSenderId: "44966619607"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  
  // variables

  // Note remember to create these variables in firebase

  // players name input
  var name = "";

  // assignment for first palery
  var player1 = null;

  // assignment for second player
  var player2= null;

  // using booleans to handle log in
  var isPlayer1 = false;

  // player1 choice rps
  var  player1Choice = null;

  //player2 choice rps
  var player2Choice = null;

  // player1 wins
  var player1Wins = 0;

  // player1 losses
  var player1Loss = 0;

  // player2 wins
  var player2Wins = 0;

  // player2 losses
   var player2Loss = 0;


   // funtions on click
   //===================

   $("#submitName").on("click", function (event) {
       // prevent page from refreshing
       event.preventDefault();

       //get name from player 1 or 2

       name = $("#nameInput").val().trim();

       // assign name to player 1 or 2
       if (!player1) {
           // set first player name
        player1 = name;

        //  set first player tp present
        isplayer1 = true;

        // changed what is saved in firebase
        database.ref().update({
            player1: player1
        });

       }else{
           // second players name

           player2 = name;

           //set the first player to not present
           isPlayer1 = false;

           //change what is saved in firebase
           database.ref().update({
               player2: player2
           });
       }

       // add class to hide instruction
       $("#intructions").addClass("d-none");

       // remove class that hides the game
       $('#game').removeClass("d-none");

       // hide results of th round to each player
       if (isPlayer1 === true) {
           // show first player rock, paper, or sciccors
           $("#rpsFirstPlayerIcons").removeClass("invisible");

        //show first player chat
        $("#chatFirstPlayer").removeClass("invisible");
        
        //display wait status to the first player
        $("#player1Status").text('please wait');

       //display that the next user has yet to arrive
        $("#player2Status").text("has yet to arrive");
        }else{
            //show second player rock, paper scissors
            $("#rpsSecondPlayerIcons").removeClass("invisible");

            // show second player chat
            $("#chatSecondPlayer").removeClass("invisible");

            //display turn status for firstplayer
            $("#player2Status").text('it is now your turn');

            //display that the next player has yet to choose
            $("player1Status").text("is planning their next move");
        }
   });

   //player1 chooses rock, paper, or scissors
   //first player chooses rock
   $("#firstPlayerRockChoice").on("click", function (event){
       // prevent the page from refreshing
       event.preventDefault();

       // initialize the icon that was chosen
       player1Choice = "fa-hand-rock";

       //changed what is saved in firebase
       database.ref().update({
           player1Choice: player1Choice
       });
   });

   // first player chooses paper
   $('#firstPlayerPaperchoice').on("click", function (event){
       //prevent the page from refreshing
       event.preventDefault();

       //init the icon that was chosen
       player1Choice = "fa-hand-paper";

       //changed what is saved in firebase
       database.ref().update({
           player1Choice: player1Choice
       });
   });

   //first player chooses paper
   $("#firstPlayerScissorsChoice").on("click", function (event){
    //prevent page from refreshing
    event.preventDefault();

    // init the icon that was chosen
    player1Choice = "fa-hand-scissors";

    //changed what was saved in fire base
     database.ref().update({
        player1Choice: player1Choice
    });
  });

    // player2 chooses rock paper or scissors
    // player 2 chooses rock
    $("#secondPlayerRockChoice").on("click", function (event){
        // prevent the page from refreshing
        event.preventDefault();
 
        // initialize the icon that was chosen
        player2Choice = "fa-hand-rock";
 
        //changed what is saved in firebase
        database.ref().update({
            player2Choice: player2Choice
        });
    });

       // second player chooses paper
   $('#secondPlayerPaperchoice').on("click", function (event){
    //prevent the page from refreshing
    event.preventDefault();

    //init the icon that was chosen
    player2Choice = "fa-hand-paper";

    //changed what is saved in firebase
    database.ref().update({
        player2Choice: player2Choice
    });
    });

    //first player chooses paper
    $("#secondPlayerScissorsChoice").on("click", function (event){
    //prevent page from refreshing
    event.preventDefault();

    // init the icon that was chosen
    player2Choice = "fa-hand-scissors";

    //changed what was saved in fire base
    database.ref().update({
        player2Choice: player2Choice
    });
    });

    // when changes occur it will print them out to the console and html
    database.ref().on("value", function (snapshot){

        // print out data to the console
        console.log(snapshot.val());

        //update local variables with the data base

        let data = snapshot.val() || {};
        player1 = data.player1;
        player2 = data.player2;
        player1Choice = data.player1Choice;
        player2Choice = data.player2Choice;
        
    

    // change the html

    // if (player1 !=== null);
    $("#firstPlayer").text(data.player1);
    
    // if (player2 !== null)
    $("#secondPLayer").text(data.player2);

    // change status of players based on turn

    if ($("#player1Status").text === "please wait") {

        //display wait status for first player
        $("#player1Status").text === ("it is now your turn");

        // display that the next player has yet to arrive
        $("$#player1Status").text === ("player 2 turn")
    }

    // show the results of the round
    if (player1Choice && player2Choice){

    $("#player1Header").removeClass("invisible");

    // show first players choice of rock, paper, scissors

    $("#player1RoundChoice").removeClass("fa-hand-rock").removeClass("fa-hand-paper").removeClass("fa-hand-scissors").addClass("player1Choice");

    // show second player choice of rock paper scissors

    $("#player2RoundChoice").removeClass("fa-hand-rock").removeClass('fa-hand-paper').removeClass("fa-hand-scissors").addClass("player2Choice");

    //determin ties
    if (
        (player1Choice === "fa-hand-rock" && player2Choice === "fa-hand-rock") ||
        (player1Choice === "fa-hand-paper" && player2Choice === "fa-hand-paper") ||
        (player1Choice === 'fa-hand-scissors' && player2Choice === "fa-hand-scissors")
    ) {
        // lets player1 know that they tied
        $("#player1RoundResult").text("tied!");
        
        // lets player2 know that they tied
        $("#player2RoundResult").text("tied");
    
    // player1 wins and player 2 losses
    }else if (
        (player1Choice === "fa-hand-rock" && player2Choice === "fa-hand-scissors") ||
        (player1Choice === "fa-hand-paper" && player2Choice === "fa-hand-rock") ||
        (player1Choice === "fa-hand-scissors" && player2Choice === "fa-hand-paper")
    ) {
        // let player1 know that they won
        $(player1RoundResult).text("Winner!");

        // let player2 know that they lost
        $(player2RoundResults).text("Loser!");
    

    // transfer wins and losses
    //display player1 win
        if ($("#player1RoundResult").text === "Winner!") {
            // add win to player 1
             player1Wins++;

    // display player2 loss
        $("#player2RoundResult").text(player1Wins);
        
        //add player 2 losses
        player2Loss++;

        //display player 2 loss
        $("#player2Loses").text(player2LostRound);
        }
    } else if (
        // player 2 wins and player 1 losses
        (player2Choice === "fa-hand-rock" && player1Choice === "fa-hand-scissors") ||
        (player2Choice === "fa-hand-paper" && player1Choice === "fa-hand-rock") ||
        (player2Choice === "fa-hand-scissors" && player1Choice === "fa-hand-paper")
    ) {
        // let player 2 know that the won
        $("#player2RoundResults").text("Winner!");

        // let player 1 know that they lost
        $("#player1RoundResult").text("Losser!");

        // transfer wins and losses
        // display player 2 wins
        if ($("#player1RoundResult").text === "Loser!") {
            // add to player1 losses
            player1Loss++;
            $("#player1Loses").text(player1LostRound);

            // add to player 2 wins
            player2Wins++;

            // display wins for player2
            $("#player2Wins").text(player2Wins);
        }

    }
    // clear choices
    setTimeout(function (){
        // hide round results again
        $("#player1Header").addClass("invisible");
        $("#player2Header").addClass("invisible");

        //changed what is saved in firebase
        database.ref().update({
            player1Choice: null,
            player2Choice: null
        });
    }, 5000);
}
    // log errors to the console
    }, function (errorObject) {
        console.log("The error came from :" + errorObject.code);
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    //handles chat between players
    database.ref("/message").on("child_added", function (snapshot) {
        // print the data to the console
        console.log(snapshot.val());

        // build message
        $("#chatMessages").append("<p>" + snapshot.val().playerName + ": " + snapshot.val().message + "</p>") 
    });

    //after the user has left this will reset player 1
    database.ref("/player1").on("value", function (snapshot){
        // if data was deleted
        if (snapshot.exists()){return;}

        // restet game
        player1 = "";

        // change the of player 1 name
        $("#firstPlayer").text("Player 1");

        // reset the status
        // display wait status for first player
        $("#player1Status").text("please wait");

        //reset wins
        player1Wins = 0;
        // reset losses
        player1Loss = 0;

        //change the html for player 1

        $("#player1Wins").text("0");

        $("#player1Loss").text("0");
    });

    // after the user has left update player 2
    database.ref("/player2").on("value", function (snapshot){
        if(snapshot.exists()){return;}

        //reset the name
        player2= "";

        $("#firstPlayer").text("Player 1");

        // reset the status
        // display wait status for first player
        $("#player1Status").text("please wait");

        //reset wins
        player2Wins = 0;
        // reset losses
        player2Loss = 0;

        //change the html for player 1

        $("#player2Wins").text("0");

        $("#player2Loss").text("0");
        
    });

    // after the user has left this will update the player status wins and losses
    database.ref("/player2").on ("value", function (snapshot) {
        if(snapshot.exist()){return;}

        // reset the name
        player2 = "";

            //change the html of the player 1 name
    $("#secondPlayer").text("Player 2");

    //reset the status
    //display that the next player has yet to arrive
    $("#player2Status").text("has yet to arrive");

    //reset wins
    player2WinsRound = 0;
    //reset losses
    player2lostRound = 0;

    //change the html of the player 1 wins
    $("#player2Wins").text("0");

    //change the html of the player 1 wins
    $("#player2Loses").text("0");

});

//reset values after a player has left
window.addEventListener("beforeunload", function (event) {
    console.log("Made it to the next section")
    //remove message history
    database.ref("/messages").remove();

    //let players leave
    if (isPlayer1) {
        //remove player's 1 data
        database.ref("/player1").remove();
    } else {
        //remove player's 2 data
        database.ref("/player2").remove();
    }
});
    