// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works


//function toggle() {
// var changeMe = document.getElementById('section1');
// changeMe.classList.toggle('active');

section1.onclick = toggle
section2.onclick = toggle
section3.onclick = toggle

function toggle() {
  this.classList.toggle('active')
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

// document.getElementById('section1').onclick = toggle