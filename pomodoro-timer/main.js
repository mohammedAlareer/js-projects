const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let timeLeft = 1500;
let interval;

function upadateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime=`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerEl.innerHTML = formattedTime;

}


function startTimer(){
interval = setInterval(() => {
    timeLeft--;
    upadateTimer();
    if(timeLeft === 0){
        alert("Time's up! ");
        timeLeft =1500
        clearInterval(interval);

    }

},1000);


}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    upadateTimer();

}

startEl.addEventListener("click",startTimer);
stopEl.addEventListener("click",stopTimer);
resetEl.addEventListener("click",resetTimer);


