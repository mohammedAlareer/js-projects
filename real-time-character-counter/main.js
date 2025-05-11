const textareaEL = document.getElementById("textarea");
const totalCharEl = document.getElementById("total-char");
const totalRemEl =document.getElementById("total-rem")

textareaEL.addEventListener("keyup",() => {
    updateCounter();
});
updateCounter()
function updateCounter(){
    totalCharEl.innerText = textareaEL.value.length;
    totalRemEl.innerText = textareaEL.getAttribute("maxlength") - textareaEL.value.length
}
