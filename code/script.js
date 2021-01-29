// A function that adds and remove the class "open" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

function toggle() {
  this.classList.toggle("open")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

document.getElementById("question-1").onclick = toggle
document.getElementById("question-2").onclick = toggle

const answer1 = document.getElementById('answer-1');
const answer2 = document.getElementById('answer-2');
