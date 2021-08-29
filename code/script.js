// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  console.log("this", this);
  this.classList.toggle("active");
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("question1").onclick = toggle;