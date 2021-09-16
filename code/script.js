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

// Sticky navbar while scrolling
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } 
  else {
    navbar.innerHTML += `
  display: none;
  `
  }
}


