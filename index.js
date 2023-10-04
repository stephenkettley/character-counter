const textAreaElement = document.getElementById("text-area");
const totalCounterElement = document.getElementById("total-counter");
const remainingCounterElement = document.getElementById("remaining-counter");
const characterMaxCount = textAreaElement.maxLength;

totalCounterElement.innerText = 0;
remainingCounterElement.innerText = characterMaxCount;

textAreaElement.addEventListener("keyup", updateCounter);

function updateCounter() {
  totalCounterElement.innerText = textAreaElement.value.length;
  remainingCounterElement.innerText =
    characterMaxCount - textAreaElement.value.length;
}
