// select accordion-item-headers and store them into a variable

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

// we want to loop through each accordion-item-header
accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

//  When an accordion item header is clicked, Toggle between adding/removing the active class
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
// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
// section1.onclick = toggle

// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle

// const accordionHeader1 = document.getElementById('accordion-header-1');
// const accordionHeader2 = document.getElementById('accordion-header-2');
// const accordionHeader3 = document.getElementById('accordion-header-3');

// accordionHeader1.onclick = () => {

// const accordionTextContainer1 = accordionHeader1.nextElementSibling;
// toggle a class .active on click:
// accordionTextContainer1.classList.toggle('active')
// 
// }
// accordionHeader1.onclick = () => {
// const accordionTextContainer1 = accordionHeader1.nextElementSibling;
// toggle a class .active on click:
// accordionTextContainer2.classList.toggle('active')
// }
// accordionHeader1.onclick = () => {
// const accordionTextContainer1 = accordionHeader1.nextElementSibling;
// toggle a class .active on click:
// accordionTextContainer3.classList.toggle('active')
// }
// document.querySelectorAll(.answer);
// document.getElementsByClassName(.answer);
