// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// function toggleAnswer() {
//   this.classList.toggle('active')
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

// document.getElementById('q1').onclick = toggleAnswer

document.getElementById('button1').onclick = toggleAnswer
document.getElementById('button2').onclick = toggleAnswer
document.getElementById('button3').onclick = toggleAnswer
document.getElementById('button4').onclick = toggleAnswer

function toggleAnswer() {
  this.classList.toggle('open')
}