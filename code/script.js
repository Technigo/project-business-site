// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// section1.onclick = toggle


// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle


// SO WHAT THIS DOES: When you click on a question, this script activates a 'toggleAnswer' function to display the answer to that question. The 'toggleAnswer function activates a CSS class called '.open', which makes the answer appear.

section1.onclick = toggleAnswer

function toggleAnswer() {
    this.classList.toggle('open')
  }

section2.onclick = toggleAnswer

function toggleAnswer() {
    this.classList.toggle('open')
}
