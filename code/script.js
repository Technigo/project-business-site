// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
/*function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle*/

const accordionTopicOne = document.getElementById("accordion-topic-one");
const accordionTopicTwo = document.getElementById("accordion-topic-two");
const accordionTopicThree = document.getElementById("accordion-topic-three");
const accordionContentOne = document.getElementById("accordion-content-one");
const accordionContentTwo = document.getElementById("accordion-content-two");
const accordionContentThree = document.getElementById("accordion-content-three");
//console.log(accordionTopicOne);//

accordionTopicOne.addEventListener('click', () => {
  accordionContentOne.classList.toggle("accordion-selected");
});

accordionTopicTwo.addEventListener('click', () => {
  accordionContentTwo.classList.toggle("accordion-selected");
});

accordionTopicThree.addEventListener('click', () => {
  accordionContentThree.classList.toggle("accordion-selected");
});


