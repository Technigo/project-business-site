// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)

// Function with loop

const accordionList = document.querySelectorAll('.accordion-header');

accordionList.forEach(item => {
    item.onclick = (event) => {
        accordionList.forEach(itemNested => {
            if (itemNested !== event.target) {
                itemNested.nextElementSibling.classList.remove('active');
            } else {
                itemNested.nextElementSibling.classList.toggle('active');
            }
        })
    }
});

// Sticky navbar

const navbar = document.getElementById('navbar');
const navbarOffset = navbar.offsetTop;

window.onscroll = () => {
    if (navbarOffset >= window.pageYOffset) {
         navbar.classList.remove('sticky');
     } else {
         navbar.classList.add('sticky');
     }
 }