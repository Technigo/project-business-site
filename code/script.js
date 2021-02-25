// A function that adds and remove the class "active" on the section you click on.

function toggle() {
  this.classList.toggle("active");
};

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle //

// My JS //

const offerHeader1 = document.getElementById('offer-header-1');
const offer1 = document.getElementById('offer-1');

const offerHeader2 = document.getElementById('offer-header-2');
const offer2 = document.getElementById('offer-2');

const offerHeader3 = document.getElementById('offer-header-3');
const offer3 = document.getElementById('offer-3');

offerHeader1.addEventListener('click', () => {
  offer1.classList.toggle('offer-selected');
});

offerHeader2.addEventListener('click', () => {
  offer2.classList.toggle('offer-selected');
});

offerHeader3.addEventListener('click', () => {
  offer3.classList.toggle('offer-selected');
});

const projectHeader1 = document.getElementById('project-header-1');
const project1 = document.getElementById('project-1');

projectHeader1.addEventListener('click', () => {
  project1.classList.toggle('offer-selected');
});

const projectHeader2 = document.getElementById('project-header-2');
const project2 = document.getElementById('project-2');

projectHeader2.addEventListener('click', () => {
  project2.classList.toggle('offer-selected');
});

const projectHeader3 = document.getElementById('project-header-3');
const project3 = document.getElementById('project-3');

projectHeader3.addEventListener('click', () => {
  project3.classList.toggle('offer-selected');
});
