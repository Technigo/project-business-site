// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle


// This javascript adds and remove the class "active" on the section you click on. Used for the accordion on the site.

// Code adapted from Webdevtrick ( https://webdevtrick.com )



let accordions = document.querySelectorAll("div.accordion");

for(let i = 0; i < accordions.length; i++){
  accordions[i].onclick = function(){
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  }
}