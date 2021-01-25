const accordionDisplay1 = document.getElementById("accordionDisplay1");
const accordionExpand1 = document.getElementById("accordionExpand1")

accordionDisplay1.addEventListener("click", function toggle() {
accordionExpand1.classList.toggle("accordion__expand--selected")
})

console.log(accordionDisplay1);





// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
