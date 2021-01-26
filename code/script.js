/* Hamgurger menu start */

/* I select the Navbar and Ham elements using query selector */
let navbar = document.querySelector(".navbar")
let ham = document.querySelector(".ham")

/* I added an Event Listener click to toggle the menu */
ham.addEventListener("click", toggleHamburger)

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

/* I select the links in the hamburger meny */
let menuLinks = document.querySelectorAll(".menuLink")

/* I added an event listener click to check is any of the links are clicked */
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)
/* Hamburger menu ends */


/* Accordion start */

  /* Question 1 start */
let accordionQuestionOne = document.getElementById("accordionQuestionOne");
let accordionQuestionOneParagraph = document.getElementById("accordionQuestionOneParagraph");

accordionQuestionOne.addEventListener("click", () => {
  accordionQuestionOneParagraph.classList.toggle("accordionParagraphContentShown");
})
  /* Question 1 end */


  /* Question 2 start */
let accordionQuestionTwo = document.getElementById("accordionQuestionTwo");
let accordionQuestionTwoParagraph = document.getElementById("accordionQuestionTwoParagraph");

accordionQuestionTwo.addEventListener("click", () => {
  accordionQuestionTwoParagraph.classList.toggle("accordionParagraphContentShown");
})
/* Question 2 end */

  /* Question 3 start */
  let accordionQuestionThree = document.getElementById("accordionQuestionThree");
  let accordionQuestionThreeParagraph = document.getElementById("accordionQuestionThreeParagraph");
  
  accordionQuestionThree.addEventListener("click", () => {
    accordionQuestionThreeParagraph.classList.toggle("accordionParagraphContentShown");
  })
  /* Question 3 end */

/* Accordion end */