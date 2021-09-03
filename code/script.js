// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active");
}

var w = document.documentElement.clientWidth || window.innerWidth;
if (w > 1024) {
      document.getElementById('intro-anchor').addEventListener('click', (event) => {
        event.preventDefault()  
                                                      /*  verhindert, dass der Link abspringt */
          const openHeadline = document.getElementById('headline')
          openHeadline.style.display = 'none'

          const formSection = document.getElementById('form-section-id')
          formSection.style.display = 'contents'            /*  	Makes the container disappear, making the child elements children of the element the next level up in the DOM */
          
          const introForm =document.getElementById('intro-form')
          introForm.style.position = 'absolute'
          introForm.style.top = '50px' 
          
          const accordionSection = document.getElementById('accordion-id')
          accordionSection.style.display = 'none' 

  })

      document.getElementById('faq-anchor').addEventListener('click', (event) => {
        event.preventDefault()  
                                                      /*  verhindert, dass der Link abspringt */
          const openHeadline = document.getElementById('headline')
          openHeadline.style.display = 'none'

          const accordionSection = document.getElementById('accordion-id')
          accordionSection.style.display = 'contents'            /*  	Makes the container disappear, making the child elements children of the element the next level up in the DOM */
          
          const faqAccordion =document.getElementById('faq-accordion')
          faqAccordion.style.position = 'absolute'
          faqAccordion.style.top = '50px'  

          const formSection = document.getElementById('form-section-id')
          formSection.style.display = 'none'  

  })





      document.getElementById('home-anchor').addEventListener('click', (event) => {
        event.preventDefault()  
                                                      /*  verhindert, dass der Link abspringt */
          const openHeadline = document.getElementById('headline')
          openHeadline.style.display = 'block'

          const accordionSection = document.getElementById('accordion-id')
          accordionSection.style.display = 'none'      

          const formSection = document.getElementById('form-section-id')
          formSection.style.display = 'none'  

  })
} 





// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle;
document.getElementById("section2").onclick = toggle;
document.getElementById("section3").onclick = toggle;
document.getElementById("section4").onclick = toggle;
document.getElementById("section5").onclick = toggle;

