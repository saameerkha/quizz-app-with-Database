// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyAp9fOO_2GOJBphMaxYYAjqdVMJ7_PIU",
  authDomain: "quizappwithdatabase-7d6cf.firebaseapp.com",
  projectId: "quizappwithdatabase-7d6cf",
  storageBucket: "quizappwithdatabase-7d6cf.appspot.com",
  messagingSenderId: "356071396507",
  appId: "1:356071396507:web:66534891ef7a9a66c7623e",
  measurementId: "G-WWL8YZWB5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




var question = document.getElementById('question')
var option = document.getElementById('option')
var optionParent = document.getElementById('optionParent')
var CorrectAnswer = document.getElementById('CorrectAnswer')

var option = []

window.addOption = function(){
option.push(option.value)
console.log(option)
}


