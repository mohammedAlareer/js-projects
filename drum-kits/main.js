const kits = ["crash", "kick", "snare", "tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
    containerEl.appendChild(btnEl);
    const radioEl = document.createElement("audio");
    radioEl.src ="sounds/"+kit+".mp3";
    containerEl.appendChild(radioEl);
    btnEl.addEventListener("click",() => {
        radioEl.play();
    });
    window.addEventListener("keydown", (event) => {
        if (event.key === kit.slice(0, 1)) {
          radioEl.play();
          btnEl.style.transform = "scale(0.9)";
            setTimeout(()=>{
                btnEl.style.transform = "scale(1)"
            },100)
        }
      });
    
});