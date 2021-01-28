const accordion = document.getElementById("accordion");

let currentQuestion;

accordion.addEventListener("click", (event) => {
  const question = event.target;
  const answer = question.nextElementSibling;
  //   make sure that the actions only run if user clicked on a question
  if (!question.classList.contains("accordion__question")) {
    return;
  }
  // if no previous questions are open then just open the target
  if (currentQuestion === undefined) {
    //set new current question and open the answer
    toggleAccordionItem(question, answer);
    currentQuestion = question;
    return;
  }
  if (currentQuestion === question) {
    toggleAccordionItem(currentQuestion, currentQuestion.nextElementSibling);
  } else {
    toggleAccordionItem(question, answer);
    currentQuestion = question;
  }
});

const toggleAccordionItem = (question, answer) => {
  question.classList.toggle("accordion__question--open");
  answer.classList.toggle("accordion__answer--open");
};
