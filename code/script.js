const accordionItemHeaders = document.querySelectorAll(".accordion-item-header"); //Variable for the accordion item headers. 

accordionItemHeaders.forEach(accordionItemHeader => { // For each accordion item header, an event listener of "click" is added.
  accordionItemHeader.addEventListener("click", event => {
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active"); // Adding class "active" when a header is clicked
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0; //The first following sibling that is an element (next accordions) will not stay folded out if a new accordion is clicked.
    }
    
    accordionItemHeader.classList.toggle("active"); // If the accordion is toggled active, the body will "fold out"
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) { 
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0; // The accordions that are not toggled active will not fold out. 
    }
  });
});