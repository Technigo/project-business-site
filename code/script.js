// A function that 
function toggle() {
  this.nextElementSibling.classList.toggle('faq--answer-active');
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById('openQuestion').onclick = toggle;
