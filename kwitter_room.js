
const firebaseConfig = {
      apiKey: "AIzaSyAG4KR5cv1SUVugNGySLoNAz-ojNz6ttAE",
      authDomain: "kwittter-app.firebaseapp.com",
      databaseURL: "https://kwittter-app-default-rtdb.firebaseio.com",
      projectId: "kwittter-app",
      storageBucket: "kwittter-app.appspot.com",
      messagingSenderId: "427846172316",
      appId: "1:427846172316:web:a9cafe2529dd79fc827759"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
