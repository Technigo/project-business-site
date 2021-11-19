
// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("FAQ1").onclick = toggle
document.getElementById("FAQ2").onclick = toggle
document.getElementById("FAQ3").onclick = toggle
document.getElementById("FAQ4").onclick = toggle
document.getElementById("FAQ5").onclick = toggle


// A function that adds and remove the class "minus" on the section you click on.

document.getElementById("question1").onclick = () => {
  question1.classList.toggle("minus")
}

document.getElementById("question2").onclick = () => {
  question2.classList.toggle("minus")
}

document.getElementById("question3").onclick = () => {
  question3.classList.toggle("minus")
}

document.getElementById("question4").onclick = () => {
  question4.classList.toggle("minus")
}

document.getElementById("question5").onclick = () => {
  question5.classList.toggle("minus")
}