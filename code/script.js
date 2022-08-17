// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

const accordionBtn1 = document.querySelector('#section1');
const answerTextBox = document.querySelector(".answer");

accordionBtn1.addEventListener('click', () => {
  answerTextBox.classList.toggle("active");
});