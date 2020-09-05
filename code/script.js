
const accordionQuestions = document.querySelectorAll('.question');
 
accordionQuestions.forEach(question => {
  question.onclick = event => {
    const isActive = question.classList.contains('active')
    accordionQuestions.forEach(inner => {
      inner.classList.remove('active')
    })
    if(isActive===false){
      question.classList.toggle('active')
    }
    
  }

})



