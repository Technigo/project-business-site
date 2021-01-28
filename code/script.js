// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
/*function toggle() {
  this.classList.toggle("active")
  console.log(this)
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle*/

const accordionHeaderOne = document.getElementById('accordion-header-1');
const accordionContentOne = document.getElementById('accordion-content-1');

const accordionHeaderTwo = document.getElementById('accordion-header-2');
const accordionContentTwo = document.getElementById('accordion-content-2');

const accordionHeaderThree = document.getElementById('accordion-header-3');
const accordionContentThree = document.getElementById('accordion-content-3');

accordionHeaderOne.addEventListener('click', () => {
  accordionContentOne.classList.toggle('accordion-selected');
  accordionContentTwo.classList.remove('accordion-selected');
  accordionContentThree.classList.remove('accordion-selected');
});

accordionHeaderTwo.addEventListener('click', () => {
  accordionContentOne.classList.remove('accordion-selected');
  accordionContentTwo.classList.toggle('accordion-selected');
  accordionContentThree.classList.remove('accordion-selected');
});

accordionHeaderThree.addEventListener('click', () => {
  accordionContentOne.classList.remove('accordion-selected');
  accordionContentTwo.classList.remove('accordion-selected');
  accordionContentThree.classList.toggle('accordion-selected');
});


