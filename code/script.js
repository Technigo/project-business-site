// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle('active');
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById('faq-1').onclick = toggle;
document.getElementById('faq-2').onclick = toggle;
document.getElementById('faq-3').onclick = toggle;
document.getElementById('faq-4').onclick = toggle;
document.getElementById('faq-5').onclick = toggle;
