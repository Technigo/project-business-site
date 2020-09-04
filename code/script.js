
const accordionQuestions = document.querySelectorAll('.question');

accordionQuestions.forEach(accordionQuestion => {
  accordionQuestion.addEventListener('click', event => {
    
    
    accordionQuestion.classList.toggle('active');
    const accordionAnswer = accordionQuestion.nextElementSibling;
    if(accordionAnswer.classList.contains('active')){
      accordionAnswer.style.maxHeight = accordionAnswer.scrollHeight + "px";
    }
   

    const currentQuestion = document.querySelector('.question.active');
    if(currentQuestion && currentQuestion!==accordionQuestion) {
      currentQuestion.classList.toggle('active');
    }
  })
})
/*I've got a problem with the if-condition not working as I want it to.
It works at first and then it stops.*/