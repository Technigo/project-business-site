document.getElementById('section1').onclick = toggleFaq
document.getElementById('section2').onclick = toggleFaq
document.getElementById('section3').onclick = toggleFaq
document.getElementById('section4').onclick = toggleFaq

function toggleFaq() {
  console.log('clicking')
  this.classList.toggle('open')
}
