const imageContainerEl = document.querySelector(".container-image");
let prevEl = document.getElementById("prev");
let nextEl = document.getElementById("next");

let x = 0
let timer;
prevEl.addEventListener("click" , () => {
    clearTimeout(timer);
    x = x + 45;
    updateGallery();
});

nextEl.addEventListener("click",() => {
    clearTimeout(timer);
    x = x - 45;
    updateGallery();
});

function updateGallery(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer = setTimeout(() => {
        x = x - 45
        updateGallery();
    },3000);
}
updateGallery();
