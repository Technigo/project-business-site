// Accordion toggling for adding/removing "active" class
let acc = document.getElementsByClassName("faq__question");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("faq__question--active");

    let faq__answer = this.nextElementSibling;
    if (faq__answer.style.display === "block") {
      faq__answer.style.display = "none";
    } else {
      faq__answer.style.display = "block";
    }
  });
}


// Action toggling for pressing Submit button and displaying black screen of death

document.getElementById('form').onsubmit = (event) => {
  event.preventDefault();
  const blackScreen = document.querySelector('.black-screen');
  const blackScreenIcon = document.querySelector('.black-screen__icon')
  const blackScreenText = document.querySelector('.black-screen__text')
  const blackScreenButton = document.querySelector('.black-screen__button')
  const str = document.getElementById('name').value;
  const victimName = str.split(" ")[0];
  console.log(victimName);
  let blackDeathText = document.getElementById('restInPeace');
  blackDeathText.textContent = ("Rest In Peace \r\n");
  blackDeathText.textContent += (victimName);

  blackScreen.style.visibility = "visible";
  blackScreen.style.opacity = "100%";
  blackScreenIcon.style.visibility = "visible";
  blackScreenIcon.style.opacity = "100%";
  blackScreenText.style.visibility = "visible";
  blackScreenText.style.opacity = "100%";
  blackScreenButton.style.visibility = "visible";
  blackScreenButton.style.opacity = "100";

  console.log("Hello world");
}


// Check innerheight and apply for landscape mode
// const mediaQuery = window.matchMedia('(max-device-width: 930px) and (orientation: landscape)');
// if (mediaQuery.matches) {
//   let height = window.outerHeight;
//   const headerHeight = document.querySelector('.header');
//   headerHeight.style.height = height + "px";
// }

// Trying a function for flipping screen orientation and changing height

screen.orientation.onchange = function(flipScreen) {
  const mobileLandscape = window.matchMedia('(max-device-width: 930px) and (orientation: landscape)');
  const mobilePortrait = window.matchMedia('(max-device-width: 669px) and (orientation:portrait)');
  const headerHeight = document.querySelector('.header');
  if (mobileLandscape.matches) {
    let height = window.outerHeight;
    headerHeight.style.height = height + "px";
  } else {
    mobilePortrait.matches = true;
    headerHeight.style.height = "75vh";
  }
} 

