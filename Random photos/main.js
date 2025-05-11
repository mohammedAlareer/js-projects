const container = document.querySelector(".container-photos");
const btn = document.querySelector(".btn");



btn.addEventListener("click" , (event) => {
    numPh  = 6
    addNewImage();
    });

function addNewImage(){
    for(let i = 0;i < numPh ;i++){
        let img =document.createElement("img");
        img.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
        container.appendChild(img);
    }
}