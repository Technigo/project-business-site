// Selecting an HTML element 
// A function that adds and remove the class "active" 
const elementToToggle = document.querySelector("#quest1");
const elementToToggle2 = document.querySelector("#quest2"); 
const elementToToggle3 = document.querySelector("#quest3");
const elementToToggle4 = document.querySelector("#quest4");
const elementToToggle5 = document.querySelector("#quest5");


const toggleHTMLElementClass = () => {
  elementToToggle.classList.toggle("active");
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
const toggleHTMLElementClass5 = () => {
  elementToToggle5.classList.toggle("active");
};


// Adding the toggle function to our selected element, so everytime it's clicked the class will be toggled
elementToToggle.onclick = toggleHTMLElementClass;
elementToToggle2.onclick = toggleHTMLElementClass2;
elementToToggle3.onclick = toggleHTMLElementClass3;
elementToToggle4.onclick = toggleHTMLElementClass4;
elementToToggle5.onclick = toggleHTMLElementClass5;
