const accordion = document.getElementById("accordion");

let currentQuestion;

accordion.addEventListener("click", (event) => {
  const question = event.target;
  const answer = question.nextElementSibling;
  //   make sure that the actions only run if user clicked on a question
  if (!question.classList.contains("accordion__question")) {
    return;
  }
  // run the toggle only once if there is no previous question
  if (currentQuestion === undefined) {
    toggleAccordionItem(question, answer);
    currentQuestion = question;
    return;
  }
  // Toggle logic for various use cases
  if (currentQuestion === question) {
    // user clicked the currentQuestion while it was open => close it.
    toggleAccordionItem(currentQuestion, currentQuestion.nextElementSibling);
    if (!currentQuestion.classList.contains("accordion__question--open")) {
      // user closed the currentQuestion and we must reset it
      currentQuestion = undefined;
      return;
    }
  } else {
    //   user clicked on an unopened question => open it & close the previous question
    toggleAccordionItem(currentQuestion, currentQuestion.nextElementSibling);
    toggleAccordionItem(question, answer);
    currentQuestion = question;
  }
});

// Function to toggle the accordion open/close
const toggleAccordionItem = (question, answer) => {
  question.classList.toggle("accordion__question--open");
  answer.classList.toggle("accordion__answer--open");
};
