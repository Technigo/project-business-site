
const question1 = document.getElementById('question1')
const question2 = document.getElementById('question2')
const question3 = document.getElementById('question3')
const question4 = document.getElementById('question4')

//Skapar accSvar elementet från html-filen som är min paragraf
const accSvar1 = document.getElementById('acc-svar1')
const accSvar2 = document.getElementById('acc-svar2')
const accSvar3 = document.getElementById('acc-svar3')
const accSvar4 = document.getElementById('acc-svar4')


question1.addEventListener('click',() => {
  accSvar1.classList.toggle('acc-svar-klick')
  accSvar2.classList.remove('acc-svar-klick')
  accSvar3.classList.remove('acc-svar-klick')
  accSvar4.classList.remove('acc-svar-klick')
})

question2.addEventListener('click',() => {
  accSvar1.classList.remove('acc-svar-klick')
  accSvar2.classList.toggle('acc-svar-klick')
  accSvar3.classList.remove('acc-svar-klick')
  accSvar4.classList.remove('acc-svar-klick') 
})

question3.addEventListener('click',() => {
  accSvar1.classList.remove('acc-svar-klick')
  accSvar2.classList.remove('acc-svar-klick')
  accSvar3.classList.toggle('acc-svar-klick')
  accSvar4.classList.remove('acc-svar-klick') 
})

question4.addEventListener('click',() => {
  accSvar1.classList.remove('acc-svar-klick')
  accSvar2.classList.remove('acc-svar-klick')
  accSvar3.classList.remove('acc-svar-klick')
  accSvar4.classList.toggle('acc-svar-klick') 
})



