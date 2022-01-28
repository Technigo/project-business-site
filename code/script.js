
// A function that adds and remove the class "active" on the section you click on.

// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

// document.getElementById("Question1").onclick = toggle

// document.getElementById("Question2").onclick = toggle

// document.getElementById("Question3").onclick = toggle

// document.getElementById("Question4").onclick = toggle

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");

//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
    
//   });
// }

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var acc = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var acc = document.getElementsByClassName("accordion3");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



// sign up form javascript below

document.getElementById('form').onsubmit = (event) => {
  event.preventDefault()

  const inputValue = document.getElementById('nameInput').value

 document.getElementById('thankYou').innerText = `Thank you ${inputValue}` 
}


// open and close mobile nav below //

const mobileBtn = document.getElementById('hamburger')
            nav = document.querySelector('nav')
            mobileBtnExit = document.getElementById('close-menu')

mobileBtn.addEventListener('click', () => {
        nav.classList.add('nav-links');
      })

      mobileBtnExit.addEventListener('click', () => {
          nav.classList.remove('nav-links');
      })