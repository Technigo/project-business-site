// Selecting an HTML element
const elementToToggleSection1 = document.querySelector("#section1");
const elementToToggleSection2 = document.querySelector("#section2");

// A function that adds and remove the class "active" 
const toggleHTMLElementClass1 = () => {
  elementToToggleSection1.classList.toggle("active");
};

const toggleHTMLElementClass2 = () => {
  elementToToggleSection2.classList.toggle("active");
};
// Adding the toggle function to our selected element, so everytime it's clicked the class will be toggled
elementToToggleSection1.onclick = toggleHTMLElementClass1;

elementToToggleSection2.onclick = toggleHTMLElementClass2;

