
// POPUP Login and Register form functions
  document.getElementById("button").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "flex";
})

  document.querySelector(".close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";

})

// Toggle button fuctions

let x = document.getElementById('login');
let y = document.getElementById('register');
let z = document.getElementById('btn');

function register () { // Toggle button slide function for the register form
  x.style.left = '-400px'; // login form slide outside the box while login form is showed
  y.style.left = '50px'; // login form shows up win box
  z.style.left = '110px'; // Toggle button slide to register side
}

function login () {  // Toggle button slide function for the login form
  x.style.left = '50px';
  y.style.left = '450px';
  z.style.left = '0px';
}

// Accordion slide down 
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
  faq.classList.toggle("active");
  })
})




