// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle

//document.getElementById("signUp").onClick = toggle

const accordionQuestion1 = document.getElementById('accordion-question1');
const accordionContent1 = document.getElementById('accordion-content1');

accordionQuestion1.addEventListener('click', () => {
  accordionContent1.classList.toggle('accordion-selected');
})

const accordionQuestion2 = document.getElementById('accordion-question2');
const accordionContent2 = document.getElementById('accordion-content2');

accordionQuestion2.addEventListener('click', () => {
  accordionContent2.classList.toggle('accordion-selected');
})

const accordionQuestion3 = document.getElementById('accordion-question3');
const accordionContent3 = document.getElementById('accordion-content3');

accordionQuestion3.addEventListener('click', () => {
  accordionContent3.classList.toggle('accordion-selected');
})

const accordionQuestion4 = document.getElementById('accordion-question4');
const accordionContent4 = document.getElementById('accordion-content4');

accordionQuestion4.addEventListener('click', () => {
  accordionContent4.classList.toggle('accordion-selected');
})




