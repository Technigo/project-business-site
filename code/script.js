// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

let accordionHeader = document.getElementById("accordionHeader");
let accordionContent = document.getElementById("accordionContent");
let accordionHeaderTwo = document.getElementById("accordionHeaderTwo");
let accordionContentTwo = document.getElementById("accordionContentTwo");


console.log(accordionHeader);
console.log(accordionContent);
console.log(accordionHeaderTwo);

accordionHeader.addEventListener("click", () => {
 accordionContent.classList.toggle("active"); 
})

accordionHeaderTwo.addEventListener("click", () => {
accordionContentTwo.classList.toggle("activeTwo");
})



//function toggle() {
 // this.classList.toggle("active")
//}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section").onclick = toggle
