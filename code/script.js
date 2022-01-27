const questions = document.querySelectorAll('.panel-questions');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active')
  })
})
 
