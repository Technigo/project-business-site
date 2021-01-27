
// Selects an HTML element, and calls a function which will be executed when the element is clicked.


const didYouKnow = document.getElementById("did-you-know");
const factDidYouKnow = document.getElementById("fact-did-you-know");

const defintionClick = document.getElementById("definition");
const factDefintion = document.getElementById("fact-definition");


didYouKnow.addEventListener("click", ()=> {
  factDidYouKnow.classList.toggle("selected");
})

defintionClick.addEventListener("click", ()=> {
  factDefintion.classList.toggle("selected");
})

