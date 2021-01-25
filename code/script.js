// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

const bookButton = document.getElementById('book-now');
const bigContent = document.getElementById('big-content');

bookButton.addEventListener('click', () => {
  bigContent.scrollIntoView({behavior: 'smooth'});
})

const accordionQuestionOne = document.getElementById('accordion-question-one');
const accordionAnswerOne = document.getElementById('accordion-answer-one');
const accordionQuestionTwo = document.getElementById('accordion-question-two');
const accordionAnswerTwo = document.getElementById('accordion-answer-two');
const accordionQuestionThree = document.getElementById('accordion-question-three');
const accordionAnswerThree = document.getElementById('accordion-answer-three');
const accordionQuestionFour = document.getElementById('accordion-question-four');
const accordionAnswerFour = document.getElementById('accordion-answer-four');

accordionQuestionOne.addEventListener('click', () => {
  accordionAnswerOne.classList.toggle('accordion-visible');
});

accordionQuestionTwo.addEventListener('click', () => {
  accordionAnswerTwo.classList.toggle('accordion-visible');
});

accordionQuestionThree.addEventListener('click', () => {
  accordionAnswerThree.classList.toggle('accordion-visible');
});

accordionQuestionFour.addEventListener('click', () => {
  accordionAnswerFour.classList.toggle('accordion-visible');
});


// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle



