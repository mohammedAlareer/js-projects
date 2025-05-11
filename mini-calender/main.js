const monthName = document.querySelector(".mouth-name");
const weekDay = document.querySelector(".week-day");
const monthDay = document.querySelector(".mouth-day");
const year = document.querySelector(".year");

const date =new Date();
monthName.innerHTML = date.toLocaleString("en" , {
    month:"long"
});
weekDay.innerHTML =  date.toLocaleString("en" , {
    weekday:"long"
});

monthDay.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();
