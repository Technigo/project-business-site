// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works





function toggle() {
  this.classList.toggle("active")
}

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});





$(document).ready(function(){
  var video = $('#myVideo1); 
}

 

document.querySelectorAll("summary").forEach(function(current, index){
  current.style.backgroundColor = `rgb(var(--red), ${83 - (index * 8)}, var(--white))`;
  })
  
  
  document.querySelector(".expand").addEventListener("click", function(e) {
  if(e.target.classList.contains("clicked")){
    e.target.classList.remove("clicked");
      e.target.innerText = "+";
      document.querySelectorAll("details").forEach(function(current) {
      current.open = false;
      });
    } else {
    e.target.classList.add("clicked");
      e.target.innerText = "-";
      document.querySelectorAll("details").forEach(function(current) {
      current.open = true;
    });
  }
  })




