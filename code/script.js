// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

document.getElementById("section1").onclick = toggle




// FAQ calls function + when clicked 
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
 accordionItemHeader.addEventListener("click", event => {
  accordionItemHeader.classList.toggle("active");
 });
});

