// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

/*
function accordion() {
  this.classList.toggle("active");
}*/

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
/*
var acc = document.getElementById("section1");
acc.onclick = accordion
*/


/*dont forget to link the javascript file here! */
 
    let acc = document.getElementsByClassName("accordionSection__button");
    let i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.style.background = "#fff8dc";
          panel.style.fontSize = "16px";
          panel.style.textAlign = "justify";
        } 

      });
    }
   