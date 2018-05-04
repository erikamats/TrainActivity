$(document).ready(function(){
    $('.parallax').parallax();
    $('.collapsible').collapsible();
  });
      

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBEOa7vdYxNbMQZ9otA425rO2PwgqX9Xm8",
    authDomain: "project-1-f9351.firebaseapp.com",
    databaseURL: "https://project-1-f9351.firebaseio.com",
    projectId: "project-1-f9351",
    storageBucket: "project-1-f9351.appspot.com",
    messagingSenderId: "197704962174"
  };


  firebase.initializeApp(config);

  var database = firebase.database();
  var trainName = "";
  var destination ="";
  var firstTime = "";
  var frequency = "";

 $("#addTrain").on("click", function(snapshot) {
    event.preventDefault();

    trainName = $("#train_name").val().trim();
    destination =$("#destination_name").val().trim();
    firstTime =$("#first_train").val().trim();
    frequency =$("#frequency").val().trim();

console.log(trainName);

  });




