// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

// document.getElementById("section1").onclick = toggle




// FAQ calls function + when clicked. 
//Row 20-23 sets the rule that only one FAQ item can be opened at once. 
// My guide was this video: https://www.youtube.com/watch?v=dr8Emho-kYo&ab_channel=CodingJourney 

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
   

   accordionItemHeader.classList.toggle("active");
   const accordionItemBody = accordionItemHeader.nextElementSibling;
   if(accordionItemHeader.classList.contains("active")) {
     accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
   }
   else {
      accordionItemBody.style.maxHeight = 0;
  }
 });
});

