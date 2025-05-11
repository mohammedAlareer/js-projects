let containerEl = document.querySelector(".container");
let magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click" , () => {
    containerEl.classList.toggle("active");
});



