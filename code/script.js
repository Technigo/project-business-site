const headerTitle = document.getElementById("header-title")
const btn = document.getElementById("button")

btn.onclick = () => {
  btn.style.backgroundColor = 'green'
  headerTitle.innerText = "김장 하기 좋은 날"
}

document.addEventListener('DOMContentLoaded', function () {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction 
  window.addEventListener('scroll', myFunctionForSticky);

  // Get the navbar
  var navbar = document.getElementById('myNav');

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. 
  // Remove "sticky" when you leave the scroll position

  function myFunctionForSticky() {
    if (window.pageYOffset >= sticky) {
      console.log("window.pageYOffset >= sticky");
    } else {
      console.log("Not window.pageYOffset >= sticky");
    }
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }

  /*Toggle between adding and removing the "responsive" class to topnav
  when the user clicks on the icon*/

  function myFunctionForResponsive() {
    navbar.classList.toggle('responsive');
  }
})

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById('question1').onclick = toggle

function toggle() {
  document.getElementById('answer1').classList.toggle('active')
}

document.getElementById('question2').onclick = toggleTwo

function toggleTwo() {
  document.getElementById('answer2').classList.toggle('active')
}

// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
