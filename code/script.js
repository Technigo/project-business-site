// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle

var acc = document.getElementsByClassName ("accordion");
var i; 

for (i = 0 < acc.length; i++) {
  acc[i].addEventListener ("click",function() {
    this.classList.toggle ("active");
    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none" ;
    } else {
      panel.style.display = "block";
    }
  });
}
