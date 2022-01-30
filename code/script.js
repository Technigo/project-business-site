
 
 const header = document.querySelectorAll("h3");

 header.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  })
});


