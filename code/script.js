//Makes hamburger navbar open and close. When active a new navbar icon is shown. See CCS row 64
const menuToggle = document.querySelector('.toggle')
      const showcase = document.querySelector('.showcase')

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active')
        showcase.classList.toggle('active')
      })
//Accordion opens when clicking on a question
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
