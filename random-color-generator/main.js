let container = document.querySelector(".container");
main();
let bodyEl = document.querySelector("body");
function main(){
createEL();
let containerColors = document.querySelectorAll(".color-container");
containerColors.forEach((containerColor) => {
    const newColor = randomColor();
    containerColor.style.backgroundColor = "#" + newColor;
    containerColor.innerText = "#" + newColor;
    containerColor.addEventListener("click",() => {
        bodyEl.style.backgroundColor = "#" + newColor;
    })
});
setTimeout(() => {
    main();
},400)
}
function randomColor(){
    let chars = "0123456789abcdef"
    let charCode = 6;
    let color = "";
    for (let index = 0; index < charCode; index++) {
        let randomChar = Math.floor(Math.random()*chars.length);
        color += chars[randomChar];
    }
    return color;
}

function createEL(){
    for (let index = 0; index < 30; index++) {
        let containerColor = document.createElement("div");
        containerColor.classList.add("container-color");
        container.appendChild(containerColor);
    }
}