// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works


//When toggle is activated remove "active" from all buttons
function toggle() {
    document.querySelectorAll(".question").forEach((btn, i) => {
     
        //= tilldela variabel == är värdet likadant === är typen och värdet likadant
        if (btn === this) 
            return;
        btn.classList.remove("active");
    });
    this.classList.toggle("active")
}

// This code selects all elements of class "question"
document.querySelectorAll(".question").forEach((btn, i) => {
    btn.onclick = toggle;
});

