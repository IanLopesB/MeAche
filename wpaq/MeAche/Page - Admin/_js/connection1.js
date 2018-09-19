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
  var recommendations = firebase.database().ref("recommendations");

  // Get a reference to the recommendations object of your Firebase.
  // Note: this doesn't exist yet. But when we write to our Firebase using
  // this reference, it will create this object for us!
  var recommendations = myFirebase.child("recommendations");

  // Push our first recommendation to the end of the list and assign it a
  // unique ID automatically.
  recommendations.push({
    "title": "The danger of a single story",
    "presenter": "Chimamanda Ngozi Adichie",
    "link": "https://www.ted.com/talks/chimamanda_adichie_the_danger_of_a_single_story"
  });
