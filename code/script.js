// // A function that adds and remove the class "active" on the section you click on.
// // We haven't really talked about ´this´ yet, but we will... ;)
// // console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("active")
// }

// // Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle


const accordionOne = document.getElementById('accordion-1')
const accordionTwo = document.getElementById('accordion-2')
const accordionThree = document.getElementById('accordion-3')
const accordionFour = document.getElementById('accordion-4')
const accordionFive = document.getElementById('accordion-5')

const accordionHeaderOne = document.getElementById('accordion-header-1')
const accordionHeaderTwo = document.getElementById('accordion-header-2')
const accordionHeaderThree = document.getElementById('accordion-header-3')
const accordionHeaderFour = document.getElementById('accordion-header-4')
const accordionHeaderFive = document.getElementById('accordion-header-5')


accordionHeaderOne.addEventListener('click', () => {
  accordionOne.classList.toggle('active');
  accordionTwo.classList.remove('active');
  accordionThree.classList.remove('active');
  accordionFour.classList.remove('active');
  accordionFive.classList.remove('active');
});
accordionHeaderTwo.addEventListener('click', () => {
  accordionOne.classList.remove('active');
  accordionTwo.classList.toggle('active');
  accordionThree.classList.remove('active');
  accordionFour.classList.remove('active');
  accordionFive.classList.remove('active');
});
accordionHeaderThree.addEventListener('click', () => {
  accordionOne.classList.remove('active');
  accordionTwo.classList.remove('active');
  accordionThree.classList.toggle('active');
  accordionFour.classList.remove('active');
  accordionFive.classList.remove('active');
});
accordionHeaderFour.addEventListener('click', () => {
  accordionOne.classList.remove('active');
  accordionTwo.classList.remove('active');
  accordionThree.classList.remove('active');
  accordionFour.classList.toggle('active');
  accordionFive.classList.remove('active');
});
accordionHeaderFive.addEventListener('click', () => {
  accordionOne.classList.remove('active');
  accordionTwo.classList.remove('active');
  accordionThree.classList.remove('active');
  accordionFour.classList.remove('active');
  accordionFive.classList.toggle('active');
  });
  
const video = document.getElementById('bg-video');
video.playbackRate = 0.4;