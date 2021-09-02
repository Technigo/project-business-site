// Selects an HTML element, and calls a function which will be executed when the element is clicked.
function toggleAccordion () {
  this.classList.toggle('open')
}
// Accordion
document.getElementById('section1').onclick = toggleAccordion
document.getElementById('section2').onclick = toggleAccordion
document.getElementById('section3').onclick = toggleAccordion
document.getElementById('section4').onclick = toggleAccordion


// Navbar sticky
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } 
  else {
    navbar.classList.remove("sticky");
  }
}


