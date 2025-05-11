
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");


let newYearTime = new Date("jan 1,2026 00:00:00").getTime();
function update(){
    let now = new Date().getTime();
    let gap = newYearTime - now;
    
    const seconds = 1000;
    const minute = seconds * 60;
    const hour = minute * 60;
    const days = hour * 24;

    const d = Math.floor(gap / days);
    const h = Math.floor((gap % days) / hour);
    const m = Math.floor((gap % hour ) / minute);
    const s = Math.floor((gap % minute) / seconds)

    dayEl.innerHTML=d;
    hourEl.innerHTML=h;
    minuteEl.innerHTML=m;
    secondEl.innerHTML=s;
    setTimeout(update,1000);


}
update()
