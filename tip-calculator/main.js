const btnEl = document.getElementById("calculate");
const billEL = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const totalEl = document.getElementById("total");

function calculateTotal(){
    const billValue = billEL.value;
    const tipValue = tipEl.value;
    const result = billValue * (1 + tipValue / 100);
    totalEl.innerText = result.toFixed(2);
}


btnEl.addEventListener("click",calculateTotal);