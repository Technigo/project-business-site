
// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle
document.getElementById("section4").onclick = toggle

// toggles faq 1
// const faq1 = document.getElementById('section1')
// faq1.onclick = toggleFaqAnswer1

// function toggleFaqAnswer1() {
//   console.log('Hello!') //This will show in the console log, just testing
//   this.classList.toggle('active')
// }

// // toggles faq 2
// const faq2 = document.getElementById('section2')
// faq2.onclick = toggleFaqAnswer2

// function toggleFaqAnswer2() {
//   this.classList.toggle('active')
// }

// // toggles faq 3 (shorter version og writing it)
// document.getElementById('section3').onclick = toggleFaqAnswer3

// function toggleFaqAnswer3() {
//   this.classList.toggle('active')
// }

// // toggles faq 4 (shorter version og writing it)
// document.getElementById('section4').onclick = toggleFaqAnswer4

// function toggleFaqAnswer4() {
//   this.classList.toggle('active')
// }