//function 1
const elementToToggle = document.querySelector("#section1");
elementToToggle.onclick = toggleHTMLElementClass;
function toggleHTMLElementClass() {elementToToggle.classList.toggle("active")};

//function 2
const elementToToggle2 = document.querySelector("#section2");
elementToToggle2.onclick = toggleHTMLElementClass2;
function toggleHTMLElementClass2() {elementToToggle2.classList.toggle("active")};

//function 3
const elementToToggle3 = document.querySelector("#section3");
elementToToggle3.onclick = toggleHTMLElementClass3;
function toggleHTMLElementClass3() {elementToToggle3.classList.toggle("active")};


//Alert function
const ordered = document.querySelector("#button");
ordered.onclick = orderedturtle;
function orderedturtle() {alert("Thank you for your order!")};

