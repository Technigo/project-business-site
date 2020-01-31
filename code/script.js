

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active")

  })
})

/* I struggled with understanding how we were supposed to do this, so in
  the end I scrapped the pre-written code and followed a tutorial on youtube
  instead.*/