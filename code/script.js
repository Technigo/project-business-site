
/****************************** COMMENTS AND EXPLANATIONS FOR SMOOTH CODE REVIEW *****************************************/
// getElementById - returns one and first match what forces us to give a unique ids to each section 
// and manually select each element
// this approach is perfectly working (* each section should have a separate unique id like section1 section2 etc 
// and there should be following styles added to CSS file 
// .active+.answer {
//   display: inline-block;
// })

// const sectionOne = document.getElementById('section1'); /* picking each individual section by id from document object*/
// const sectionTwo = document.getElementById('section2');
// const sectionThree = document.getElementById('section3');
// const sectionFour = document.getElementById('section4');

// sectionOne.onclick = toggle; /* connecting onclick event with the function */
// sectionTwo.onclick = toggle;
// sectionThree.onclick = toggle;
// sectionFour.onclick = toggle;

// function toggle() { /* function that toggles (switches) class to active  */
// word THIS in current situation is refering to the each individual section
//   this.classList.toggle('active'); 
// }

// For self-educational purposes following approach was implamented instead:

let question = document.querySelectorAll(".question")  /* querySelectorAll returns a Nodelist object collection 
- in other words all element with exact class name/names*/
let i; /* declaring i */

for (i = 0; i < question.length; i++) {  /* here is for loop starts by assigning an initial expression (value) of 0 to the "i" variable , 
  "i < question.length" is a conditional expresion that specifies that "i" cant go over the length of "question" (array), 
  and i++ (increment operator ++) means that each time loop is activated 1 will be added to the "i" variable */
  
  question[i].addEventListener("click", function() { /*here an "Event listener" listens for a user's "click" and triggers the function
  for every element in the "question" array  */

  // This nested for loop is aimed to check if the current "question" is the same as user had clicked on or not.
  // if it is the same one, then class "active" is toggled on the "question". if it is not the one that was selected by user 
  // then class active is removed from the question.
   for (let j=0; j<question.length; j++) { 
   if (question[j] === this) {
    this.classList.toggle("active");
   } else {question[j].classList.remove("active")}  
   }
  });
}

// document.getElementById('form').addEventListener('submit', (event) => {
// 	const name = document.getElementById('name').value;
// 	// document.getElementById('greeting').innerHTML = `Hello ${name} !`
// 	const greeting= document.getElementById('greeting');
// 	greeting.innerHTML= `Hello ${name} !`;
// 	event.preventDefault();

