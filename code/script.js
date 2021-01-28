const question = document.querySelectorAll('.question');

question.forEach(question => {
  question.addEventListener('click', event => {
    question.classList.toggle('active');

  });
});
