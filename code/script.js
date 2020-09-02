// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
const sectionOne = document.getElementById('section1');
const sectionTwo = document.getElementById('section2');
const sectionThree = document.getElementById('section3');
const sectionFour = document.getElementById('section4');

function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
sectionOne.onclick = toggle
sectionTwo.onclick = toggle
sectionThree.onclick = toggle
sectionFour.onclick = toggle
