// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works


// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

// document.getElementById("section1").onclick = toggle

const accordionQuestionOne = document.getElementById('accordion-question1');
const accordionAnswerOne = document.getElementById('accordion-answer1');
const accordionQuestionTwo = document.getElementById('accordion-question2');
const accordionAnswerTwo = document.getElementById('accordion-answer2');
const accordionQuestionThree = document.getElementById('accordion-question3');
const accordionAnswerThree = document.getElementById('accordion-answer3');
const accordionQuestionFour = document.getElementById('accordion-question4');
const accordionAnswerFour = document.getElementById('accordion-answer4');
const accordionQuestionFive = document.getElementById('accordion-question5');
const accordionAnswerFive = document.getElementById('accordion-answer5');


accordionQuestionOne.addEventListener('click', () => {
  accordionQuestionOne.classList.toggle("question-border-radius");
  accordionAnswerOne.classList.toggle("accordion-answer-display");
  document.getElementById("fas-1").classList.toggle("fas-selected");
});

accordionQuestionTwo.addEventListener('click', () => {
  accordionQuestionTwo.classList.toggle("question-border-radius");
  accordionAnswerTwo.classList.toggle("accordion-answer-display");
  document.getElementById("fas-2").classList.toggle("fas-selected");
});

accordionQuestionThree.addEventListener('click', () => {
  accordionQuestionThree.classList.toggle("question-border-radius");
  accordionAnswerThree.classList.toggle("accordion-answer-display");
  document.getElementById("fas-3").classList.toggle("fas-selected");
});

accordionQuestionFour.addEventListener('click', () => {
  accordionQuestionFour.classList.toggle("question-border-radius");
  accordionAnswerFour.classList.toggle("accordion-answer-display");
  document.getElementById("fas-4").classList.toggle("fas-selected");
});

accordionQuestionFive.addEventListener("click", () => {
  accordionQuestionFive.classList.toggle("question-border-radius");
  accordionAnswerFive.classList.toggle("accordion-answer-display");
  document.getElementById("fas-5").classList.toggle("fas-selected");
});

const hamburgerMenu = document.getElementById("hamburger");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hamburger-selected");
});










// const accordionHeader1 = document.getElementById('accordion-header-1');
// const accordionContent1 = document.getElementById('accordion-content-1');

// const accordionHeader2 = document.getElementById('accordion-header-2');
// const accordionContent2 = document.getElementById('accordion-content-2');

// const accordionHeader3 = document.getElementById('accordion-header-3');
// const accordionContent3 = document.getElementById('accordion-content-3');

// accordionHeader1.addEventListener('click', () => {
//     accordionContent1.classList.toggle('accordion-selected');
// });

// accordionHeader2.addEventListener('click', () => {
//     accordionContent2.classList.toggle('accordion-selected');
// });

// accordionHeader3.addEventListener('click', () => {
//     accordionContent3.classList.toggle('accordion-selected');
// });