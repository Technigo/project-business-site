// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("active")
// }

// // Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle


const accordionItemHeader1 = document.getElementById('accordionItemHeader1');
const accordionItemHeader2 = document.getElementById('accordionItemHeader2');
const accordionItemHeader3 = document.getElementById('accordionItemHeader3');

accordionItemHeader1.onclick = () => {
  const accordionTextContainer1 = accordionItemHeader1.nextElementSibling;
  accordionTextContainer1.classList.toggle('active');
  accordionItemHeader1.classList.toggle('active');

  const accordionTextContainer2 = accordionItemHeader2.nextElementSibling;
  accordionTextContainer2.classList.remove('active');
  accordionItemHeader2.classList.remove('active');
  
  const accordionTextContainer3 = accordionItemHeader3.nextElementSibling;
  accordionTextContainer3.classList.remove('active');
  accordionItemHeader3.classList.remove('active');
}

accordionItemHeader2.onclick = () => {
  const accordionTextContainer2 = accordionItemHeader2.nextElementSibling;
  accordionTextContainer2.classList.toggle('active');
  accordionItemHeader2.classList.toggle('active');

  const accordionTextContainer1 = accordionItemHeader1.nextElementSibling;
  accordionTextContainer1.classList.remove('active');
  accordionItemHeader1.classList.remove('active');

  const accordionTextContainer3 = accordionItemHeader3.nextElementSibling;
  accordionTextContainer3.classList.remove('active');
  accordionItemHeader3.classList.remove('active');
}

accordionItemHeader3.onclick = () => {
  const accordionTextContainer3 = accordionItemHeader3.nextElementSibling;
  accordionTextContainer3.classList.toggle('active');
  accordionItemHeader3.classList.toggle('active');
  

  const accordionTextContainer1 = accordionItemHeader1.nextElementSibling;
  accordionTextContainer1.classList.remove('active');
  accordionItemHeader1.classList.remove('active');
  
  const accordionTextContainer2 = accordionItemHeader2.nextElementSibling;
  accordionTextContainer2.classList.remove('active');
  accordionItemHeader2.classList.remove('active');
}

const header = document.querySelector('.header');
const headerOffset = header.offsetTop;

window.onscroll = () => {
  if (headerOffset >= window.pageYOffset) {
  header.classList.remove('sticky');
  } else {
  header.classList.add('sticky')
  }
}
