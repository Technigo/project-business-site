const headers = document.querySelectorAll('#button') 

headers.forEach((header) => {
  header.addEventListener('click', () => {
    header.classList.toggle('open')
  })
 })
 