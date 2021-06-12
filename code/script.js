const accordion = document.getElementsByClassName('faq-header')

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    this.classList.toggle('activated')
  })
}