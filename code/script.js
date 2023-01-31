// Selecting an HTML element
const elementToToggle1 = document.querySelector("#section1");
const elementToToggle2 = document.querySelector("#section2");
const elementToToggle3 = document.querySelector("#section3");
const elementToToggle4 = document.querySelector("#section4");
// A function that adds and remove the class "active" 
const toggleHTMLElementClass1 = () => {
  elementToToggle1.classList.toggle("active");
};
const toggleHTMLElementClass2 = () => {
  elementToToggle2.classList.toggle("active");
};
const toggleHTMLElementClass3 = () => {
  elementToToggle3.classList.toggle("active");
};
const toggleHTMLElementClass4 = () => {
  elementToToggle4.classList.toggle("active");
};
// Adding the toggle function to our selected element, so everytime it's clicked the class will be toggled
elementToToggle1.onclick = toggleHTMLElementClass1;
elementToToggle2.onclick = toggleHTMLElementClass2;
elementToToggle3.onclick = toggleHTMLElementClass3;
elementToToggle4.onclick = toggleHTMLElementClass4;
