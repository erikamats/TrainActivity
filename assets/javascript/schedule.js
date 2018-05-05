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
console.log(destination);
console.log(firstTime);
console.log(frequency);

// //store info to firebase when submit

//clear the values
  var newTrain = {

    name: trainName,
    place: destination,
    firstTrain: firstTime,
    occurance: frequency,

  }

  database.ref().push(newTrain);

  $("#train_name").val("");

  $("#frequency").val("");

  $("#destination_name").val("");

  $("#first_train").val("");


  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    var name1 = childSnapshot.val().name;
    var place1 = childSnapshot.val().place;
    var freq = childSnapshot.val().occurance;
  

    console.log(name1);
    console.log(place1);
    console.log(freq);


    // difference - first arrival til now in mins
    var timeConv = moment(firstTime,"hh:mm");

    // moment(firstTime,"hh:mm").fromNow(true);

    console.log("time difference "  + timeConv)

    var now = moment();
    console.log("Current time " + now);

    var timeDiff = moment().diff(moment(timeConv), "minutes");
    console.log("difference in time: " + timeDiff);
    
    
    // how much time has past since last arrival (mod)
    var timePast = (timeDiff % freq);
    console.log( "minutes past since last train: " + timePast);
  

    var minsAway = freq - timePast;

    console.log("minutes from arriving:" + minsAway);

    //next arrival (time)

    var nextChoo = moment().add(minsAway, "minutes");

    console.log("next arrival: " + moment(nextChoo).format("hh:mm"));

    var nextArrival = moment(nextChoo).format("hh:mm");

    
   
// // update html

    $(".scheduleDisplay").append("<tr><td>" + name1 + "</td><td>"  + place1 + "</td><td>"  + freq + "</td><td>"  + nextArrival + "</td><td>" + minsAway  +" mins"+ "</td></tr>" );

  });

  });




