// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle

//document.getElementById("signUp").onClick = toggle

const accordionHeader1 = document.getElementById('accordion-header1');
const accordionContent1 = document.getElementById('accordion-content1');

accordionHeader1.addEventListener('click', () => {
  accordionContent1.classList.toggle('accordion-selected');
})

const accordionHeader2 = document.getElementById('accordion-header2');
const accordionContent2 = document.getElementById('accordion-content2');

accordionHeader2.addEventListener('click', () => {
  accordionContent2.classList.toggle('accordion-selected');
})

const accordionHeader3 = document.getElementById('accordion-header3');
const accordionContent3 = document.getElementById('accordion-content3');

accordionHeader3.addEventListener('click', () => {
  accordionContent3.classList.toggle('accordion-selected');
})

const accordionHeader4 = document.getElementById('accordion-header4');
const accordionContent4 = document.getElementById('accordion-content4');

accordionHeader4.addEventListener('click', () => {
  accordionContent4.classList.toggle('accordion-selected');
})




