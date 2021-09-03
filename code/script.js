"use strict";

// This is a function that toggles the class "active"
function toggle() { 
  // this. is a keyword which lets me add a class to the element I click on
  this.classList.toggle("active");
  this.classList.toggle("fa-minus");
}

let icon = document.getElementsByClassName("fa-plus");
// I create a variable and name it elements, i get my information from the class names in my html and put it as an array in this variable
let elements = document.getElementsByClassName("question"); 
// this for loop lets me loop through the elements on my page and put them into an array
for (let i = 0; i < elements.length; ++i) { 
  // this lets me get the right element from the right position in my array (i.e the element I click on)
  elements[i].onclick = toggle;
}

console.log(icon);
console.log(elements);

// $(".question").click(function(){
//   $(".answer").slideDown(".answer");
//   $(".question i").addClass("fa fa-minus");
// });

$(this).click(function(){
  if(!$("div.question").hasClass("active")) {
    $(".answer").slideDown();
    $(".question i").removeClass("fa fa-plus");
    $(".question i").addClass("fa fa-minus");
  } else {
    $(".answer").slideUp();
    $(".question i").removeClass("fa fa-minus");
    $(".question i").addClass("fa fa-plus");
  }
});
