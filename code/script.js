
// This javascript adds and remove the class "active" on the section you click on. Used for the accordion on the site.

// Code adapted from Webdevtrick ( https://webdevtrick.com )

const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

