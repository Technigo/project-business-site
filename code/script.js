
// Selects an HTML element, and calls a function which will be executed when the element is clicked.


const accordionHeaderOne = document.getElementById("accordion-header-1")
const accordionDescriptionOne = document.getElementById("accordion-description-1")

const accordionHeaderTwo = document.getElementById("accordion-header-2")
const accordionDescriptionTwo = document.getElementById("accordion-description-2")


accordionHeaderOne.addEventListener("click", ()=> {
  accordionDescriptionOne.classList.toggle("selected")
})

accordionHeaderTwo.addEventListener("click", ()=> {
  accordionDescriptionTwo.classList.toggle("selected")
})

