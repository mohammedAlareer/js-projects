const btnEl = document.getElementById("btn");
const emojiName = document.getElementById("emoji-name");

const emoji =[];

async function getEmoji(){
    const response = await fetch("https://emoji-api.com/emojis?access_key=371ac6d1ad8822503642dfdb5e973c03c5f72109");
    data = await response.json();

    for(let i =0; i <1500;i++){
        emoji.push({
            emojiName:data[i].character,
            emojiCode:data[i].unicodeName,
        });
    }
}

getEmoji();

btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;

    const cleanName = emoji[randomNum].emojiCode.replace(/^E[0-9.]+\s/, '');
    emojiName.innerText = cleanName;
});
