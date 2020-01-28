const btnOne = document.getElementById("section-one");
const btnTwo = document.getElementById("section-two");
btnOne.onclick = toggle;
btnTwo.onclick = toggle;

function toggle() {
  this.classList.toggle("open");
}
