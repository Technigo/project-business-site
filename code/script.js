// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggleAccordion() {
  this.classList.toggle("open")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
const section1 = document.getElementById("section1")
// document.getElementById("section1").onclick = toggle
section1.onclick = toggleAccordion

const section2 = document.getElementById("section2")
section2.onclick = toggleAccordion


const section3 = document.getElementById("section3")
section3.onclick = toggleAccordion


const section4 = document.getElementById("section4")
section4.onclick = toggleAccordion