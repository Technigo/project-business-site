function toggleHamburger() {
  this.parentNode.classList.toggle("active")
}

document.getElementById("hamburger").onclick = toggleHamburger


function toggleFaq () {
  this.classList.toggle("inactive-question")
}

document.getElementById("question1").onclick = toggleFaq
document.getElementById("question2").onclick = toggleFaq
document.getElementById("question3").onclick = toggleFaq
document.getElementById("question4").onclick = toggleFaq
document.getElementById("question5").onclick = toggleFaq

function showThankYou() {
  document.getElementById("thank-you").classList.remove("hidden")
}



/*
const faqList = document.querySelectorAll(".question") 

faqList.forEach(item => {
  item.onclick = (event) => {
    faqList.forEach(itemNested => {
      if (itemNested !== event.target) {
          itemNested.nextElementSibling.classList.remove("question")
      } else {
        itemNested.nextElementSibling.classList.toggle("question")
      }
     })
  }
})*/



//console.log(faqList)

/*
accordionList.forEach(item => {
    item.onclick = (event) => {
        accordionList.forEach(itemNested => {
            if (itemNested !== event.target) {
                itemNested.nextElementSibling.classList.remove('active');
            } else {
                itemNested.nextElementSibling.classList.toggle('active');
            }
        })
    }
});*/