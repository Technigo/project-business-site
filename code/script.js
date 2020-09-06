// A function that adds and remove the class "active" on the section you click on.
//ACCORDION: 
const accordionSection1 = document.getElementById("section1");
const accordionSection2 = document.getElementById("section2");
const accordionSection3 = document.getElementById("section3");
const accordionSection4 = document.getElementById("section4");
const accordionSection5 = document.getElementById("section5");

accordionSection1.onclick = () => {
  const answerContainer1 = accordionSection1.nextElementSibling;
  answerContainer1.classList.toggle("active");
 } 

 accordionSection2.onclick = () => {
  const answerContainer2 = accordionSection2.nextElementSibling;
  answerContainer2.classList.toggle("active");
 }

 accordionSection3.onclick = () => {
  const answerContainer3 = accordionSection3.nextElementSibling;
  answerContainer3.classList.toggle("active");
 } 

 accordionSection4.onclick = () => {
  const answerContainer4 = accordionSection4.nextElementSibling;
  answerContainer4.classList.toggle("active");
 }

 accordionSection5.onclick = () => {
  const answerContainer5 = accordionSection5.nextElementSibling;
  answerContainer5.classList.toggle("active");
 }

