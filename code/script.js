// Selecting an HTML element
//const elementToToggle = document.querySelector("#section1");
// A function that adds and remove the class "active"
//const toggleHTMLElementClass = () => {
//  elementToToggle.classList.toggle("active");
// };
// Adding the toggle function to our selected element, so everytime it's clicked the class will be toggled
// elementToToggle.onclick = toggleHTMLElementClass;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const dropdownButton = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("click", function () {
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});
