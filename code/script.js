const ritualsDrop = document.getElementById('rituals');
const bigContainer = document.getElementById('big-container')

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

function toggleActive() {
  this.classList.add('active')
} 

accordionHeaderOne.addEventListener('click', toggleActive)
accordionHeaderTwo.addEventListener('click', toggleActive)
accordionHeaderThree.addEventListener('click', toggleActive)

/* THIS DOES NOT WORK, why? */


function toggleRituals() {
  this.classList.toggle('open')
}

ritualsDrop.addEventListener('click', toggleRituals)


