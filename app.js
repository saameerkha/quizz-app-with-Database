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







var questions = [
    {
      numb: 1,
      question: "what is your my language?",
      answer: "English",
      options: [
        "urdu",
        "punjabi",
        "English",
        "sindhi",
      ],
    },
    {
      numb: 2,
      question: "what is your my shoes?",
      answer: "sports shoes",
      options: [
        "sports shoes ",
        "nike shoes",
        " men sneakers shoes ",
        "women sneakers shoes",
      ],
    },
    {
      numb: 3,
      question: "What Your favorite Car?",
      answer: "Sport",
      options: [
         "honda",
        "Civic",
        "Sport",
        "Carolla",
      ],
    },
    {
      numb: 4,
      question: "What Your Subjuct?",
      answer: "Chemistry",
      options: [
        "Urdu",
        "Islamiyat",
        "English",
        "Chemistry",
      ],
    },
    {
      numb: 5,
      question: "What your Favourite Food",
      answer: "pievlue",
      options: [
        "Burger",
        "pievlue",
        "Pizza",
        "Pasta",
      ],
    },
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
  ];
  
  var question = document.getElementById("question");
  var questionNum = document.getElementById("questionNum");
  var ansParent = document.getElementById("ansParent");
  var main = document.getElementById("main");
  var indexNum = 0;
  var marks = 0;
  
  function showQuestion() {
    question.innerHTML = questions[indexNum].question;
    questionNum.innerHTML =
      "Question # " + (indexNum + 1) + "/" + questions.length;
      ansParent.innerHTML=''
    for (var i = 0; i < questions[indexNum].options.length; i++) {
        ansParent.innerHTML += `<div class="col-md-6 py-2">
      <button onclick="checkAns ('${questions[indexNum].options[i]}','${questions[indexNum].answer}')" class="btn btn-secondary px-5 rounded-pill w-50">
      ${questions[indexNum].options[i]}
      </button>
  </div>`
    }
  }
  showQuestion();
  
  function nextQuestion() {
    indexNum++;
    showQuestion();
  }
  
  function checkAns(a, b) {
    if (a == b) {
      marks++;
    }
    if(indexNum + 1 == questions.length) {
        main.innerHTML=` <h1 class="text-white bg-danger border border-secondary text-center">
        YOur Marks is ${marks}
        </h1>`
    }else{
    nextQuestion();

    }
  }