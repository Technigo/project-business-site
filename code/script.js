// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section2").onclick = toggle



const section1 = document.getElementById("section1")
const section2 = document.getElementById("section2")
const section3 = document.getElementById("section3")



section1.onclick = () => {
  const answerContainer1 = section1.nextElementSibling.firstElementChild;
  answerContainer1.classList.toggle('active');

}

section2.onclick = () => {
  const answerContainer2 = section2.nextElementSibling.firstElementChild;
  answerContainer2.classList.toggle('active');
}

section3.onclick = () => {
  const answerContainer3= section3.nextElementSibling.firstElementChild;
  answerContainer3.classList.toggle('active');
}


