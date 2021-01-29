// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
/*function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle

My code starts here -->*/

//defining variable
const accordionItemHeader = document.querySelectorAll(".accordion-item-header");

//function; for every variable toggle the class active when clicking on header
accordionItemHeader.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
    });
});