<b>About</b>
Creating a business site with an interactive signup form and accordion, with input field validation using CSS styles and default browser validation. Using JS to toggle between classes and hide/show answers.

<b>Problem approach</b>
Requirements was to create a mobile responsive site with a signup form and accordion. Used JS and CSS selectors (adjacent sibling combinator and child combinator) to toggle between classes and styles to show/hide answers in the accordion and to change its corresponding toggle icon. Signup form is made using form validation by interactive style elements using CSS (e.g. :valid for validation and :focus for interaction). A confirmation message is sent after submit by redirecting the user to the landing page within 5s, made by incorporating setTimeout() in an addEventListener which fires when the form is submitted.

Possible to improve interactive elements in the sign up form by adding interactive styles for invalid input field values, however JS is needed to add invalid styles in user mode (while writing in the current input field) and not at initial page load.

<b>Live demo:</b>
