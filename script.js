const dogButton = document.getElementById("memeButton");
const dogImageDiv = document.getElementById("memeImage");

const getNewMeme = () => {
  fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((json) => {
      dogImageDiv.innerHTML = `<img src="${json.url}" height="500" width="500">`;
    });
};

getNewMeme();
dogButton.onclick = () => getNewMeme();
