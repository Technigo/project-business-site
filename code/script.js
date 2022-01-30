//Mobile Navbar
const sideNav = document.querySelector(".header-nav");
const openNav = document.querySelector(".open-icon");
const closeNav = document.querySelector(".close-icon");

//Form
const form = document.getElementById("form");
const modal = document.querySelector(".overlay");
const closeModal = document.querySelector(".popup-icon");
const modalText = document.querySelector(".popup-text");

//Accordion
const openQuestion = document.querySelectorAll(".FAQ");

//Destination - Booking Section
const nextBtn = document.querySelector(".next-btn");
const backBtn = document.querySelector(".back-btn");
const destinationContainer = document.querySelector(".destination-container");



////////////// Mobile Nav Bar
openNav.addEventListener("click", ()=> {
   sideNav.classList.toggle("header-nav-active");
   if (sideNav.classList.contains("header-nav-active")) {
      sideNav.addEventListener("click", function() {
         sideNav.classList.remove("header-nav-active");
      })
      closeNav.addEventListener("click", function(){
         sideNav.classList.remove("header-nav-active");
      })
   }
})



////////////// Accordion
openQuestion.forEach(function(question){
   const btn = question.querySelector(".faq-question-container");
   btn.addEventListener("click", function(){
      openQuestion.forEach(function(item) {
         if (item !== question) 
         item.classList.remove("show-text");
      })
      question.classList.toggle("show-text");
   })
})



///////////// Form

form.onsubmit = function openModal (e) {
   e.preventDefault();
   const select = document.getElementById("location").value;
   modal.classList.add("show");
   modalText.innerText = `Check your email to receive offers for your trip to ${select}`;

   if (modal.classList.contains("show")){
   closeModal.addEventListener("click", ()=> {
      modal.classList.remove("show");
   })
   modal.addEventListener("click", ()=> {
      modal.classList.remove("show");
   })
}
}


////////////// Destination - Booking Section
const destination = [[
   {
      id: 1,
      img: "./img/destination-img-1.png",
      name: "Interlaken, Switz",
      review: "4.2 (1.2k reviews)"
   },
   {
      id: 2,
      img: "./img/destination-img-2.png",
      name: "Hanoi, Vietnam",
      review: "4.5 (1.6k reviews)"
   },
   {
      id: 3,
      img: "./img/destination-img-3.png",
      name: "Bali, Indonesia",
      review: "3.9 (900 reviews)"
   }
],
[
   {
      id: 4,
      img: "img/destination-img-4.png",
      name: "Bangkok, Thailand",
      review: "4.2 (1.2k reviews)"
   },
   {
      id: 5,
      img: "img/destination-img-5.png",
      name: "New York, USA",
      review: "4.2 (1.2k reviews)"
   },
   {
      id: 6,
      img: "img/destination-img-6.png",
      name: "Miyajima, Japan",
      review: "4.2 (1.2k reviews)"
   }
],
[
   {
      id: 7,
      img: "img/destination-img-7.png",
      name: "Seoul, Korea",
      review: "3.8 (739k reviews)"
   },
   {
      id: 8,
      img: "img/destination-img-8.png",
      name: "Siem Reap, Cambodia ",
      review: "4.2 (1.2k reviews)"
   },
   {
      id: 9,
      img: "img/destination-img-9.png",
      name: "Cappadocia, Turkey",
      review: "4.7 (1.5k reviews)"
   }
]
]


function showImg(destination) {
     let displayDestination = destination.map(function(item) {
         return `
         <div class="destination flex-column">
                <img class="destination-img" src= ${item.img} alt="Destination photo"/>
                <p class="destination-name">${item.name}</p>
                <div class="flex-row rating">
                    <span><ion-icon class="rating-icon" name="star"></ion-icon></span>
                    <p class="review">${item.review}</p>
                </div>
                <a href="#form" class="cta-btn">Book Tour</a>
            </div>
         `
     })
    displayDestination.join("");
    destinationContainer.innerHTML = displayDestination;
 
}

let currentItem = 0;

// Default display
window.addEventListener("DOMContentLoaded",()=>{
   showImg(destination[currentItem]);
})


// Next Button
nextBtn.addEventListener("click", function(){
      currentItem ++; 
      if(currentItem > destination.length - 1) {
         currentItem = 0;
      }
      showImg(destination[currentItem]);
})

// Back Button
backBtn.addEventListener("click", function(){
   currentItem --;
   if (currentItem < 0) {
      currentItem = destination.length -1;
   }
   showImg(destination[currentItem]);   
})