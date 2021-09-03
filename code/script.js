const questions = document.querySelectorAll(".question");

questions.forEach(question => {
  question.addEventListener("click", event => {
    question.classList.toggle("active");
    const answerContainer = question.nextElementSibling;
    if(question.classList.contains("active")) {
      answerContainer.style.maxHeight = answerContainer.scrollHeight + "px";
    }
    else {
      answerContainer.style.maxHeight = 0;
    }
  })
})