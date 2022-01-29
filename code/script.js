
//opening FAQ answers in accordion
let acc = document.getElementsByClassName("accordionButton");
let i;

for(i=0; i<acc.length;i++){
  acc[i].addEventListener("click", function(){
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    }
    else{
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  })
}

//opening message after submitting form
document.getElementById('form').onsubmit = event => {
  event.preventDefault()
  document.getElementById("formContainer").style.display = "none"
  document.getElementById("submitMessage").style.display = "flex"
}