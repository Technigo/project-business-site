const btn = document.getElementById ('section1')
  btn.onclick = toggleFaq

const btn2 = document.getElementById ('section2')
  btn2.onclick = toggleFaq

const btn3 = document.getElementById ('section3')
  btn3.onclick = toggleFaq


  function toggleFaq() {
    this.classList.toggle('active')
  }

