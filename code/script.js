// open accordion 2 and 4
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

// open accordion 1
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

// open accordion 3
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


// sign up form javascript
document.getElementById('form').onsubmit = (event) => {
  event.preventDefault()

  const inputValue = document.getElementById('nameInput').value

 document.getElementById('thankYou').innerText = `Thank you ${inputValue}` 
}


// open and close mobile nav
const mobileBtn = document.getElementById('hamburger')
            nav = document.querySelector('nav')
            mobileBtnExit = document.getElementById('close-menu')

mobileBtn.addEventListener('click', () => {
        nav.classList.add('nav-links');
      })

      mobileBtnExit.addEventListener('click', () => {
          nav.classList.remove('nav-links');
      })