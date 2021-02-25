const accordionQuestionOne = document.getElementById('accordion-question-1')
const accordionAnswerOne = document.getElementById('accordion-answer-1')

const accordionQuestionTwo = document.getElementById('accordion-question-2')
const accordionAnswerTwo = document.getElementById('accordion-answer-2')

const accordionQuestionThree = document.getElementById('accordion-question-3')
const accordionAnswerThree = document.getElementById('accordion-answer-3')

const accordionQuestionFour = document.getElementById('accordion-question-4')
const accordionAnswerFour = document.getElementById('accordion-answer-4')

const accordionQuestionFive = document.getElementById('accordion-question-5')
const accordionAnswerFive = document.getElementById('accordion-answer-5')

accordionQuestionOne.addEventListener('click', () => {
    accordionAnswerOne.classList.toggle('accordion-selected')
});

accordionQuestionTwo.addEventListener('click', () => {
    accordionAnswerTwo.classList.toggle('accordion-selected')
});

accordionQuestionThree.addEventListener('click', () => {
    accordionAnswerThree.classList.toggle('accordion-selected')
});

accordionQuestionFour.addEventListener('click', () => {
    accordionAnswerFour.classList.toggle('accordion-selected')
});

accordionQuestionFive.addEventListener('click', () => {
    accordionAnswerFive.classList.toggle('accordion-selected')
});