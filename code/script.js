// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

const sectionOne = document.getElementById("section1")
sectionOne.onclick = () => {
  sectionOne.classList.toggle("active")
  } 

  const sectionTwo = document.getElementById("section2")
  sectionTwo.onclick = () => {
    sectionTwo.classList.toggle("active")
    } 

    const sectionThree = document.getElementById("section3")
    sectionThree.onclick = () => {
      sectionThree.classList.toggle("active")
      } 

      const dumbbell = document.getElementById("dumbbell")
      dumbbell.onclick = () => {
        dumbbell.classList.toggle("press")
        } 