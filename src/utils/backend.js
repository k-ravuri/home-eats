import React from 'react';
import * as firebase from 'firebase';
<script src="https://www.gstatic.com/firebasejs/4.3.0/firebase.js"></script>

var config = {
   apiKey: "AIzaSyCC5GUnNs8zNRk1vuQblo9rw9b673dc_E0",
   authDomain: "homeatcollege.firebaseapp.com",
   databaseURL: "https://homeatcollege.firebaseio.com",
   projectId: "homeatcollege",
   storageBucket: "homeatcollege.appspot.com",
   messagingSenderId: "149969533931"
  };
firebase.initializeApp(config);

let cooks = firebase.database().ref().child("Cooks");
cooks.on('value', getData);

function getData(data){
  let cooklist = data.val();
  let keys = Object.keys(cooklist);
  let arr = []
  for(let i = 0; i < keys.length; i++){
    let k = keys[i];
    let lat = cooklist[k].lat;
    let long = cooklist[k].long;
    let cuisine = cooklist[k].Cuisine;
    arr[i] = [k, lat, long, cuisine];
    console.log("arr " + arr[i])
  }
  return arr;

}

export default {
  getData
}