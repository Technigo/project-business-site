// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
//function toggle() {
  //this.classList.toggle("active")
//}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle





const q1 = document.getElementById("questionOne")
const a1 = document.getElementById("answerOne")

const q2 = document.getElementById("questionTwo")
const a2 = document.getElementById("answerTwo")

const q3 = document.getElementById("questionThree")
const a3 = document.getElementById("answerThree")

q1.addEventListener("click", () => {
 a1.classList.toggle("answerShow")
})

q2.addEventListener("click", () => {
a2.classList.toggle("answerShowTwo")
})

q3.addEventListener("click", () => {
    a3.classList.toggle("answerShowThree")
})