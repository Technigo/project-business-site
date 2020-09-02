// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works


// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle

const question1 = document.getElementById("question1")
const question2 = document.getElementById("question2")
const question3 = document.getElementById("question3")

// question1.onclick = toggle
// question2.onclick = toggle
// question3.onclick = toggle

question1.onclick = function toggle() {
  this.classList.toggle("active")
  question2.classList.remove("active")
  question3.classList.remove("active")

}

question2.onclick = function toggle() {
  this.classList.toggle("active")
  question1.classList.remove("active")
  question3.classList.remove("active")

}

question3.onclick = function toggle() {
  this.classList.toggle("active")
  question1.classList.remove("active")
  question2.classList.remove("active")

}