
// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
    this.classList.toggle("active")
  }
  
  // Selects an HTML element, and calls a function which will be executed when the element is clicked.
  document.getElementById("section1").onclick = toggle
  
  document.getElementById("section2").onclick = toggle
  
  document.getElementById("section3").onclick = toggle






// // 4. Sticky navbar

// // const header = document.querySelector('.header');
// // const headerOffset = header.offsetTop;

// // window.onscroll = () => {
// //     if (headerOffset >= window.pageYOffset) {
// //         header.classList.remove('sticky');
// //     } else {
// //         header.classList.add('sticky');
// //     }
// // }




// // A function that adds and remove the class "active" on the section you click on.
// // We haven't really talked about ´this´ yet, but we will... ;)
// // console.log(this) to see how it works
// // function toggle() {
// //   this.classList.toggle("active")
// // }

// // // Selects an HTML element, and calls a function which will be executed when the element is clicked.
// // document.getElementById("section1").onclick = toggle

// // document.getElementById("section2").onclick = toggle

// // document.getElementById("section3").onclick = toggle


// // 1. Function on each element

// const accordionHeader1 = document.getElementById('accordion-header-1');
// const accordionHeader2 = document.getElementById('accordion-header-2');
// const accordionHeader3 = document.getElementById('accordion-header-3');

// const onAccordion1Click = () => {
//     accordionHeader1.nextElementSibling.classList.toggle('active');

//     accordionHeader2.nextElementSibling.classList.remove('active');
//     accordionHeader3.nextElementSibling.classList.remove('active');
// };

// const onAccordion2Click = () => {
//     accordionHeader2.nextElementSibling.classList.toggle('active');

//     accordionHeader1.nextElementSibling.classList.remove('active');
//     accordionHeader3.nextElementSibling.classList.remove('active');
// }

// const onAccordion3Click = () => {
//     accordionHeader3.nextElementSibling.classList.toggle('active');

//     accordionHeader1.nextElementSibling.classList.remove('active');
//     accordionHeader2.nextElementSibling.classList.remove('active');
// }

// accordionHeader1.onclick = onAccordion1Click;
// accordionHeader2.onclick = onAccordion2Click;
// accordionHeader3.onclick = onAccordion3Click;

// // 2. Universal function

// const onAccordionClick = (event) => {
//     event.target.nextElementSibling.classList.toggle('active');

//     const accordionList = document.querySelectorAll('.accordion-header');
//     accordionList.forEach(item => {
//         if (item !== event.target) {
//             item.nextElementSibling.classList.remove('active');
//         }
//     });
// }

// accordionHeader1.onclick = onAccordionClick;
// accordionHeader2.onclick = onAccordionClick;
// accordionHeader3.onclick = onAccordionClick;

// // 3. Universal function with loop

// const accordionList = document.querySelectorAll('.accordion-header');

// accordionList.forEach(item => {
//     item.onclick = (event) => {
//         accordionList.forEach(itemNested => {
//             if (itemNested !== event.target) {
//                 itemNested.nextElementSibling.classList.remove('active');
//             } else {
//                 itemNested.nextElementSibling.classList.toggle('active');
//             }
//         })
//     }
// });


