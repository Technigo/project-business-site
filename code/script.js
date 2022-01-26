// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active")
}

// console.log(this) to see how it works
console.log(this)

// // // Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById('question1').onclick = toggle
document.getElementById('question2').onclick = toggle
document.getElementById('question3').onclick = toggle
