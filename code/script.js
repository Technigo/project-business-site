var question = document.getElementsByClassName("question");
var i;

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    this.classList.toggle("answer");
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}