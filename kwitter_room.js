const firebaseConfig = {
      apiKey: "AIzaSyD1Hn8FjGvX-bigXPuJHzj8JqD2dkDKEyI",
      authDomain: "kwitter-5cf82.firebaseapp.com",
      databaseURL: "https://kwitter-5cf82-default-rtdb.firebaseio.com",
      projectId: "kwitter-5cf82",
      storageBucket: "kwitter-5cf82.appspot.com",
      messagingSenderId: "898447634172",
      appId: "1:898447634172:web:3410770a7b6bdb2534f179",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
