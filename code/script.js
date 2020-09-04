// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("active")
// }

// // Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle

const accordionHeader1 = document.getElementById("accordion-header-1");
const accordionHeader2 = document.getElementById("accordion-header-2");
const accordionHeader3 = document.getElementById("accordion-header-3");

accordionHeader1.onclick = () => {
    const accordionTextContainer1 = accordionHeader1.nextElementSibling;
    accordionTextContainer1.classList.toggle('active');

    accordionHeader2.nextElementSibling.classList.remove('active');
    accordionHeader3.nextElementSibling.classList.remove('active');


}

accordionHeader2.onclick = () => {
    const accordionTextContainer2 = accordionHeader2.nextElementSibling;
    accordionTextContainer2.classList.toggle('active');

    accordionHeader1.nextElementSibling.classList.remove('active');
    accordionHeader3.nextElementSibling.classList.remove('active');

}

accordionHeader3.onclick = () => {
    const accordionTextContainer3 = accordionHeader3.nextElementSibling;
    accordionTextContainer3.classList.toggle('active');
    accordionHeader1.nextElementSibling.classList.remove('active');
    accordionHeader2.nextElementSibling.classList.remove('active');
}