
// POPUP Login and Register form
  document.getElementById("button").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "flex";
})

  document.querySelector(".close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";

})

let x = document.getElementById('login');
let y = document.getElementById('register');
let z = document.getElementById('btn');

function register () {
  x.style.left = '-400px';
  y.style.left = '50px';
  z.style.left = '110px';
}

function login () { 
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




