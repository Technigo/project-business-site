const questions = document.querySelectorAll('.panel-questions');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active')
  })
})
 
// Force the video to always autoplay
function onPlayerReady(event) {
  event.target.playVideo();
}