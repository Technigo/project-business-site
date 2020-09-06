
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
}


document.querySelectorAll(".accordion-element").forEach(element => {
  element.addEventListener("click", () => {
    element.classList.toggle("active")
  })
})
