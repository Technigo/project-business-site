const accordionHeaderOne = document.getElementById('accordion-header-1');
const accordionContentOne = document.getElementById('accordion-content-1');
console.log(accordionHeaderOne);

accordionHeaderOne.addEventListener('click',()=> {
  accordionContentOne.classList.toggle('accordion-selected');
})

const accordionHeaderTwo = document.getElementById('accordion-header-2');
const accordionContentTwo = document.getElementById('accordion-content-2');
console.log(accordionHeaderTwo);

accordionHeaderTwo.addEventListener('click',()=> {
  accordionContentTwo.classList.toggle('accordion-selected');
})

const accordionHeaderThree = document.getElementById('accordion-header-3');
const accordionContentThree = document.getElementById('accordion-content-3');
console.log(accordionHeaderThree);

accordionHeaderThree.addEventListener('click',()=> {
  accordionContentThree.classList.toggle('accordion-selected');
})