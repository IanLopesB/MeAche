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

  function process(quantA){
    var value = parseInt(document.getElementById("quantA").value);
    value += quantA;
    if(value < 1){
      document.getElementById("quantA").value = 0;
    }else{
    document.getElementById("quantA").value = value;
    }
  }

  // Save a new recommendation to the database, using the input in the form
  var submitProducts = function () {

  // Get input values from each of the form elements
  var arroz = $("#quantA").val();

  // Push a new recommendation to the database using those values
  products.push({
    "Arroz": arroz
    });
  };

  // Get the single most recent recommendation from the database and
  // update the table with its values. This is called every time the child_added
  // event is triggered on the recommendations Firebase reference, which means
  // that this will update EVEN IF you don't refresh the page. Magic.
  products.limitToLast(1).on('child_added', function(childSnapshot) {
  // Get the recommendation data from the most recent snapshot of data
  // added to the recommendations list in Firebase
  products = childSnapshot.val();

  // Update the HTML to display the recommendation text
  $("#checkb1").html(products.title)
});

  // When the window is fully loaded, call this function.
  // Note: because we are attaching an event listener to a particular HTML element
  // in this function, we can't do that until the HTML element in question has
  // been loaded. Otherwise, we're attaching our listener to nothing, and no code
  // will run when the submit button is clicked.
  $(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#prato1").submit(submitProducts);

});