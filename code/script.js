//const accordionHeader1 = document.getElementById('accordion-header-1');
//const accordionHeader2 = document.getElementById('accordion-header-2');
//const accordionHeader3 = document.getElementById('accordion-header-3');

//console.log(accordionHeader1,accordionHeader2,accordionHeader3);
//console.dir(accordionHeader1,accordionHeader2,accordionHeader3);

//accordionHeader1.onclick = () => {
  //const accordionTextContainer1 = accordionHeader1.nextElementSibling;
  //accordionTextContainer1.classList.toggle('active');

  //const accordionTextContainer2 = accordionHeader2.nextElementSibling;
  //const accordionTextContainer3 = accordionHeader3.nextElementSibling;
  //accordionTextContainer2.classList.remove('active');
  //accordionTextContainer3.classList.remove('active');
//}

//accordionHeader2.onclick = () => {
  //const accordionTextContainer2 = accordionHeader2.nextElementSibling;
  //accordionTextContainer2.classList.toggle('active');

  //const accordionTextContainer1 = accordionHeader1.nextElementSibling;
  //const accordionTextContainer3 = accordionHeader3.nextElementSibling;
  //accordionTextContainer1.classList.remove('active');
  //accordionTextContainer3.classList.remove('active');
//}


//accordionHeader3.onclick = () => {
  //const accordionTextContainer3 = accordionHeader3.nextElementSibling;
  //accordionTextContainer3.classList.toggle('active');

  //const accordionTextContainer1 = accordionHeader1.nextElementSibling;
  //const accordionTextContainer2 = accordionHeader2.nextElementSibling;
  //accordionTextContainer1.classList.remove('active');
  //accordionTextContainer2.classList.remove('active');
//}

const header = document.querySelector('.header-bar');
const headerOffset = header.offsetTop;

console.dir(header);
console.log(header);

window.onscroll = () => {
    if (headerOffset >= window.pageYOffset) {
        header.classList.remove('sticky');
    }   else {
        header.classList.add('sticky');
    }
}

const accordionList = document.querySelectorAll('.accordion-header');

accordionList.forEach(item => {
  item.onclick = (event) => {
    accordionList.forEach(itemNested => {
      if (itemNested !== event.target) {
        itemNested.nextElementSibling.classList.remove('active');
        itemNested.classList.remove('active');
      } else {
        itemNested.nextElementSibling.classList.toggle('active');
        itemNested.classList.toggle('active')
      }
    })
  } 
})








//console.log(header);
//console.dir(header);
  

// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
//function toggle() {
  //this.classList.toggle("active")
  //console.log(this)
//}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("accordion-header-1").onclick = toggle
//document.getElementById("accordion-header-2").onclick = toggle
//document.getElementById("accordion-header-3").onclick = toggle

