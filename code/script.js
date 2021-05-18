
const accordionHeaderOne = document.getElementById('accordion-header-1');
const accordionAnswerOne = document.getElementById('accordion-answer-1');


const accordionHeaderTwo = document.getElementById('accordion-header-2');
const accordionAnswerTwo = document.getElementById('accordion-answer-2');


const accordionHeaderThree = document.getElementById('accordion-header-3');
const accordionAnswerThree= document.getElementById('accordion-answer-3');


accordionHeaderOne.addEventListener('click', () => {
  console.log('clicked')
  accordionAnswerOne.classList.toggle('accordion-selected');
});

accordionHeaderTwo.addEventListener('click', () => {
  accordionAnswerTwo.classList.toggle('accordion-selected');
});

accordionHeaderThree.addEventListener('click', () => {
  accordionAnswerThree.classList.toggle('accordion-selected');
});

function toggle() {
  this.classList.toggle("active")
}

const btn = document.getElementById('btn')

btn.onclick = () => {
  alert('Thank you for submitting!')
}


