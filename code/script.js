

// I am not 100% sure whether my indentation in Javascript is correct. Feels like something is off
const accordionQuestion = document.querySelectorAll('.accordion-question');

accordionQuestion.forEach(accordionHeader =>  {
      accordionHeader.addEventListener ('click', () => {
        accordionHeader.classList.toggle ('question-clicked');
        const accordionAnswer = accordionHeader.nextElementSibling;
        if (accordionHeader.classList.contains('question-clicked') ) {
          accordionAnswer.style.height = accordionAnswer.scrollHeight + "px";
        }
        else {
          accordionAnswer.style.height = '0';
        }
      })
});