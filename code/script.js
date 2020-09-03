const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
  });
});

// This one updates the slider range
function updateTextInput(val) {
  document.getElementById('textInput').innerHTML=val; 
}