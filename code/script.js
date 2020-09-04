// Find all elements with the class "accordion-item-header" and assign them to the variable "accordionItemHeader".
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

// Put all accordionItemHeader in the accordionItemHeaders ListeningStateChangedEvent, and toggle the class active depending on whether they already are active or not 
accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
  });
});

// This one updates the slider range. Couldn't get it to update on change, unfortunately.
function updateTextInput(val) {
  document.getElementById('textInput').innerHTML=val; 
}