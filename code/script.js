
// const accordion = document.getElementsByClassName('accordion-question');
// let i;

// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener('click', function() {
//     this.classList.toggle('active');
//     const answer = this.nextElementSibling;
//     if (answer.style.maxHeight) {
//       answer.style.maxHeight = null;
//     } else {
//       answer.style.maxHeight = answer.scrollHeight + 'px';
//     } 
//   });
// }
const accordion = document.getElementsByClassName("accordion-question");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    const answer = this.nextElementSibling;
    if (answer.style.maxHeight) { // means that if `answer` has a height (is open), put it at `null` (close it)
      answer.style.maxHeight = null;
    } else { // otherwise (if `answer` has no height), put the other answers' height at `null` (close them) if there are any
      const active = document.querySelectorAll(".accordion-question.active");
      for (let j = 0; j < active.length; j++) {
        active[j].classList.remove("active");
        active[j].nextElementSibling.style.maxHeight = null;
      }
      this.classList.toggle("active"); // ... and open the answer for the question clicked
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}