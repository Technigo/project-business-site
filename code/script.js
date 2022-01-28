const accordion = document.querySelectorAll('#button') 

accordion.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('open')
  })
 })
 