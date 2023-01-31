// Selecting an HTML element
const elementToToggle = document.querySelector("#section1");
// A function that adds and remove the class "active" 
// const toggleHTMLElementClass = () => {
//   elementToToggle.classList.toggle("active");
// };
// Adding the toggle function to our selected element, so everytime it's clicked the class will be toggled
//function 1
elementToToggle.onclick = toggleHTMLElementClass;
function toggleHTMLElementClass() {elementToToggle.classList.toggle("active")};

//function 2
const elementToToggle2 = document.querySelector("#section2");
elementToToggle2.onclick = toggleHTMLElementClass2;
function toggleHTMLElementClass2() {elementToToggle2.classList.toggle("active")};


//Alert function
const ordered = document.querySelector("#button");
ordered.onclick = orderedturtle;
function orderedturtle() {alert("Thank you for your order!")};

