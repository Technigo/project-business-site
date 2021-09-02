// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
this.classList.toggle('active')
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById('section1').onclick = toggle
document.getElementById('section2').onclick = toggle
document.getElementById('section3').onclick = toggle
document.getElementById('section4').onclick = toggle
// Anteckningar från codepen
// document.getElementById('button').onclick = toggleDrinkMenu

// //or document.uerySelector('#button').onclick = toggleDrinkMenu
// // When the button is clicked, the toggleDrinkMenu function is called.

// // This is the function that will add or remove the class open to the button.
// // In the CSS we should to do styling to show or hide the ul 
// // (important! not the div with the class button that is selected, but it's sibling)
// function toggleDrinkMenu() {
//   this.classList.toggle('open')
//   // the word "this" refers to the element that is the selector.
// }

