


// // A function that adds and remove the class "active" on the section you click on.
// // We haven't really talked about ´this´ yet, but we will... ;)
// // console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("active")
// }

// console.log(toggle())

// // Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle


const section1 = document.getElementById("section1").onclick = toggle 
const section2 = document.getElementById("section2").onclick = toggle 
const section3 = document.getElementById("section3").onclick = toggle 
const section4 = document.getElementById("section4").onclick = toggle 



function toggle() {
  this.classList.toggle("active");
}













