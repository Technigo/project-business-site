// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works



document.getElementById('question1').onclick = toggle
document.getElementById('question2').onclick = toggle
document.getElementById('question3').onclick = toggle
document.getElementById('question4').onclick = toggle

function toggle() {
  this.classList.toggle('active')
}




// Selects an HTML element, and calls a function which will be executed when the element is clicked.
