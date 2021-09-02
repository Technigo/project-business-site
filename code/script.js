// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active");
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//the function iterate over the nodeList of question class to change the classname
document.querySelectorAll(".question").forEach(element => element.onclick = toggle);



//getElementByClassName returns an HTMLCollection which do not have iterate methods
//querySelectorAll return a nodeList that is possible to iterate with forEach
//see: https://developer.mozilla.org/es/docs/Web/API/NodeList