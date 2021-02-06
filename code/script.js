
const question1 = document.getElementById('question1')
const question2 = document.getElementById('question2')
const question3 = document.getElementById('question3')
const question4 = document.getElementById('question4')

//Create accAnswer elementet from html-file in my case, p
const accAnswer1 = document.getElementById('acc-answer1')
const accAnswer2 = document.getElementById('acc-answer2')
const accAnswer3 = document.getElementById('acc-answer3')
const accAnswer4 = document.getElementById('acc-answer4')


question1.addEventListener('click',() => {
  accAnswer1.classList.toggle('faq-answer-clicked')
  accAnswer2.classList.remove('faq-answer-clicked')
  accAnswer3.classList.remove('faq-answer-clicked')
  accAnswer4.classList.remove('faq-answer-clicked')
})

question2.addEventListener('click',() => {
  accAnswer1.classList.remove('faq-answer-clicked')
  accAnswer2.classList.toggle('faq-answer-clicked')
  accAnswer3.classList.remove('faq-answer-clicked')
  accAnswer4.classList.remove('faq-answer-clicked') 
})

question3.addEventListener('click',() => {
  accAnswer1.classList.remove('faq-answer-clicked')
  accAnswer2.classList.remove('faq-answer-clicked')
  accAnswer3.classList.toggle('faq-answer-clicked')
  accAnswer4.classList.remove('faq-answer-clicked') 
})

question4.addEventListener('click',() => {
  accAnswer1.classList.remove('faq-answer-clicked')
  accAnswer2.classList.remove('faq-answer-clicked')
  accAnswer3.classList.remove('faq-answer-clicked')
  accAnswer4.classList.toggle('faq-answer-clicked') 
})



