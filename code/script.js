// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

/*document.getElementById("section1").onclick = toggle*/

const question1 = document.getElementById("section1");
const question2 = document.getElementById("section2");
const question3 = document.getElementById("section3");

// question1.onclick = function(){
//   question1.classList.toggle('active');
// }

function banana(){
  question1.classList.toggle('active');
}

function banana2(){
  question2.classList.toggle('active');
}

function peter (){
  question3.classList.toggle('active');
}

question1.addEventListener('click',banana);
question2.addEventListener('click',banana2);
question3.addEventListener('click',peter);