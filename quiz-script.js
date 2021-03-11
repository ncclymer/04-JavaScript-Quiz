
const timerStart = 5;
let time = timerStart * 1;

var countdownEl = document.getElementById("timer");

var interval = setInterval(countdown, 1000);

function countdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

if (countdownEl === 0) {
    clearInterval(time);
    }
    console.log(time)
    
var startButton = document.querySelector(".start-btn");
startButton.addEventListener('click', countdown);