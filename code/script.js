// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
//function toggle() {
// this.classList.toggle("active")
//}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle


//Skapar myHeader elementet från html-filen 
//Skapar accSvar elementet från html-filen som är min paragraf
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const accSvar1 = document.getElementById('acc-svar')
const accSvar2 = document.getElementById('acc-svar1')
const accSvar3 = document.getElementById('acc-svar2')
const showMore1 =document.getElementById('question1')
const showMore2 =document.getElementById('question2')
const showMore3 =document.getElementById('question3')
//Måste får till att den byter tillbaka
showMore1.onclick = () => {
  showMore1.innerHTML = "˄";  
}
showMore2.onclick = () => {
  showMore2.innerHTML = "˄";  
}
showMore3.onclick = () => {
  showMore3.innerHTML = "˄";  
}


question1.addEventListener('click',() => {
  accSvar1.classList.toggle('acc-svar-klick')
  accSvar2.classList.remove('acc-svar-klick')
  accSvar3.classList.remove('acc-svar-klick')
})

question2.addEventListener('click',() => {
  accSvar1.classList.remove('acc-svar-klick')
  accSvar2.classList.toggle('acc-svar-klick')
  accSvar3.classList.remove('acc-svar-klick')
})

question3.addEventListener('click',() => {
  accSvar1.classList.remove('acc-svar-klick')
  accSvar2.classList.remove('acc-svar-klick')
  accSvar3.classList.toggle('acc-svar-klick')
})



