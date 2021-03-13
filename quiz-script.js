
window.onload = function() {

//quiz timer
var timeEl = document.querySelector(".timer");
var mainEl = document.getElementById("quiz-text");
var startButton = document.querySelector(".start-btn");

function setTime() {
    startButton.disabled = true;
    var secondsLeft = 5;
    var timerInterval = setInterval(function() {
    secondsLeft--;    
    timeEl.textContent = "Seconds left until quiz ends! " + secondsLeft + ".";

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      startButton.disabled = false;
      // Calls function to create and append image
      sendMessage(); //create function call for final score and initals.
    }
  }, 1000);
}

//quiz question array
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

const answersUl = document.getElementById('answers');

function showQuestion() {
   const quizDisplayP = document.getElementById('askQuestion');
   
   questions.forEach((_question) => {
    quizDisplayP.innerHTML = _question.question;
    const options = _question.options;
    options.forEach((option) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(option));
    answersUl.appendChild(li);
    })
   })
}

// for loop that cycles through questions
for (var i = 0; i < questions.length; i++) {
    questions[i] //inner.HTML updates as we go through the array.
}


//Scoreboard and initals
const scores = [];
const initals = document.getElementById('initials');
const initialsList = document.getElementById('initialsList');

function addInitals () {
  const userInput = initals.value;
   if (userInput == "") {
      return
  }
   else {
    scores.push(userInput);
    initialsList.innerHTML = "";
    scores.forEach((_score) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(_score));
        initialsList.appendChild(li);
    })
  }
}
var submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', addInitals);

//quiz (re)start button event
startButton.addEventListener('click', setTime);
showQuestion();
}