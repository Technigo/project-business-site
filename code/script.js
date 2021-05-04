const accordionQuestionFirst = document.getElementById('question1');
const accordionAnswerFirst = document.getElementById('answer1');

const accordionQuestionSecond = document.getElementById('question2');
const accordionAnswerSecond = document.getElementById('answer2');

const accordionQuestionThird = document.getElementById('question3');
const accordionAnswerThird = document.getElementById('answer3');

const accordionQuestionFourth = document.getElementById('question4');
const accordionAnswerFourth = document.getElementById('answer4');

accordionQuestionFirst.addEventListener('click', () => {
  accordionAnswerFirst.classList.toggle('answer-clicked');
  accordionAnswerSecond.classList.remove('answer-clicked');
  accordionAnswerThird.classList.remove('answer-clicked');
  accordionAnswerFourth.classList.remove('answer-clicked');
});

accordionQuestionSecond.addEventListener('click', () => {
  accordionAnswerFirst.classList.remove('answer-clicked');
  accordionAnswerSecond.classList.toggle('answer-clicked');
  accordionAnswerThird.classList.remove('answer-clicked');
  accordionAnswerFourth.classList.remove('answer-clicked');
});

accordionQuestionThird.addEventListener('click', () => {
  accordionAnswerFirst.classList.remove('answer-clicked');
  accordionAnswerSecond.classList.remove('answer-clicked');
  accordionAnswerThird.classList.toggle('answer-clicked');
  accordionAnswerFourth.classList.remove('answer-clicked');
});

accordionQuestionFourth.addEventListener('click', () => {
  accordionAnswerFirst.classList.remove('answer-clicked');
  accordionAnswerSecond.classList.remove('answer-clicked');
  accordionAnswerThird.classList.remove('answer-clicked');
  accordionAnswerFourth.classList.toggle('answer-clicked');
});



