const question1 = document.getElementById("section1")
const question2 = document.getElementById("section2")
const question3 = document.getElementById("section3")
const question4 = document.getElementById("section4")
const question5 = document.getElementById("section5")

question1.onclick = toggle
question2.onclick = toggle
question3.onclick = toggle
question4.onclick = toggle
question5.onclick = toggle

// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle
