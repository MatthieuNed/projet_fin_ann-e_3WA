import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase.js";

const firebaseConfig = {
  apiKey: "AIzaSyDr0gtXkIh3m48PU7r3suKA7wgk-XaAN8c",
  authDomain: "contactform-d73e2.firebaseapp.com",
  projectId: "contactform-d73e2",
  storageBucket: "contactform-d73e2.appspot.com",
  messagingSenderId: "165778799746",
  appId: "1:165778799746:web:ffda93f92b81e6c25d089b"
};

const firebase = initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("infos")

document.querySelector(".contactForm").addEventListener("submit",submitForm);

function submitForm(e) {
  e.PreventDefault();
  
  let lastName = document.querySelector(".lastName").value;
  let firstName = document.querySelector(".firstName").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  saveContactInfo(lastName,firstName,email,message);

  document.querySelector(".contactForm")
}

function saveContactInfo(lastName, firstName, email, message) {
  let newContactInfo = contactInfo.push;

  newContactInfo.set({
    lastName: lastName,
    firstName: firstName,
    email: email,
    message: message,

  })
}