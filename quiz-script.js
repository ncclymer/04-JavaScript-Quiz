// Selects element by class
var timeEl = document.querySelector(".timer");

// Selects element by id
var mainEl = document.getElementById("quiz-text");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Seconds left until quiz ends! " + secondsLeft + ".";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// var question1 = 
//     {
//         question1: "Commonly used data types DO NOT include:?",
//         answers: {
//             a: "1. strings",
//             b: "2. booleans",
//             c: "3. alerts",
//             d: "4. numbers"
//         },
//         answer: "c"
//     }

//look at creating idividual arrays for each answer data set

var questions = [
    {
        question1: "Commonly used data types DO NOT include:?",
        answers: {
            a: "1. strings",
            b: "2. booleans",
            c: "3. alerts",
            d: "4. numbers"
        },
        answer: "c" //alerts
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

    }
];

// for loop that cycles through questions
for (var i = 0; i < questions.length; i++) {
    questions[i] //inner.HTML updates as we go through the array.
}

var startButton = document.querySelector(".start-btn");
startButton.addEventListener('click', setTime);