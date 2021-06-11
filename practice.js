var firebaseConfig = {
    apiKey: "AIzaSyBxONGus_Qns-VBW3afYB69eOzZfl8FaI",
    authDomain: "kwitter-5d6d1.firebaseapp.com",
    databaseURL: "https://kwitter-5d6d1-default-rtdb.firebaseio.com",
    projectId: "kwitter-5d6d1",
    storageBucket: "kwitter-5d6d1.appspot.com",
    messagingSenderId: "1031080137326",
    appId: "1:1031080137326:web:97f3b46cdbb0795b67cc7f",
    measurementId: "G-FPSR5MY432"
  };
  firebase.initializeApp(firebaseConfig);
  function addusername(){
      e=document.getElementById("usernameinput").value;
      localStorage.setItem("Username",e);
      firebase.database().ref("/").child("123").update({
          Username: e
      });
  }
  function retrieve(){
    firebase.database().ref("/").child("123").on("value",function(snapshot){
        console.log(snapshot.val())
    })
  }