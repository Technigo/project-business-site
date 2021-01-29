
const buttonOne = document.getElementById('button1');
const infoContentOne = document.getElementById('info-content-1');

const buttonTwo = document.getElementById('button2');
const infoContentTwo = document.getElementById('info-content-2');

console.log(button1);
console.log(button2);

buttonOne.addEventListener('click', () => {
  infoContentOne.classList.toggle('info-selected');
  infoContentTwo.classList.remove('info-selected');
})

buttonTwo.addEventListener('click', () => {
  infoContentTwo.classList.toggle('info-selected');
  infoContentOne.classList.remove('info-selected');
})



