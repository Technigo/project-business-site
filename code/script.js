// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggleAnswer1() {
  this.classList.toggle("active")
}

function toggleAnswer2() {
  this.classList.toggle("active")
}

function toggleAnswer3() {
  this.classList.toggle("active")
}

function toggleAnswer4() {
  this.classList.toggle("active")
}

function toggleNavbar() {
  this.classList.toggle("open")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggleAnswer1

document.getElementById("section2").onclick = toggleAnswer2

document.getElementById("section3").onclick = toggleAnswer3

document.getElementById("section4").onclick = toggleAnswer4

document.getElementById("menu").onclick = toggleNavbar
