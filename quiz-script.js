window.onload = function () {

    var timeEl = document.querySelector(".timer");
    var mainEl = document.getElementById("quiz-text");
    var startButton = document.querySelector(".start-btn");
    var currentIndx = 0;
    var score = 0;
    var secondsLeft = 60;

    function cleanPage() {
        if (startButton.disabled = false);
            document.getElementsById(askQuestion).innerHTML = "";
        cleanPage();
        console.log(cleanPage);
    }

    //quiz timer
    function setTime() {
        startButton.disabled = true;
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = "Seconds left until quiz ends! " + secondsLeft + ".";

            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                startButton.disabled = false;
                addInitals();
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
            options: ["quotes", "curley brackets", "parentheses", "square brackets"],
            answer: "parentheses",
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
        quizDisplayP.innerHTML = questions[currentIndx].question

        // for loop that cycles through questions
        for (var i = 0; i < questions[currentIndx].options.length; i++) {
            const options = questions[currentIndx].options[i]
            const li = document.createElement("li");
            li.setAttribute("class", "options");
            li.appendChild(document.createTextNode(options));
            answersUl.appendChild(li);
            var elements = document.getElementsByClassName("options");
            elements[i].addEventListener('click', function () {
                answersUl.innerHTML = "";


                // grab the li that was clicked and compare it to the current question's answer 
                var selecedOption = this.innerText;
                var correctOption = questions[currentIndx].answer
                console.log(selecedOption, correctOption)
                // conditional statement, if correct do somethitng else do somethting 
                if (selecedOption === correctOption) {
                    alert("correct")
                    score = score + 1;
                    localStorage.setItem("totalScore", JSON.stringify(score))
                } else {
                    secondsLeft = secondsLeft - 10;
                    alert("incorrect")
                }
                currentIndx++
                showQuestion();
            });
        }
    }

    //Scoreboard and initals
    const scores = [];
    const initals = document.getElementById('initials');
    const initialsList = document.getElementById('initialsList');

    function addInitals() {
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