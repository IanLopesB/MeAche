  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8fBbF_xn3q33YdNWY2oDCQ3D9QpNFPO4",
    authDomain: "me-ache-6c62e.firebaseapp.com",
    databaseURL: "https://me-ache-6c62e.firebaseio.com",
    projectId: "me-ache-6c62e",
    storageBucket: "me-ache-6c62e.appspot.com",
    messagingSenderId: "164197814660"
  };
  firebase.initializeApp(config);

  // Get elements
  const preObject = document.getElementById('object');
  const ulList = document.getElementById('list');

  // Create references
  const dbRefObject = firebase.database().ref().child('object'); 
  const dbRefList = dbRefObject.child('hobbies');

  // Sync object changes
  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });

  // Sync list changes
  dbRefList.on('child_added', snap => {

    const li = document.createElement('li');
    li.innerText = snap.val();
    ulList.appendChild(li);
  });

  dbRefList.on('child_changed', snap => {

    const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();

  });

  dbRefList.on('child_removed', snap => {

    const liToRemove = document.getElementById(snap.key);
    liToRemove.remove();

  });

  



