const questions = document.querySelectorAll('.panel-questions');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active')
  })
})
 

const updateTextInput = (val) => {
  document.getElementById('textInput').value=val; 
}
