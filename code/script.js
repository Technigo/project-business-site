// A hidden message function and change of button color.

const btn = document.getElementById("button")

btn.onclick = () => {
  alert('Hello you!👽')
  btn.style.backgroundColor = 'black'
  btn.style.color ="pink"
}

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



