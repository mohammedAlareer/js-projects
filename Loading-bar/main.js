const counterEl = document.querySelector(".counter");
const loadingFront = document.querySelector(".loading-bar-front");

let idx = 0


function updateNum(){
    counterEl.innerText = idx + "%";
    loadingFront.style.width = idx + "%";
    idx++
    if(idx < 101){
        setTimeout(updateNum,20)
    }
}

updateNum();