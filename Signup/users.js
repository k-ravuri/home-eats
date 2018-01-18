var config = {
   apiKey: "AIzaSyCC5GUnNs8zNRk1vuQblo9rw9b673dc_E0",
   authDomain: "homeatcollege.firebaseapp.com",
   databaseURL: "https://homeatcollege.firebaseio.com",
   projectId: "homeatcollege",
   storageBucket: "homeatcollege.appspot.com",
   messagingSenderId: "149969533931"
  };
firebase.initializeApp(config);

var cooks = firebase.database().ref().child("Cooks");
cooks.on('value', getData);

function getData(data){
  var cooklist = data.val();
  var keys = Object.keys(cooklist);
  for(var i = 0; i < keys.length; i++){
    var k = keys[i];
    var lat = cooklist[k].lat;
    var long = cooklist[k].long;
    var cuisine = cooklist[k].Cuisine;
    console.log(k, lat, long, cuisine);
  }

}