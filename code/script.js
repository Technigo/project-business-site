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
const accSvar = document.getElementById('acc-svar')
const accSvar1 = document.getElementById('acc-svar1')
const accSvar2 = document.getElementById('acc-svar2')
const showMore =document.getElementById('question1')

showMore.onclick = () => {
  question1.innerHTML = "-"
}


question1.addEventListener('click',() => {
  accSvar.classList.toggle('acc-svar-klick')
  
})

question2.addEventListener('click',() => {
  accSvar1.classList.toggle('acc-svar-klick')
})

question3.addEventListener('click',() => {
  accSvar2.classList.toggle('acc-svar-klick')
})



