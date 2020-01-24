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

// question1.onclick = function(){
//   question1.classList.toggle('active');
// }

function banana(){
  question1.classList.toggle('active');
}
function banana2(){
  question2.classList.toggle('active');
}

question1.addEventListener('click',banana);
question2.addEventListener('click',banana2);


// function

// // question1.onclick = () => {
// //   alert('test')
// // }

// const btn = document.getElementById("button")

// // btn.onclick = () => {
// //   alert('test')
// // }

// var acc = document.getElementsByClassName("accordion1");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }