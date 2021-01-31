const accordionSection1 = document.getElementById('section1');
const accordionAnswer1 = document.getElementById('answer1')

section1.addEventListener('click', () => {
  accordionAnswer1.classList.toggle('answer-selected')
  accordionAnswer2.classList.remove('answer-selected')
  accordionAnswer3.classList.remove('answer-selected')
  accordionAnswer4.classList.remove('answer-selected')
  accordionAnswer5.classList.remove('answer-selected')
  accordionAnswer6.classList.remove('answer-selected')
})

const accordionSection2 = document.getElementById('section2');
const accordionAnswer2 = document.getElementById('answer2')
section2.addEventListener('click', () => {
  accordionAnswer2.classList.toggle('answer-selected')
  accordionAnswer1.classList.remove('answer-selected')
  accordionAnswer3.classList.remove('answer-selected')
  accordionAnswer3.classList.remove('answer-selected')
  accordionAnswer4.classList.remove('answer-selected')
  accordionAnswer5.classList.remove('answer-selected')
})

const accordionSection3 = document.getElementById('section3');
const accordionAnswer3 = document.getElementById('answer3')
section3.addEventListener('click', () => {
  accordionAnswer3.classList.toggle('answer-selected')
  accordionAnswer1.classList.remove('answer-selected')
  accordionAnswer2.classList.remove('answer-selected')
  accordionAnswer4.classList.remove('answer-selected')
  accordionAnswer5.classList.remove('answer-selected')
  accordionAnswer6.classList.remove('answer-selected')
})
const accordionSection4 = document.getElementById('section4');
const accordionAnswer4 = document.getElementById('answer4')
section4.addEventListener('click', () => {
  accordionAnswer4.classList.toggle('answer-selected')
  accordionAnswer1.classList.remove('answer-selected')
  accordionAnswer2.classList.remove('answer-selected')
  accordionAnswer3.classList.remove('answer-selected')
  accordionAnswer5.classList.remove('answer-selected')
  accordionAnswer6.classList.remove('answer-selected')
})

const accordionSection5 = document.getElementById('section5');
const accordionAnswer5 = document.getElementById('answer5')

section5.addEventListener('click', () => {
  accordionAnswer5.classList.toggle('answer-selected')
  accordionAnswer1.classList.remove('answer-selected')
  accordionAnswer2.classList.remove('answer-selected')
  accordionAnswer3.classList.remove('answer-selected')
  accordionAnswer4.classList.remove('answer-selected')
  accordionAnswer6.classList.remove('answer-selected')
})

const accordionSection6 = document.getElementById('section6');
const accordionAnswer6 = document.getElementById('answer6')

section6.addEventListener('click', () => {
  accordionAnswer6.classList.toggle('answer-selected')
  accordionAnswer1.classList.remove('answer-selected')
  accordionAnswer2.classList.remove('answer-selected')
  accordionAnswer3.classList.remove('answer-selected')
  accordionAnswer4.classList.remove('answer-selected')
  accordionAnswer5.classList.remove('answer-selected')
})

