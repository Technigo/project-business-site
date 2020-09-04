const accordionItemHeaders = document.querySelectorAll(".question");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    const currentlyActiveAccordionItemHeader = document.querySelector(".question.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.getElementsByClassName.maxHeight = accordionItemBody.scrollHeight + "px";
    }
  });
});



const questionOne = document.getElementById("question-1");
const questionTwo = document.getElementById("question-2");
const questionThree = document.getElementById("question-3");
const questionFour = document.getElementById("question-4");
const questionFive = document.getElementById("question-5");

const onQuestion1Click = () => {
  questionOne.nextElementSibling.classList.toggle("active");

  questionTwo.nextElementSibling.classList.remove("active");
  questionThree.nextElementSibling.classList.remove("active");
  questionFour.nextElementSibling.classList.remove("active");
  questionFive.nextElementSibling.classList.remove("active");
}

const onQuestion2Click = () => {
  questionTwo.nextElementSibling.classList.toggle("active");

  questionOne.nextElementSibling.classList.remove("active");
  questionThree.nextElementSibling.classList.remove("active");
  questionFour.nextElementSibling.classList.remove("active");
  questionFive.nextElementSibling.classList.remove("active");
}

const onQuestion3Click = () => {
  questionThree.nextElementSibling.classList.toggle("active");

  questionOne.nextElementSibling.classList.remove("active");
  questionTwo.nextElementSibling.classList.remove("active");
  questionFour.nextElementSibling.classList.remove("active");
  questionFive.nextElementSibling.classList.remove("active");
}

const onQuestion4Click = () => {
  questionFour.nextElementSibling.classList.toggle("active");

  questionOne.nextElementSibling.classList.remove("active");
  questionTwo.nextElementSibling.classList.remove("active");
  questionThree.nextElementSibling.classList.remove("active");
  questionFive.nextElementSibling.classList.remove("active");
}

const onQuestion5Click = () => {
  questionFive.nextElementSibling.classList.toggle("active");

  questionOne.nextElementSibling.classList.remove("active");
  questionTwo.nextElementSibling.classList.remove("active");
  questionThree.nextElementSibling.classList.remove("active");
  questionFour.nextElementSibling.classList.remove("active");
}

questionOne.onclick = onQuestion1Click;
questionTwo.onclick = onQuestion2Click;
questionThree.onclick = onQuestion3Click;
questionFour.onclick = onQuestion4Click;
questionFive.onclick = onQuestion5Click;

/*
function toggle() {
  this.classList.toggle("active");
}
document.getElementById("question-1").onclick = toggle;
document.getElementById("question-2").onclick = toggle;
document.getElementById("question-3").onclick = toggle;
document.getElementById("question-4").onclick = toggle;
document.getElementById("question-5").onclick = toggle;*/