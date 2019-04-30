


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

  // Not e remember to create these variables in firebase

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
   })
