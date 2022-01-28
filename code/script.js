const questions = document.getElementsByClassName('faq-question');

for (i=0; i<questions.length; i++) {
  questions[i].addEventListener('click', function() {
    this.nextElementSibling.classList.toggle('faq-answer-active');
  })
}