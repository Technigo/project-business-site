
  function toggleActive(accID) {
    var element = document.getElementById(accID);
    element.classList.toggle("active");
  }

  //document.getElementById("myImg").src = "hackanm.gif";


 
    function validateForm() {
      
      let fname = document.forms["signUpForm"]["fname"].value;
      let lname = document.forms["signUpForm"]["lname"].value;
      let pwd = document.forms["signUpForm"]["pwd"].value;
      let email = document.forms["signUpForm"]["email"].value;
      let checked = document.getElementById("agreeTerms").checked;

      if (fname == "") {
        alert("Please fill out your name");
        return false;
      }

      if (lname == "") {
        alert("Please fill out your last name");
        return false;
      }

      if (pwd == "") {
        alert("Please choose a password.");
        return false;
      }

      if (email == "") {
        alert("Please enter your e-mail address");
        return false;
      }

     
      if(checked == false)
      {
        alert("Please agree to the terms before submitting");
        return false;
      }

      else 
        {
          alert("Thank you for signing up, check your inbox! :)");
          return true;
        }
    }
  

