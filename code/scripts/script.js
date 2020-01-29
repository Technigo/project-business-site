
// Funktion för att stänga andra

function toggle() {
  var activeSections = document.getElementsByClassName("active");
  for (var j = 0; j < activeSections.length; j++) {
    var activeSection = activeSections[j];
    if (activeSection != this) {
      activeSection.classList.toggle("active");
    }
  }
  this.classList.toggle("active");
}

var sections = document.getElementsByClassName("question");

for (var i = 0; i < sections.length; i++) {
  sections[i].onclick = toggle
}