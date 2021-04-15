const sliderOne = document.getElementById('myInvoices');
const outputOne = document.getElementById('numberOfInvoices');
outputOne.innerHTML = sliderOne.value;

sliderOne.oninput = function() {
  outputOne.innerHTML = this.value;
}

const sliderTwo = document.getElementById('myExpenses');
const outputTwo = document.getElementById('numberOfExpenses');
outputTwo.innerHTML = sliderTwo.value;

sliderTwo.oninput = function() {
  outputTwo.innerHTML = this.value;
} 

const questionOne = document.getElementById('question-1');
const answerOne = document.getElementById('answer-1');
const arrowOne = document.getElementById('arrow1')

const questionTwo = document.getElementById('question-2');
const answerTwo = document.getElementById('answer-2');
const arrowTwo = document.getElementById('arrow2')

const questionThree = document.getElementById('question-3');
const answerThree = document.getElementById('answer-3');
const arrowThree = document.getElementById('arrow3')

const questionFour = document.getElementById('question-4');
const answerFour = document.getElementById('answer-4');
const arrowFour = document.getElementById('arrow4')

const questionFive = document.getElementById('question-5');
const answerFive = document.getElementById('answer-5');
const arrowFive = document.getElementById('arrow5')

const questionSix = document.getElementById('question-6');
const answerSix = document.getElementById('answer-6');
const arrowSix = document.getElementById('arrow6')

questionOne.addEventListener('click', () => {
  arrowOne.classList.toggle('rotate');
  arrowTwo.classList.remove('rotate');
  arrowThree.classList.remove('rotate');
  arrowFour.classList.remove('rotate');
  arrowFive.classList.remove('rotate');
  arrowSix.classList.remove('rotate');
  answerOne.classList.toggle('active');
  answerTwo.classList.remove('active');
  answerThree.classList.remove('active');
  answerFour.classList.remove('active');
  answerFive.classList.remove('active');
  answerSix.classList.remove('active');
})

questionTwo.addEventListener('click', () => {
  arrowOne.classList.remove('rotate');
  arrowTwo.classList.toggle('rotate');
  arrowThree.classList.remove('rotate');
  arrowFour.classList.remove('rotate');
  arrowFive.classList.remove('rotate');
  arrowSix.classList.remove('rotate');
  answerOne.classList.remove('active');
  answerTwo.classList.toggle('active');
  answerThree.classList.remove('active');
  answerFour.classList.remove('active');
  answerFive.classList.remove('active');
  answerSix.classList.remove('active');
})

questionThree.addEventListener('click', () => {
  arrowOne.classList.remove('rotate');
  arrowTwo.classList.remove('rotate');
  arrowThree.classList.toggle('rotate');
  arrowFour.classList.remove('rotate');
  arrowFive.classList.remove('rotate');
  arrowSix.classList.remove('rotate');
  answerOne.classList.remove('active');
  answerTwo.classList.remove('active');
  answerThree.classList.toggle('active');
  answerFour.classList.remove('active');
  answerFive.classList.remove('active');
  answerSix.classList.remove('active');
})

questionFour.addEventListener('click', () => {
  arrowOne.classList.remove('rotate');
  arrowTwo.classList.remove('rotate');
  arrowThree.classList.remove('rotate');
  arrowFour.classList.toggle('rotate');
  arrowFive.classList.remove('rotate');
  arrowSix.classList.remove('rotate');
  answerOne.classList.remove('active');
  answerTwo.classList.remove('active');
  answerThree.classList.remove('active');
  answerFour.classList.toggle('active');
  answerFive.classList.remove('active');
  answerSix.classList.remove('active');
})

questionFive.addEventListener('click', () => {
  arrowOne.classList.remove('rotate');
  arrowTwo.classList.remove('rotate');
  arrowThree.classList.remove('rotate');
  arrowFour.classList.remove('rotate');
  arrowFive.classList.toggle('rotate');
  arrowSix.classList.remove('rotate');
  answerOne.classList.remove('active');
  answerTwo.classList.remove('active');
  answerThree.classList.remove('active');
  answerFour.classList.remove('active');
  answerFive.classList.toggle('active');
  answerSix.classList.remove('active');
})

questionSix.addEventListener('click', () => {
  arrowOne.classList.remove('rotate');
  arrowTwo.classList.remove('rotate');
  arrowThree.classList.remove('rotate');
  arrowFour.classList.remove('rotate');
  arrowFive.classList.remove('rotate');
  arrowSix.classList.toggle('rotate');
  answerOne.classList.remove('active');
  answerTwo.classList.remove('active');
  answerThree.classList.remove('active');
  answerFour.classList.remove('active');
  answerFive.classList.remove('active');
  answerSix.classList.toggle('active');
})
