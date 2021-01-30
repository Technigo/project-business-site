// // A function that adds and remove the class "active" on the section you click on.
// // We haven't really talked about ´this´ yet, but we will... ;)
// // console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("active")
// }

// // Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle



// const accordionContentOne = document.getElementById('accordion-content-1')
// const accordionHeaderOne = document.getElementById('accordion-header-1');

// const accordionContentTwo = document.getElementById('accordion-content-2')
// const accordionHeaderTwo = document.getElementById('accordion-header-2');

// const accordionContentThree = document.getElementById('accordion-content-3')
// const accordionHeaderThree = document.getElementById('accordion-header-3');


// accordionHeaderOne.addEventListener('click', () => {
//     accordionHeaderOne.classList.toggle('active')
//     accordionHeaderTwo.classList.remove('active')
//     accordionHeaderThree.classList.remove('active')
//     accordionContentOne.classList.toggle('accordion-selected')
//     accordionContentTwo.classList.remove('accordion-selected')
//     accordionContentThree.classList.remove('accordion-selected')
//   });
  
//   accordionHeaderTwo.addEventListener('click', () => {
//     accordionHeaderOne.classList.remove('active')
//     accordionHeaderTwo.classList.toggle('active')
//     accordionHeaderThree.classList.remove('active')
//     accordionContentOne.classList.remove('accordion-selected')
//     accordionContentTwo.classList.toggle('accordion-selected')
//     accordionContentThree.classList.remove('accordion-selected')
//   });
  
//   accordionHeaderThree.addEventListener('click', () => {
//     accordionHeaderOne.classList.remove('active')
//     accordionHeaderTwo.classList.remove('active')
//     accordionHeaderThree.classList.toggle('active')
//     accordionContentOne.classList.remove('accordion-selected')
//     accordionContentTwo.classList.remove('accordion-selected')
//     accordionContentThree.classList.toggle('accordion-selected')
// });


const accordionOne = document.getElementById('accordion-1')
const accordionTwo = document.getElementById('accordion-2')
const accordionThree = document.getElementById('accordion-3')


accordionOne.addEventListener('click', () => {
    alert(accordionOne.tagName);
    accordionOne.classList.toggle('active')
    accordionTwo.classList.remove('active')
    accordionThree.classList.remove('active')
  });
accordionTwo.addEventListener('click', () => {
    accordionOne.classList.remove('active')
    accordionTwo.classList.toggle('active')
    accordionThree.classList.remove('active')
  });
accordionThree.addEventListener('click', () => {
    accordionOne.classList.remove('active')
    accordionTwo.classList.remove('active')
    accordionThree.classList.toggle('active')
  });
  
