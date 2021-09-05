// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// Find all elements with the class "accordion-item-header" and assign them to the variable "accordionItemHeader".
  const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

// Put all accordionItemHeader in the accordionItemHeaders ListeningStateChangedEvent, and toggle the class active depending on whether they already are active or not 
    accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
  });
});

//https://forum.squarespace.com/topic/188162-looking-to-find-coding-to-have-a-multi-layered-accordion-dropdown-in-my-faq///
