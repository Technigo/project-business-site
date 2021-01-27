// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
//function toggle() {
 // this.classList.toggle("active")
//}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle

const accordionHeader1 = document.getElementById("accordion-header-1");
const accordionBody1 = document.getElementById("accordion-body-1");



const accordionHeader2 = document.getElementById("accordion-header-2");
const accordionBody2 = document.getElementById("accordion-body-2");


const accordionHeader3 = document.getElementById("accordion-header-3");
const accordionBody3 = document.getElementById("accordion-body-3");



accordionHeader1.addEventListener("click", () => {
  accordionBody1.classList.toggle("accordion-selected");
  accordionBody2.classList.remove("accordion-selected");
  accordionBody3.classList.remove("accordion-selected");
});

  accordionHeader2.addEventListener("click", () => {
  accordionBody1.classList.remove("accordion-selected");
  accordionBody2.classList.toggle("accordion-selected");
  accordionBody3.classList.remove("accordion-selected");
});

accordionHeader3.addEventListener("click", () => {
  accordionBody1.classList.remove("accordion-selected");
  accordionBody2.classList.remove("accordion-selected");
  accordionBody3.classList.toggle("accordion-selected");
});

