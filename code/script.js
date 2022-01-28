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



const btn = document.getElementByClassName("question")

document.getElementById("question").onclick = toggleButton

function toggleButton() {
btn.classList.toggle('selected');
}



// $('button').on('click', function(){
//   $('button').removeClass('selected');
//   $(this).addClass('selected');
// });



// document.getElementsByClassName('answer').onclick = toggle ;




// const btn = document.getElementById("button")

// btn.onclick=toggleRedSwitch

// "document.getElementById('id1').style.color = 'red'"


// function RedSwitch() {

//   btn.classList.style.color = 'red'
// }

// document.getElementByName("answer").onclick = toggle


// document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event


// This example returns a list of all <p> elements with class="intro".

// Example
// const x = document.querySelectorAll("p.intro");

// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }