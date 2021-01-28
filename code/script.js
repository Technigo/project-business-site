// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works


//1 get the icon ids' and store as variables
const minusElement1 = document.querySelector('#minus1')
const plusElement1 = document.querySelector('#plus1')

const minusElement2 = document.querySelector('#minus2')
const plusElement2 = document.querySelector('#plus2')

const minusElement3 = document.querySelector('#minus3')
const plusElement3 = document.querySelector('#plus3')

//function adds and remove active on toogle, same for the plus an minus icons. 
//where minus icon styled with none as default and plus display block 
//and adds the classes .show .hide on toggle

function toggleOne() {
  this.classList.toggle("active")
  minusElement1.classList.toggle('show')
  plusElement1.classList.toggle('hide')
}

function toggleTwo() {
 this.classList.toggle("active")
 minusElement2.classList.toggle('show')
 plusElement2.classList.toggle('hide')
 }

 function toggleThree() {
  this.classList.toggle("active")
  minusElement3.classList.toggle('show')
  plusElement3.classList.toggle('hide')
  }
 
// function toggleBurger(){
//   this.classList.toggle("open")
//   console.log("hello")

// }

function clickAlert() {
  alert("Welcome to Julia's🙋‍♀️. View your inbox for a starting treat👀🍲")
}
// Selects an HTML element, and calls a function 
//which will be executed when the element is clicked.
document.querySelector("#section1").onclick = toggleOne
document.querySelector("#section2").onclick = toggleTwo
document.querySelector("#section3").onclick = toggleThree
document.querySelector(".button-sign-up").onclick = clickAlert
// document.querySelector("#burger").onclick = toggleBurger



