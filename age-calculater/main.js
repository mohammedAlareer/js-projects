const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");





function calculateAge(){
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === ""){
        alert("please Enter your birthday");
    }else{
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"}`;

}
}


function getAge(birthdayValue){
    let now = new Date();
    let birthday = new Date(birthdayValue);
    let age = now.getFullYear() - birthday.getFullYear();
    let month = now.getMonth() - birthday.getMonth();
    if(month < 0 || (month===0 && now.getDate() < birthday.getDate())){
        age--;
    }
    return age;
}





btnEl.addEventListener("click", calculateAge);
