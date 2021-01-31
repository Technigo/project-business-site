// // A function that adds and remove the class "active" on the section you click on.
// // We haven't really talked about ´this´ yet, but we will... ;)
// // console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("active")
// }

// // Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle


const accordionOne = document.getElementById('accordion-header-1')
const accordionTwo = document.getElementById('accordion-header-2')
const accordionThree = document.getElementById('accordion-header-3')
const accordionFour = document.getElementById('accordion-header-4')
const accordionFive = document.getElementById('accordion-header-5')

console.log(accordionOne, accordionTwo, accordionThree, accordionFour, accordionFive)



accordionOne.addEventListener('click', () => {
  accordionOne.classList.toggle('active');
  accordionTwo.classList.remove('active');
  accordionThree.classList.remove('active');
  accordionFour.classList.remove('active');
  accordionFive.classList.remove('active');
  console.log('1');
});
accordionTwo.addEventListener('click', () => {
  accordionOne.classList.remove('active');
  accordionTwo.classList.toggle('active');
  accordionThree.classList.remove('active');
  accordionFour.classList.remove('active');
  accordionFive.classList.remove('active');
  console.log('2');
});

// accordionThree.addEventListener('click', () => {
//   console.log('3');
// });

// accordionFour.addEventListener('click', () => {
//   console.log('4');
// });

// accordionFive.addEventListener('click', () => {
//   console.log('5');
// });

accordionThree.addEventListener('click', () => {
  accordionOne.classList.remove('active');
  accordionTwo.classList.remove('active');
  accordionThree.classList.toggle('active');
  accordionFour.classList.remove('active');
  accordionFive.classList.remove('active');
  console.log('3');
});
accordionThree.addEventListener('click', () => {
  accordionOne.classList.remove('active');
  accordionTwo.classList.remove('active');
  accordionThree.classList.toggle('active');
  accordionFour.classList.remove('active');
  accordionFive.classList.remove('active');
  console.log(accordionThree);
});
accordionFour.addEventListener('click', () => {
  accordionOne.classList.remove('active');
  accordionTwo.classList.remove('active');
  accordionThree.classList.remove('active');
  accordionFour.classList.toggle('active');
  accordionFive.classList.remove('active');
  console.log('4');
});
accordionFive.addEventListener('click', () => {
  accordionOne.classList.remove('active');
  accordionTwo.classList.remove('active');
  accordionThree.classList.remove('active');
  accordionFour.classList.remove('active');
  accordionFive.classList.toggle('active');
  console.log('5');
  });
  
const video = document.getElementById('bg-video');
video.playbackRate = 0.4;