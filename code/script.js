//Makes hamburger navbar open and close. When active a new navbar icon is shown.
const menuToggle = document.querySelector('.toggle')
      const showcase = document.querySelector('.showcase')

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active')
        showcase.classList.toggle('active')
      })

// Accordion: when clicked = active styling which displays a max height of the accordion content. 
//When not active, it goes from max height to 0 which hides the content of the accordion.

document.querySelectorAll('.accordion__button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle('accordion__button--active');

    if (button.classList.contains('accordion__button--active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

    } else {
      accordionContent.style.maxHeight = 0;
    }

  });
});