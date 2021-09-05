const items = document.querySelectorAll(".accordion a");
 
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));

// I looked at this code for my FAQ section but changed quie some stuff in it  https://webdevtrick.com/html-css-faq-design/ //