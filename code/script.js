// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

const sectionOne =
document.getElementById("section1")

sectionOne.onclick = () => {
  sectionOne.classList.toggle("active")
}


const sectionTwo =
document.getElementById("section2")

sectionTwo.onclick = () => {
  sectionTwo.classList.toggle("active")
}


const sectionThree =
document.getElementById("section3")

sectionThree.onclick = () => {
  sectionThree.classList.toggle("active")
}


const sectionFour =
document.getElementById("section4")

sectionFour.onclick = () => {
  sectionFour.classList.toggle("active")
}







// const button = 
// document.getElementById("button").onclick = toggleAccordion

// button.onclick = toggleAccordion

// function toggleAccordion() {
//   this.classlist.toggleAccordion ("active")
// }


// function toggle() {
//   this.classList.toggle("active")
//}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle 
