 // nedan skapar vi en funktion och namnger den (ex. toggle eller toggleDisplay)

function toggle() {
  this.classList.toggle("active");
}

function toggleDisplay() {
  this.classList.toggle("textpopup");
}

// nedan tilldelas en händelse funktionen vi skapade ovan (ex. mouseover aktiverar klassen .class2 
//  när muspekaren är ovanpå sidebar-img1)

document.getElementById("section1").onclick = toggle;
document.getElementById("section2").onclick = toggle;
document.getElementById("section3").onclick = toggle;
document.getElementById("section4").onclick = toggle;

document.getElementById("sidebar-img1").onmouseover = toggleDisplay;
document.getElementById("sidebar-img1").onmouseout = toggleDisplay;
