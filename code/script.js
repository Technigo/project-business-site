// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed 
// when the element is clicked.
//document.getElementById("section1").onclick = toggle


//selects all .question

const faqQuestions = document.querySelectorAll(".accordion .question"); 
faqQuestions.forEach(addClickEvent);

function addClickEvent(question) {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
  });
}


// HAMBURGER //

const navigation = document.querySelector(".navigation")
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", toggleHamburger)

function toggleHamburger(){
  navigation.classList.toggle("open-menu")
  hamburger.classList.toggle("close-menu")
}