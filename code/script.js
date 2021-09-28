const signUp = document.getElementById('sign-up')

// A function that adds and remove the class "active" on the section you click on.




function toggle() {
this.classList.toggle("active")
//classList adds and remove the class "active" on the section you click on.

}

// Selects an HTML element, and calls here the toggle function. It will be executed when the element is clicked.
document.getElementById('section1').onclick = toggle
document.getElementById('section2').onclick = toggle
document.getElementById('section3').onclick = toggle

// signUp.addEventListener(click, (redirect))


