/*
// Selecting an HTML element
const elementToToggle = document.querySelector("#pizza");
// A function that adds and remove the class "active" 
const toggleHTMLElementClass = () => {
  elementToToggle.classList.toggle("active");
};
// Adding the toggle function to our selected element, so everytime it's clicked the class will be toggled
elementToToggle.onclick = toggleHTMLElementClass;*/





var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
























