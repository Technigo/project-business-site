// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
// function myfunk(x) {
//   x.classList.toggle("active")
// }

const qst1 = document.getElementById('section1')
const qst2 = document.getElementById('section2')
const btn1 = document.getElementById('button1')
const btn2 = document.getElementById('button2')
const qst3 = document.getElementById('section3')
const btn3 = document.getElementById('button3')

// btn1.onclick = qst1.classList.toggle('active')

// btn2.onclick = qst2.classList.toggle('active')

function myfunk1() {
  qst1.classList.toggle('active')
}

function myfunk2() {
  qst2.classList.toggle('active')
}

function myfunk3() {
  qst3.classList.toggle('active')
}





// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle

// function validateForm() {
//   var x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }



// function myFuncHide() {
//   var x = document.getElementById("myDiv");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

// function myFunc2() {
//   var element = document.getElementById("btn");
//   element.classList.toggle("active");
// }


// Add active class to the current button (highlight it)
// var header = document.getElementById("accordion");
// var btns = document.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace("-active", "");
//     }
//     this.className += "-active";
//   });
// }
