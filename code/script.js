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