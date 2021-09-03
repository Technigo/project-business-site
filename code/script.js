// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggleAccordion() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("accordion-item1").onclick = toggleAccordion
document.getElementById("accordion-item2").onclick = toggleAccordion
document.getElementById("accordion-item3").onclick = toggleAccordion
document.getElementById("accordion-item4").onclick = toggleAccordion

// segment = ['segment1', 'segment2', ...]
// segment.forEach(segment => {
//   const fieldEl = document.getElementById(segment);
//   .onclick = toggle
// });