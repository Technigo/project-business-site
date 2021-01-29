
// // Accordion FAQ //

const accordionQuestion1 = document.getElementById('accordion-question-1');
const accordionAnswer1 = document.getElementById('accordion-answer-1');

const accordionQuestion2 = document.getElementById('accordion-question-2');
const accordionAnswer2 = document.getElementById('accordion-answer-2');

const accordionQuestion3 = document.getElementById('accordion-question-3');
const accordionAnswer3 = document.getElementById('accordion-answer-3');

const accordionQuestion4 = document.getElementById('accordion-question-4');
const accordionAnswer4 = document.getElementById('accordion-answer-4');


accordionQuestion1.addEventListener('click', () => {
  accordionAnswer1.classList.toggle('accordion-selected');
  accordionAnswer2.classList.remove('accordion-selected');
  accordionAnswer3.classList.remove('accordion-selected');
  accordionAnswer4.classList.remove('accordion-selected');
});

accordionQuestion2.addEventListener('click', () => {
  accordionAnswer1.classList.remove('accordion-selected');
  accordionAnswer2.classList.toggle('accordion-selected');
  accordionAnswer3.classList.remove('accordion-selected');
  accordionAnswer4.classList.remove('accordion-selected');
});

accordionQuestion3.addEventListener('click', () => {
  accordionAnswer1.classList.remove('accordion-selected');
  accordionAnswer2.classList.remove('accordion-selected');
  accordionAnswer3.classList.toggle('accordion-selected');
  accordionAnswer4.classList.remove('accordion-selected');
});

accordionQuestion4.addEventListener('click', () => {
  accordionAnswer1.classList.remove('accordion-selected');
  accordionAnswer2.classList.remove('accordion-selected');
  accordionAnswer3.classList.remove('accordion-selected');
  accordionAnswer4.classList.toggle('accordion-selected');
});


