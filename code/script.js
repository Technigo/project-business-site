// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggleFunction() {
  this.classList.toggle('active')
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById('question1').onclick = toggleFunction
document.getElementById('question2').onclick = toggleFunction
document.getElementById('question3').onclick = toggleFunction
document.getElementById('question4').onclick = toggleFunction
document.getElementById('question5').onclick = toggleFunction

// Another way of doing accordion that I found just to remember myself  //
// const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

// accordionItemHeaders.forEach(accordionItemHeader => {
//   accordionItemHeader.addEventListener('click', event => {
//     accordionItemHeader.classList.toggle('active');
//   })
