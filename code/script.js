
//For accordion//

var que = document.getElementsByClassName("question");
var i;

for (i = 0; i < que.length; i++) {
  
  
  que[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var answers = this.nextElementSibling;
    if (answers.style.display === "block") {
      answers.style.display = "none";
    } else {
      answers.style.display = "block";
    }
  });
}

//For menu bar//
function myFunction() {
  var x = document.getElementById("nav-contents");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  };
}
