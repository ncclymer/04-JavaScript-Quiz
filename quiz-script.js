
window.onload = function() {


//quiz timer
var timeEl = document.querySelector(".timer");
var mainEl = document.getElementById("quiz-text");
var startButton = document.querySelector(".start-btn");

function setTime() {
    startButton.disabled = true;
    // startButton.style.display = 'none';
    var secondsLeft = 5;
    var timerInterval = setInterval(function() {
    secondsLeft--;    
    timeEl.textContent = "Seconds left until quiz ends! " + secondsLeft + ".";

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      startButton.disabled = false;
      // Calls function to create and append image
      sendMessage(); //create function call for final score and initals.
    }
  }, 1000);
}

var questions = [
    {
        question: "Commonly used data types DO NOT include:?",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed within ____?",
        options: ["quotes","curly brackets", "parentheses", "square brackets"],
        answer: "curley brackets",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },
    {
        question: "String values must be enclosed within _____ when being assinged to variables.",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:____?",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log",
    }
];

function showQuestion() {
    var currentQuestion = questions[currentIndex]

    currentQuestion.questions.forEach(element => {
        
    });
}

// if(questionsIndex === questions.length){
//    quizEnd()
// } else {
//     showQuestion();
// }



// for loop that cycles through questions
for (var i = 0; i < questions.length; i++) {
    questions[i] //inner.HTML updates as we go through the array.
}


//Scoreboard and initals
const scores = [];
const initals = document.getElementById('initals');
const initialsList = document.getElementById('initalsList');

function addInitals () {
  const userInput = initals.value;
   if (userInput == "") {
      return
  }
  else {scores.push(userInput);
}
}

var submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', addInitals);


startButton.addEventListener('click', setTime);
}