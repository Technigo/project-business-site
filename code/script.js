  /* Här beskriver jag vad som ska hända när man ex. klickar på ett element. Det är alltså INTE här själva grejen händer... */

document.getElementById("burger").onclick = toggleButton;

document.getElementById("signUp").onsubmit = validateForm;

var questions = document.getElementsByClassName("faq-question");
for (var i = 0; i < questions.length; i++) {
  questions[i].onclick = toggle;
}

var toggleDisplayClass = "toggle-display";
var toggleElements = document.getElementsByClassName(toggleDisplayClass);
for (var i = 0; i < toggleElements.length; i++) {
  var specificElement = toggleElements[i];
  specificElement.onmouseover = toggleDisplay;
  specificElement.onmouseout = toggleDisplay;
}

var listOfVideos = document.getElementsByTagName("video");
for (var i = 0; i < listOfVideos.length; i++) {
  var specificVideo = listOfVideos[i]; 
  specificVideo.onmouseover = playVideo;
  specificVideo.onmouseout = pauseVideo;
}

  /* Här är alla funktioner som körs, det är här det händer typ :) */

function validateForm () {
  if (document.getElementById("termsandconditions").checked) {
    return true;
  } 
  else {
    alert('You must read and agree to the Terms & Conditions to sign up for class!'); 
    return false; 
  }
}

function toggle() {
  this.classList.toggle("open");
}
      
function toggleDisplay() {
  this.classList.toggle("opaque-text");
} 

function toggleButton () {
  this.classList.toggle("active");
}

function playVideo () {
  this.play ()
}

function pauseVideo () {
  this.pause ()
}