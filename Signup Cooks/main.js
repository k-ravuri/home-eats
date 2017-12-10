  var config = {
    apiKey: "AIzaSyCC5GUnNs8zNRk1vuQblo9rw9b673dc_E0",
    authDomain: "homeatcollege.firebaseapp.com",
    databaseURL: "https://homeatcollege.firebaseio.com",
    projectId: "homeatcollege",
    storageBucket: "homeatcollege.appspot.com",
    messagingSenderId: "149969533931"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Cooks');


// Listen for form submit
document.getElementById('SignUp').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var address = getInputVal('address');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var password = getInputVal('password');
  var cuisine = getInputVal('cuisine');

  // Save message
  saveMessage(name, address, email, phone, cuisine, password);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('SignUp').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
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