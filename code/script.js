function showAlert(myMsg) {
  alert(myMsg);
}

window.onscroll = function () {
  scrollFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop + 64;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

var accordions = document.getElementsByClassName("accordion-block");
console.log(accordions);

for (i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    this.classList.toggle("is-open");

    var content = this.children[1];
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
}
