// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// 자바스트립트야~! html document에 가서 Element (<...>)들 중에 아이디가 "answer1"인 애한테 "active"라는 스타일 클래스(classList)를 줬다가 뺐었다가(toggle) 해!
function banana() {
  document.getElementById("answer1").classList.toggle("active")
}

document.getElementById("question1").onclick = banana

function apple() {
  document.getElementById("answer2").classList.toggle("active")
}

document.getElementById("question2").onclick = apple

function kiwi() {
  document.getElementById("answer3").classList.toggle("active")
}

document.getElementById("question3").onclick = kiwi
