/* Hamgurger menu start */

/* I select the Navbar and Ham elements using query selector */
const navbar = document.querySelector(".navbar")
const hamburger = document.querySelector(".ham")

/* I added an Event Listener click to toggle the menu */
hamburger.addEventListener("click", toggleHamburger)

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  hamburger.classList.toggle("showCloseSign")
}

/* I select the links in the hamburger meny */
const menuLinks = document.querySelectorAll(".menuLink")

/* I added an event listener click to check if any of the links are clicked */
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)
/* Hamburger menu ends */


/* Accordion start */

  /* Question 1 start */
const accordionQuestionOne = document.getElementById("accordionQuestionOne");
const accordionQuestionOneParagraph = document.getElementById("accordionQuestionOneParagraph");

accordionQuestionOne.addEventListener("click", () => {
  accordionQuestionOneParagraph.classList.toggle("accordionParagraphContentShown");
})
  /* Question 1 end */


  /* Question 2 start */
const accordionQuestionTwo = document.getElementById("accordionQuestionTwo");
const accordionQuestionTwoParagraph = document.getElementById("accordionQuestionTwoParagraph");

accordionQuestionTwo.addEventListener("click", () => {
  accordionQuestionTwoParagraph.classList.toggle("accordionParagraphContentShown");
})
/* Question 2 end */

  /* Question 3 start */
  const accordionQuestionThree = document.getElementById("accordionQuestionThree");
  const accordionQuestionThreeParagraph = document.getElementById("accordionQuestionThreeParagraph");
  
  accordionQuestionThree.addEventListener("click", () => {
    accordionQuestionThreeParagraph.classList.toggle("accordionParagraphContentShown");
  })
  /* Question 3 end */

/* Accordion end */