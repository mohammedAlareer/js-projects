const containerEl = document.querySelector(".container");
const carrer = ["YOTUBER","WEB DEVELOPER","FREELANCER","INSTRCTOR"]
carrerindex = 0 ;
charindex = 0;
function update(){
charindex++;
    containerEl.innerHTML = `
<h1>I am ${carrer[carrerindex].slice(0,1) === "I" ? "AN" :"A"} ${carrer[carrerindex].slice(0,charindex)}</h1>`
if(carrer[carrerindex].length === charindex) {
    carrerindex++
    charindex = 0;
if(carrer.length === carrerindex) carrerindex =0;
};
setTimeout(update,200)
}

update();