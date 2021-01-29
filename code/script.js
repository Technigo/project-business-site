// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle

const accordionQuestionOne = document.getElementById('accordion-question-1');
const accordionAnswerOne = document.getElementById('accordion-answer-1')

const accordionQuestionTwo = document.getElementById('accordion-question-2');
const accordionAnswerTwo = document.getElementById('accordion-answer-2')

const accordionQuestionThree = document.getElementById('accordion-question-3');
const accordionAnswerThree = document.getElementById('accordion-answer-3')

const accordionQuestionFour = document.getElementById('accordion-question-4');
const accordionAnswerFour = document.getElementById('accordion-answer-4')

const accordionQuestionFive = document.getElementById('accordion-question-5');
const accordionAnswerFive = document.getElementById('accordion-answer-5')

console.log(accordionQuestionOne);

accordionQuestionOne.addEventListener('click', () => {
    accordionAnswerOne.classList.toggle('accordion-selected');
});

accordionQuestionTwo.addEventListener('click', () => {
    accordionAnswerTwo.classList.toggle('accordion-selected');
});

accordionQuestionThree.addEventListener('click', () => {
    accordionAnswerThree.classList.toggle('accordion-selected');
});

accordionQuestionFour.addEventListener('click', () => {
    accordionAnswerFour.classList.toggle('accordion-selected');
});

accordionQuestionFive.addEventListener('click', () => {
    accordionAnswerFive.classList.toggle('accordion-selected');
});