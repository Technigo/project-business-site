// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

console.log('hello')


const button = 
document.getElementById("button").onclick = toggleAccordion

button.onclick = toggleAccordion

function toggleAccordion() {
  this.classlist.toggleAccordion ("active")
}


// function toggle() {
//   this.classList.toggle("active")
//}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle 
