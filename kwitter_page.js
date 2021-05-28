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
//YOUR FIREBASE LINKS

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      });
      document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";  
}