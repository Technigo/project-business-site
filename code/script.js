const faqHeaderOne = document.getElementById('faqHeaderOne');
const faqContentOne = document.getElementById('faqContentOne');
const faqHeaderTwo = document.getElementById('faqHeaderTwo');
const faqContentTwo = document.getElementById('faqContentTwo');
const faqHeaderThree = document.getElementById('faqHeaderThree');
const faqContentThree = document.getElementById('faqContentThree');
const faqHeaderFour = document.getElementById('faqHeaderFour');
const faqContentFour = document.getElementById('faqContentFour');
const faqHeaderFive = document.getElementById('faqHeaderFive');
const faqContentFive = document.getElementById('faqContentFive');
const faqHeaderSix = document.getElementById('faqHeaderSix');
const faqContentSix = document.getElementById('faqContentSix');
const fasHeaderOne = document.getElementById('fasHeaderOne');
const fasHeaderTwo = document.getElementById('fasHeaderTwo');
const fasHeaderThree = document.getElementById('fasHeaderThree');
const fasHeaderFour = document.getElementById('fasHeaderFour');
const fasHeaderFive = document.getElementById('fasHeaderFive');
const fasHeaderSix = document.getElementById('fasHeaderSix');


faqHeaderOne.addEventListener('click', () => {
  fasHeaderOne.classList.toggle('active')
  faqContentOne.classList.toggle('accordion-selected')
  faqContentTwo.classList.remove('accordion-selected')
  faqContentThree.classList.remove('accordion-selected')
  faqContentFour.classList.remove('accordion-selected')
  faqContentFive.classList.remove('accordion-selected')
  faqContentSix.classList.remove('accordion-selected');
});

faqHeaderTwo.addEventListener('click', () => {
  fasHeaderTwo.classList.toggle('active')
  faqContentTwo.classList.toggle('accordion-selected')
  faqContentOne.classList.remove('accordion-selected')
  faqContentThree.classList.remove('accordion-selected')
  faqContentFour.classList.remove('accordion-selected')
  faqContentFive.classList.remove('accordion-selected')
  faqContentSix.classList.remove('accordion-selected');
});

faqHeaderThree.addEventListener('click', () => {
  fasHeaderThree.classList.toggle('active')
  faqContentThree.classList.toggle('accordion-selected')
  faqContentTwo.classList.remove('accordion-selected')
  faqContentOne.classList.remove('accordion-selected')
  faqContentFour.classList.remove('accordion-selected')
  faqContentFive.classList.remove('accordion-selected')
  faqContentSix.classList.remove('accordion-selected');
});

faqHeaderFour.addEventListener('click', () => {
  fasHeaderFour.classList.toggle('active')
  faqContentFour.classList.toggle('accordion-selected')
  faqContentTwo.classList.remove('accordion-selected')
  faqContentThree.classList.remove('accordion-selected')
  faqContentOne.classList.remove('accordion-selected')
  faqContentFive.classList.remove('accordion-selected')
  faqContentSix.classList.remove('accordion-selected');
});

faqHeaderFive.addEventListener('click', () => {
  fasHeaderFive.classList.toggle('active')
  faqContentFive.classList.toggle('accordion-selected')
  faqContentTwo.classList.remove('accordion-selected')
  faqContentThree.classList.remove('accordion-selected')
  faqContentFour.classList.remove('accordion-selected')
  faqContentOne.classList.remove('accordion-selected')
  faqContentSix.classList.remove('accordion-selected');
});

faqHeaderSix.addEventListener('click', () => {
  fasHeaderSix.classList.toggle('active')
  faqContentSix.classList.toggle('accordion-selected')
  faqContentTwo.classList.remove('accordion-selected')
  faqContentThree.classList.remove('accordion-selected')
  faqContentFour.classList.remove('accordion-selected')
  faqContentFive.classList.remove('accordion-selected')
  faqContentOne.classList.remove('accordion-selected');
});


// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works


// Selects an HTML element, and calls a function which will be executed when the element is clicked.

