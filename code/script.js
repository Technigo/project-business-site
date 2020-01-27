// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

/*
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("question1").onclick = toggle

*/

console.log(this)

const question1 = document.getElementById("question1")
const question2 = document.getElementById("question2")
const question3 = document.getElementById("question3")


function toggleActive() {
  this.classList.toggle('active')
}

question1.onclick = toggleActive
question2.onclick = toggleActive
question3.onclick = toggleActive

