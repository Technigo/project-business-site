// // A function that adds and remove the class "active" on the section you click on.
// // We haven't really talked about ´this´ yet, but we will... ;)
// // console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("active")
// }

// // Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle


document.getElementById('form').onsubmit = (event) => {
  event.preventDefault()

  const inputValue = document.getElementById('firstName').value
  
  document.getElementById('greeting' )
  .innerText = `Yay, ${inputValue}! You just signed up to the Give us Space Community and we are thrilled to have you! 
  Next up, at the speed of light, you will receive an email with all the information you need to get started. Fancy!`
  }


  const faqs = document.querySelectorAll('#button')

  faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('open')
    })
    
   })
   


      const toggleBtn = document.getElementById('toggle-button')
   const navbarLinks = document.getElementById('navbar-links')
   
   toggleBtn.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
     })
     
     
     
     
     
     
     //  toggle-button.onclick = toggleNavBar
   
     //  function toggleNavBar() {
     //    this.classList.toggle('active')
     //  }





  // sections.onclick = toggleDrinkMenu

  // function toggleDrinkMenu() {
  //   this.classList.toggle('open')