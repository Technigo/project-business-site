// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle

//FORM//
const formInp = document.getElementById('form');//selector for the form
formInp.addEventListener('submit',yourName); //event Listener

function yourName(e) {
  e.preventDefault();
  const name = document.getElementById('fname'); //selector for the input-text name value
  alert(`Thank you for registering with us ${name.value}!`);
  name.value= "";
}

//Accordion//
//document.getElementById('question1').onclick = show;
const qone = document.getElementById('question1');
qone.addEventListener('click', show);

function show(e) {
//this.classList.toggle('question');

console.log(e);
}

