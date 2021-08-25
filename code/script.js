// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active");
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle;

$(window).scroll(function (e) {
  var $el = $(".fixedElement");
  var isPositionFixed = $el.css("position") == "fixed";
  if ($(this).scrollTop() > 200 && !isPositionFixed) {
    $el.css({ position: "fixed", top: "0px" });
  }
  if ($(this).scrollTop() < 200 && isPositionFixed) {
    $el.css({ position: "static", top: "0px" });
  }
});
