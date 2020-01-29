const toggleActiveClass = () => {
  document.getElementById('q1').classList.toggle('active')
  document.getElementById('a1').classList.toggle('active')
}

const toggleActiveClassSecond = () => {
  document.getElementById('q2').classList.toggle('active')
  document.getElementById('a2').classList.toggle('active')
}

const toggleActiveClassThird = () => {
  document.getElementById('q3').classList.toggle('active')
  document.getElementById('a3').classList.toggle('active')
}

const toggleActiveClassFourth = () => {
  document.getElementById('q4').classList.toggle('active')
  document.getElementById('a4').classList.toggle('active')
}

const toggleActiveClassFifth = () => {
  document.getElementById('q5').classList.toggle('active')
  document.getElementById('a5').classList.toggle('active')
}

document.getElementById('q1').onclick = toggleActiveClass
document.getElementById('q2').onclick = toggleActiveClassSecond
document.getElementById('q3').onclick = toggleActiveClassThird
document.getElementById('q4').onclick = toggleActiveClassFourth
document.getElementById('q5').onclick = toggleActiveClassFifth