var quizBody = document.getElementById('main');
var scoreboard = document.getElementById('scoreboard');
var inputBtn = document.getElementById('input');
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

function makeQuiz(){
    let build = [];

    questions.forEach(
        (currentQuestion,)
    )
}

function scoreBoardResults(){}

makeQuiz();

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

inputBtn.addEventListener('click', scoreBoardResults);

var questions = [
    {
        question1: "Commonly used data types DO NOT include:?",
        answers: {
            a: "1. strings",
            b: "2. booleans",
            c: "3. alerts",
            d: "4. numbers"
        },
        answer: "c"
    },
    {
        question2: "The condition in an if/else statement is enclosed within ____?",
        answers: {
            a: "1. quotes",
            b: "2. curly brackets",
            c: "3. parentheses",
            d: "4. square brackets"
        },
        answer: "d"

    },
    {
        question2: "Arrays in JavaScript can be used to store ____.",
        answers: {
            a: "1. numbers and strings",
            b: "2. other arrays",
            c: "3. booleans",
            d: "4. all of the above"
        },
        answer: "c"

    },
    {
        question2: "String values must be enclosed within _____ when being assinged to variables.",
        answers: {
            a: "1. commas",
            b: "2. curly brackets",
            c: "3. quotes",
            d: "4. parentheses"
        },
        answer: "c"

    },
    {
        question2: "A very useful tool used during development and debugging for printing content to the debugger is:____?",
        answers: {
            a: "1. JavaScript",
            b: "2. terminal/bash",
            c: "3. for loops",
            d: "4. console.log"
        },
        answer: "d"

    },
]
