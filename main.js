// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyDIU4otdbs35G88kNpdJKZIttWTNMd-qGs",
  authDomain: "contactform-f0a28.firebaseapp.com",
  databaseURL: "https://contactform-f0a28-default-rtdb.firebaseio.com",
  projectId: "contactform-f0a28",
  storageBucket: "contactform-f0a28.appspot.com",
  messagingSenderId: "467495307485",
  appId: "1:467495307485:web:1042ec4896a426c12b3334",
    

  };

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}