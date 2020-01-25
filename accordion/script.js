var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    this.classList.toggle("is-open")

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;

    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

    var arrowDown = document.getElementById("arrow-down")
    if (content.style.maxHeight) {
      arrowDown.style.display = "none";

    } else {
      arrowDown.style.display = "block";
    }

    var arrowUp = document.getElementById("arrow-up")
    if (content.style.maxHeight) {
      arrowUp.style.display = "block";
    } else {
      arrowUp.style.display = "none";
    }
  }
}
