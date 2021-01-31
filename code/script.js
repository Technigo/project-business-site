// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
/*function toggle() {
  this.classList.toggle("active")
} */

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
/*document.getElementById("section1").onclick = toggle*/

/*** Header Questions ***/
const accordionQuestionOne = document.getElementById('accordion-question-1');
const accordionQuestionTwo = document.getElementById('accordion-question-2');
const accordionQuestionThree = document.getElementById('accordion-question-3');
const accordionQuestionFour = document.getElementById('accordion-question-4');
const accordionQuestionFive = document.getElementById('accordion-question-5');
const accordionQuestionSix = document.getElementById('accordion-question-6');

//*** Toggle the answers ***//
accordionQuestionOne.addEventListener('click', () => {
  accordionQuestionOne.classList.toggle('accordion-selected');
  accordionQuestionTwo.classList.remove('accordion-selected');
  accordionQuestionThree.classList.remove('accordion-selected');
  accordionQuestionFour.classList.remove('accordion-selected');
  accordionQuestionFive.classList.remove('accordion-selected');
  accordionQuestionSix.classList.remove('accordion-selected');
});

accordionQuestionTwo.addEventListener('click', () => {
  accordionQuestionOne.classList.remove('accordion-selected');
  accordionQuestionTwo.classList.toggle('accordion-selected');
  accordionQuestionThree.classList.remove('accordion-selected');
  accordionQuestionFour.classList.remove('accordion-selected');
  accordionQuestionFive.classList.remove('accordion-selected');
  accordionQuestionSix.classList.remove('accordion-selected');
});

accordionQuestionThree.addEventListener('click', () => {
  accordionQuestionOne.classList.remove('accordion-selected');
  accordionQuestionTwo.classList.remove('accordion-selected');
  accordionQuestionThree.classList.toggle('accordion-selected');
  accordionQuestionFour.classList.remove('accordion-selected');
  accordionQuestionFive.classList.remove('accordion-selected');
  accordionQuestionSix.classList.remove('accordion-selected');
});

accordionQuestionFour.addEventListener('click', () => {
  accordionQuestionOne.classList.remove('accordion-selected');
  accordionQuestionTwo.classList.remove('accordion-selected');
  accordionQuestionThree.classList.remove('accordion-selected');
  accordionQuestionFour.classList.toggle('accordion-selected');
  accordionQuestionFive.classList.remove('accordion-selected');
  accordionQuestionSix.classList.remove('accordion-selected');
});

accordionQuestionFive.addEventListener('click', () => {
  accordionQuestionOne.classList.remove('accordion-selected');
  accordionQuestionTwo.classList.remove('accordion-selected');
  accordionQuestionThree.classList.remove('accordion-selected');
  accordionQuestionFour.classList.remove('accordion-selected');
  accordionQuestionFive.classList.toggle('accordion-selected');
  accordionQuestionSix.classList.remove('accordion-selected');
});

accordionQuestionSix.addEventListener('click', () => {
  accordionQuestionOne.classList.remove('accordion-selected');
  accordionQuestionTwo.classList.remove('accordion-selected');
  accordionQuestionThree.classList.remove('accordion-selected');
  accordionQuestionFour.classList.remove('accordion-selected');
  accordionQuestionFive.classList.remove('accordion-selected');
  accordionQuestionSix.classList.toggle('accordion-selected');
});

// refresh input-fields after submit form 
document.getElementById("form").onsubmit = function() { 
  location.reload(true); 
}

