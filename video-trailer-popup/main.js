let btn = document.querySelector("button");
let trailarEl = document.querySelector(".trailer-container");
let iconClose = document.querySelector(".close-icon");
let videoEl = document.querySelector("video");

btn.addEventListener("click",() => {
    trailarEl.classList.remove("active");
});

iconClose.addEventListener("click", () => {
    trailarEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;

});
