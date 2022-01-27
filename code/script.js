// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
//function toggle() {
// this.classList.toggle("active")
//}
// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle


document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('accordion-button--active');

    const accordionContent = button.nextElementSibling;
    accordionContent.classList.toggle("active");
  })
});

//const accordionContent = button.nextElementSibling;

/*if (button.classList.contains('accordion-button--active')) {
  accordionContent.style.maxHeight= accordionContent.scrollHeight + 'px';


} else {
  accordionContent.style.maxHeight = 0;

}*/

