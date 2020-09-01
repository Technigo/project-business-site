// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("hamburger").onclick = toggle;

function toggle() {
  this.classList.toggle("open");
}

// document.getElementById("something").onclick = toggle;

//function toggle() {
// this.classList.toggle("active");
//}
