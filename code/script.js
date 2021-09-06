
    /* the below i don't fully understand yet, to be honest
    but i really wanted the effect! :) 
    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_animate */

    /* define a variable that looks for the questions class */
var faq = document.getElementsByClassName("questions");
var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function() {
    /* looks in the questions class and 
    adds and removes (toggles) the active class when clicked */
    this.classList.toggle("active");
    /* the part that hides or shows the class */
    var answers = this.nextElementSibling;
    if (answers.style.maxHeight) {
      answers.style.maxHeight = null;
    } else {
      answers.style.maxHeight = answers.scrollHeight + "px";
    }
  });
}

    /* i get the feeling this is overcomplicating things for the effect i'm after,
    but as i dive deeper into JS maybe it will start to make sense */