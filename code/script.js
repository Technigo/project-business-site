// Previous code was document.getElementbyId(‘section1’).onclick = toggle; (and next for section2 etc.)
// My code picks out every element with the name class in the DOM called "question" and add on click function.
// Which means that every time I add another question in the html - JS will automatically add it. Less repetition of code - which is nice if you want to add more FAQ questions for example.


document.querySelectorAll(".question").forEach((btn, i) => {
    btn.onclick = toggle;
});


//This code make a FAQ question that is toggled - close itself when another question is opened.
// For each .question the JS will loop (===) the code and when it sees the code "btn active" it will close the others (remove active).

function toggle() {
    document.querySelectorAll(".question").forEach((btn, i) => {
     
        if (btn === this) 
            return;
        btn.classList.remove("active");
    });
    this.classList.toggle("active")
}
