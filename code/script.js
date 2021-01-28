// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("question-clicked")
// }

// // Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle

// const accordionQuestion = document.getElementById('section1')
// const accordionAnswer = document.getElementById('answer1')

// accordionQuestion.addEventListener('click', () => {
//   // accordionQuestion.classList.toggle ('question-clicked');
//   accordionQuestion.classList.toggle ('question-clicked');
//   accordionAnswer.classList.toggle ('answer-open');
// })

const accordionQuestion = document.querySelectorAll('.accordion-question');

accordionQuestion.forEach(accordionHeader =>  {
      accordionHeader.addEventListener ('click', () => {
        accordionHeader.classList.toggle ('question-clicked');
        const accordionAnswer = accordionHeader.nextElementSibling;
        accordionAnswer.classList.toggle ('answer-open');
      })
});

        // if (accordionHeader.classList.contains('question-clicked')){
        //     accordionAnswer.style.height = 'auto';}
        // else {
        //   accordionAnswer.style.height = '0';
        // }