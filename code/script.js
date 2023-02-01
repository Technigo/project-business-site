// // Selecting an HTML element
// const elementToToggle = document.getElementById("section1");
// // A function that adds and remove the class "active"
// const toggleHTMLElementClass = () => {
//   elementToToggle.classList.toggle("active");
// };
// // Adding the toggle function to our selected element, so everytime it's clicked the class will be toggled
// elementToToggle.onclick = toggleHTMLElementClass;

const elementsToToggle = document.getElementsByClassName("question");

for (i = 0; i < elementsToToggle.length; i++) {
  elementsToToggle[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
