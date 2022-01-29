
const buttons = document.querySelectorAll('.accordion');


buttons .forEach (button => {
  button.addEventListener('click', ()=> {
    
  const accordionContent = button.nextElementSibling;
  button.classList.toggle('accordion--active');
  accordionContent.classList.toggle('show-answer');
    
  })
  });