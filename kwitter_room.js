
const firebaseConfig = {
      apiKey: "AIzaSyA8oVVm14Lol-VE_7_rf4vRZhYSXiHEZEY",
      authDomain: "kwitter-c2953.firebaseapp.com",
      databaseURL: "https://kwitter-c2953-default-rtdb.firebaseio.com",
      projectId: "kwitter-c2953",
      storageBucket: "kwitter-c2953.appspot.com",
      messagingSenderId: "1045012114464",
      appId: "1:1045012114464:web:b16a02ff9e6bbe86b8a045"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
     user_name= localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

       function addRoom()
       {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                   purpose : "adding room name"
             });

             localStorage.setItem("room_name" , room_name);

             window.location = "kwitter_page.html";
       }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick=redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";
}

