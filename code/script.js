// Selecting an HTML element

const elementToToggle1 = document.querySelector("#question-hidden1");
const elementToToggle2 = document.querySelector("#question-hidden2");
const elementToToggle3 = document.querySelector("#question-hidden3");
const elementToToggle4 = document.querySelector("#question-hidden4");



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


