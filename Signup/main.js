// Initialize Firebase (ADD YOUR OWN DATA)
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
var messagesRef = firebase.database().ref('Users');


// Listen for form submit
document.getElementById('SignUp').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('address');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var password = getInputVal('password');

  // Save message
  saveMessage(name, company, email, phone, password);

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
function saveMessage(name, address, email, phone, password){
  alert("Hope you're hungry!");
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    address:address,
    email:email,
    phone:phone,
    password:password,
  });
}

var cooks = firebase.database().ref().child("Cooks");
cooks.on('value', getData);

function getData(data){
  var cooklist = data.val();
  var keys = Object.keys(cooklist);
  var arr = []
  for(var i = 0; i < keys.length; i++){
    var k = keys[i];
    var lat = cooklist[k].lat;
    var long = cooklist[k].long;
    var cuisine = cooklist[k].Cuisine;
    arr[i] = ("Name: " + k + ", Latitude: " + lat + ", Longitutde: " + long + ", Cuisine: " + cuisine + "\n");
  }
  console.log(arr);
  return arr;

}