# Business Site

**Mission:** 
- *Create a made-up business site containing a hero, sign up form and FAQ accordion*
- *A full-width hero containing a looped video*
- *HTML Form with at least 3 different input types*
- *An accordion that opens and closes using JavaScript*

***

## Workflow

### Design 1
I began by laying out the base skeleton as a design in Figma. Making sure I had a clear idea of what block components I needed. Since I wanted to work with BEM-methodology I used that as a guide for the design.
Figma design: https://www.figma.com/file/wZE7KSAvLcPhlVUE0cM1x7/Project-Business-Site?node-id=0%3A1

### Making the skeleton
I then continued with making the base skeleton of the website using my figma design as guide. Once that was done I moved on to design and plan the content of each block component. 

### Working Block by block
Using the BEM-methodology I added content (elements and modifiers) working my way through the page top-to-bottom. 

### The Accordion
While making the accordion functions I spent some time researching about how DOM manipulation effects the load on the page. I found that accessing the DOM too many times is inefficient. So I decided to use event delegation and only access the DOM once.
<br>
So firstly I declared my main access element:

```js
const accordion = document.getElementById("accordion");
```
Then I added an event listener to that parent element and was able to interact with the children using *event.target*:
```js
accordion.addEventListener("click", (event) => {
  const question = event.target;
//   Do something to the question
//   example:
  question.classList.toggle("accordion__question--open");
});

```
So then I had some efficient code! 😄
<br>

### Open & Close Logic

I also worked a bit more on some logic for the accordion so that it follows this logic:
- User clicks a question
  - if any other questions are open --> close them
  - if the clicked question was previously opened question --> close the clicked question

So basically only one question can be open at a time. 

### Custom form styles
As a last challenge I wanted to style the form inputs. This required some research into how specifically checkboxes and radio buttons worked. I finally figured out that if you set the *appearance* attribute to none you could begin styling the inputs quite easily. Then it was all a matter of making sure their various states worked as intended.

***

## Reflections
In general this project worked according to my plans. I had no major struggles that weren't solved by using google. 
<br>
<br>
If I were to continue on this project / start over I would:
- Try to make the accordion logic a bit compact. I am sure there are ways to achieve my logic with lesser code and I am intruiged as to how. 
- Work more on making the form inputs more stylish and custom. Perhaps find a way to create custom invalid messages.

<br>

***

## View it live
https://loremipsum-adventures.netlify.app

