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


faqHeaderOne.addEventListener('click', () => {
  faqContentOne.classList.toggle('accordion-selected')
  faqContentTwo.classList.remove('accordion-selected')
  faqContentThree.classList.remove('accordion-selected')
  faqContentFour.classList.remove('accordion-selected')
  faqContentFive.classList.remove('accordion-selected')
  faqContentSix.classList.remove('accordion-selected');
});

faqHeaderTwo.addEventListener('click', () => {
  faqContentTwo.classList.toggle('accordion-selected')
  faqContentOne.classList.remove('accordion-selected')
  faqContentThree.classList.remove('accordion-selected')
  faqContentFour.classList.remove('accordion-selected')
  faqContentFive.classList.remove('accordion-selected')
  faqContentSix.classList.remove('accordion-selected');
});

faqHeaderThree.addEventListener('click', () => {
  faqContentThree.classList.toggle('accordion-selected')
  faqContentTwo.classList.remove('accordion-selected')
  faqContentOne.classList.remove('accordion-selected')
  faqContentFour.classList.remove('accordion-selected')
  faqContentFive.classList.remove('accordion-selected')
  faqContentSix.classList.remove('accordion-selected');
});

faqHeaderFour.addEventListener('click', () => {
  faqContentFour.classList.toggle('accordion-selected')
  faqContentTwo.classList.remove('accordion-selected')
  faqContentThree.classList.remove('accordion-selected')
  faqContentOne.classList.remove('accordion-selected')
  faqContentFive.classList.remove('accordion-selected')
  faqContentSix.classList.remove('accordion-selected');
});

faqHeaderFive.addEventListener('click', () => {
  faqContentFive.classList.toggle('accordion-selected')
  faqContentTwo.classList.remove('accordion-selected')
  faqContentThree.classList.remove('accordion-selected')
  faqContentFour.classList.remove('accordion-selected')
  faqContentOne.classList.remove('accordion-selected')
  faqContentSix.classList.remove('accordion-selected');
});

faqHeaderSix.addEventListener('click', () => {
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
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
