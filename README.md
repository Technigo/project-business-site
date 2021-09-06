# Business Site

---

We were tasked to make a business site with forms and accordion sections.

## The Problem

---

### How was the forms made?

- The forms have different input types and have some sort of validation. For example for the telephone input:
  `<input type="tel" pattern="[0][7][0-9]{1}[0-9]{4}[0-9]{3}" maxlength="10" required id="phoneNumber" name="phoneNumber" placeholder="0700000000" />`

      Maxlength is added to limit the number of numbers to be input. Required makes the user input telephone number before submitting the form.

- The form's `<action>` is directed to an [HTTTPbin](http://httpbin.org/anything) and has a `<method>` of POST.

- The submit button has a `<button>` tag instead of an `<input type="button>` because I found it easier to style it. The latter has some hard-coded default settings that are hard to undo.

### How was the accordion made?

- The question part of the `<section>` will turn active, once clicked, and toggle its sibling div which is the answer part.

`function toggle() {
this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle
document.getElementById("nav").onclick = toggle
`

- Once clicked, the question div will turn the next sibling which is the answer div active too. Then answer div is hidden from the start with `display: none` and once active will change to `display: block`

`.accordion-question.active + .accordion-answer { display: block; }`

- The plus ´<button>´ will also turn 45deg to have a rotating effect.

`
/_ creates a plus sign _/
.accordion-question:after {
content: "\002B";
font-size: 2rem;
transition: transform 0.3s ease-in-out;
}

/_ rotates the plus sign on active _/
.accordion-question.active:after {
transform: rotate(45deg);
}
`

### Future Improvements

- I was able to do the minimum requirements.

- No functioning links. No hover-effects. The video is not functioning in tablet devices after deployment. I will try to address this problems in the future.

- some commits were done in order to address the tablet issues. Please ignore.

- I was planning to clean up the code but due to some personal matters I did not have time to do it. I will clean the code up later.

## View it live

[Laboratorie Business Site](https://lucid-keller-8a8f19.netlify.app/)
