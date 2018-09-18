// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8fBbF_xn3q33YdNWY2oDCQ3D9QpNFPO4",
    authDomain: "me-ache-6c62e.firebaseapp.com",
    databaseURL: "https://me-ache-6c62e.firebaseio.com",
    projectId: "me-ache-6c62e",
    storageBucket: "me-ache-6c62e.appspot.com",
    messagingSenderId: "164197814660"
  };
  // Initialize your Firebase app
  firebase.initializeApp(config);

  // Reference to your entire Firebase database
  var products = firebase.database().ref("products");

  // Save a new recommendation to the database, using the input in the form
  var submitProducts = function () {

  // Get input values from each of the form elements
  var fname = $("#fname").val();
  var lname = $("#lname").val();
  var nasc = $("#nasc").val();

  var quantA = $("#quantA").val();
  var quantB = $("#quantB").val();

  // Push a new recommendation to the database using those values
  products.push({
    "First Name": fname,
    "Last Name": lname,
    "Nac": nasc,
    "Arroz": quantA,
    "Feijão": quantB
    });
  };

  // When the window is fully loaded, call this function.
  // Note: because we are attaching an event listener to a particular HTML element
  // in this function, we can't do that until the HTML element in question has
  // been loaded. Otherwise, we're attaching our listener to nothing, and no code
  // will run when the submit button is clicked.
  $(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#productsForm").submit(submitProducts);

});