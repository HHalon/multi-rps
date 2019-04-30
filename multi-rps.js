 // Initialize Firebase
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
  var rps = database.ref()
  var player = '';
 

  /*rps.on(
      "value",
      function(snapshot) {
          console.log(snapshot.val());

         if(snapshot.val().p1.login === false) { 
             player = "p1";
             database.ref('player/' + player).set({
                 login: true,
                 move: "",
             })};

         if(snapshot.val().p1.login === true && snapshot.val().p2.login === false) {
             player = "p2";
             database.ref('player/' + player).set({
                 login: true,
                 move: "",
             })
         }
         
      }
  )*/



  
//startGame: function();{
var p1Choice = '';
var p2Choice = '';
var wins = 0;
var loses = 0;
var ties = 0;

// choice array
var rps = ["rock","paper","scissors"];




//user choice
var move = userChoice
 console.log(move);
var userChoice = rock || papper || scissors;

// RPS image

//rock
var rock = $(".fa-hand-rock").on("click", function(){    
    //console.log("rock");

})

//paper
var papper = $(".fa-hand-paper").on("click", function(){
    console.log('paper')
})

//scissors

var scissors = $(".fa-hand-scissors").on("click", function(){
    //console.log("scissors")
})


//display user choice

//$('.userChoice').html(userChoice)


/*
if ((userChoice === "rock") || (userChoice === "papper") || (userChoice === "scissors")) {
    if((userChoice === "rock" && enemyChoice === "scissors") ||
    (userChoice === "scissors" && enemyChoice === "paper") ||
    (userChoice === "paper" && enemyChoice === "rock")) {
        wins++;
    }else if (userChoice === enemyChoice) {
        ties++;
    }else{
        losses++;
    }
}
*/