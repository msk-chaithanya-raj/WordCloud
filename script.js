let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself"];

let wordsContainerEl = document.getElementById("wordsContainer");
for (let word of wordCloud) {
  let wordEl = document.createElement("span");
  let randomFontSize = Math.ceil(Math.random() * 30) + "px";
  wordEl.style.fontSize = randomFontSize;
  wordEl.classList.add("m-3");
  wordEl.textContent = word;
  wordsContainerEl.appendChild(wordEl);
}

let addBtnEl = document.getElementById("addBtn");
let errorMsgEl = document.getElementById("errorMsg");
let userInputEl = document.getElementById("userInput");
errorMsgEl.textContent = "";

addBtnEl.onclick = function () {
  if (userInputEl.value === "") {
    errorMsgEl.textContent = "Please enter a word";
  } else {
    let wordEl1 = document.createElement("span");
    let randomFontSize = Math.ceil(Math.random() * 30) + "px";
    wordEl1.style.fontSize = randomFontSize;
    wordEl1.classList.add("m-3");
    wordEl1.textContent = userInputEl.value;
    wordsContainerEl.appendChild(wordEl1);
    errorMsgEl.textContent = "";
    userInputEl.value = "";
  }
};
