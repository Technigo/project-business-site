const question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event =>{
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
    else {
      answer.style.maxHeight = 0;
    }
  });
});
 
//Above, a function that adds and remove the class "active" on the section being clicked.



const header = document.querySelector('.header');
const headerOffset = header.offsetTop;

window.onscroll = () => {
if (headerOffset >= window.pageYOffset) {
  header.classList.remove('sticky');
} else {
  header.classList.add('sticky');
}
}
