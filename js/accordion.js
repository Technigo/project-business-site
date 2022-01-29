
    let acc = document.getElementsByClassName("accordionSection__button");
    let i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", accordion ) ;
        
    function accordion(e) {
          e.preventDefault();
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.style.background = "#fff8dc";
          panel.style.fontSize = "16px";
          panel.style.textAlign = "justify";
        } 
      }

    }
   
/* enable submit button*/
    let term      = document.getElementById("term");
    let checkmark = document.getElementById("checkmark");
    let submit    = document.getElementById("submit");

    term.addEventListener("click",disableToable);

    function disableToable(){
        submit.removeAttribute("disabled");
        submit.style.background = "#ffa500";
        submit.style.cursor = "pointer";
   
    }