// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works


// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle;


//const hamburger = document.querySelector(".hamburger");
//const navMenu = document.querySelector(".nav-menu");
//const btn = document.getElementById("submit");
//const frm = document.getElementById("form"); 

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", mobileMenu);


function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



const acc = document.getElementsByClassName("question");

for (let i = 0; i < acc.length; i++){

  acc[i].onclick = function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
    hideAll(this);
  };
      
  }

  

function hideAll(exceptThis) {
  for (let j = 0; j < acc.length; j++) {
    if (acc[j] !== exceptThis) {
      acc[j].classList.remove("active");
      acc[j].nextElementSibling.classList.remove("show");
    }

  }
  
  
}
//btn.onclick=() => {
 // frm.reset();
//}