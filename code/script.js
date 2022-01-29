document.querySelectorAll('.faq-question').forEach(el => {
  el.addEventListener('click', e => {
    let accordion = e.target;
    accordion.nextElementSibling.classList.toggle('faq-answer-active');
  });
});