

const accordionQuestion1 = document.getElementById('accordion-question1');
const accordionAnswer1 = document.getElementById('accordion-answer1');

const accordionQuestion2 = document.getElementById('accordion-question2');
const accordionAnswer2 = document.getElementById('accordion-answer2');

const accordionQuestion3 = document.getElementById('accordion-question3');
const accordionAnswer3 = document.getElementById('accordion-answer3');

accordionQuestion1.addEventListener('click', () => {
  accordionAnswer1.classList.toggle('accordion-clicked');
  accordionAnswer2.classList.remove('accordion-clicked');
  accordionAnswer3.classList.remove('accordion-clicked');
})

accordionQuestion2.addEventListener('click', () => {
  accordionAnswer2.classList.toggle('accordion-clicked');
  accordionAnswer1.classList.remove('accordion-clicked');
  accordionAnswer3.classList.remove('accordion-clicked');

})

accordionQuestion3.addEventListener('click', () => {
  accordionAnswer3.classList.toggle('accordion-clicked');
  accordionAnswer2.classList.remove('accordion-clicked');
  accordionAnswer1.classList.remove('accordion-clicked');

})