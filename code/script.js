// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

// document.getElementById("section1").onclick = toggle


const buttonOne = document.getElementById('button1');
const infoContentOne = document.getElementById('info-content-1');

const buttonTwo = document.getElementById('button2');
const infoContentTwo = document.getElementById('info-content-2');

console.log(button1);

buttonOne.addEventListener('click', () => {
  infoContentOne.classList.toggle('info-selected');
})

buttonTwo.addEventListener('click', () => {
  infoContentTwo.classList.toggle('info-selected');
})