
// A function that adds and remove the class "active" on the section you click on.

function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

document.getElementById("Question1").onclick = toggle

document.getElementById("Question2").onclick = toggle



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