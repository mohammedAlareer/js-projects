let container=document.querySelector(".container");
let leftEl = document.querySelector(".left");
let rightEl = document.querySelector(".right");


leftEl.addEventListener("mouseenter" , () => {
    container.classList.add("active-left");
});

leftEl.addEventListener("mouseleave" , () => {
    container.classList.remove("active-left");
});

rightEl.addEventListener("mouseenter" ,() => {
    container.classList.add("active-right");
});

rightEl.addEventListener("mouseleave" ,() => {
    container.classList.remove("active-right");
});
