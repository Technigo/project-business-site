
const accordionHeaderOne = document.getElementById('accordion-header-1');
const accordionAnswerOne = document.getElementById('accordion-answer-1');


const accordionHeaderTwo = document.getElementById('accordion-header-2');
const accordionAnswerTwo = document.getElementById('accordion-answer-2');


const accordionHeaderThree = document.getElementById('accordion-header-3');
const accordionAnswerThree= document.getElementById('accordion-answer-3');


accordionHeaderOne.addEventListener('click', () => {
  console.log('clicked')
  accordionAnswerOne.classList.toggle('accordion-selected');
});

accordionHeaderTwo.addEventListener('click', () => {
  accordionAnswerTwo.classList.toggle('accordion-selected');
});

accordionHeaderThree.addEventListener('click', () => {
  accordionAnswerThree.classList.toggle('accordion-selected');
});



// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}


