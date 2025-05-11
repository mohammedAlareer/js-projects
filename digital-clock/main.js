const hEl = document.getElementById("hours");
const mEl = document.getElementById("minutes");
const sEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

updateClock();

function updateClock(){
    let h = new Date().getHours();
    let m =new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12){
        h = h -12;
        ampm ="PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    hEl.innerText = h;
    mEl.innerText = m;
    sEl.innerText = s;
    ampmEl.innerText =ampm;

    setTimeout(() => {
        updateClock();

    },1000)
}
