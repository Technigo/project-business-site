// Selecting an HTML element
const sectionOneElement = document.querySelector("#section1");

// A function that adds and remove the class "active"
const toggleSectionOneElementClass = () => {
  sectionOneElement.classList.toggle("active");
};
// Adding the toggle function to our selected element, so everytime it's clicked the class will be toggled
sectionOneElement.onclick = toggleSectionOneElementClass;

const sectionTwoElement = document.querySelector("#section2");

const toggleSectionTwoElementClass = () => {
  sectionTwoElement.classList.toggle("active");
};
sectionTwoElement.onclick = toggleSectionTwoElementClass;
