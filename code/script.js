// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle('active')
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
/*document.getElementById("section1").onclick = toggle */


document.getElementById('accordionbtn1').onclick = toggle
function toggle() {
  this.classList.toggle('open')
}

document.getElementById('accordionbtn2').onclick = toggle
function toggle() {
  this.classList.toggle('open')
}

document.getElementById('accordionbtn3').onclick = toggle
function toggle() {
  this.classList.toggle('open')
}

document.getElementById('accordionbtn4').onclick = toggle
function toggle() {
  this.classList.toggle('open')
}


