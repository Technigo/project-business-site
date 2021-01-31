# Business Site 📚

In this project I've built a business website about a book subscription service which I've called "Bella's Book Club". 


## The problem 

The main task was to build a business site with a hero image, a signup form and a FAQ accordion. The tools/techniques used for this project was HTML, CSS (general styling, flexbox, responsive design) and JavaScript. 

First I did a general sketch on paper of how I wanted the layout to look like on different devices. After that I started to create my backlog for the project which I continuously added tasks to. Then I started coding and began with the general layout for the mobile device. With most of the basic HTML-structure in place I started adding styling and content, which I continuously adjusted throughout the whole project with the help of the dev tools in Chrome. I also added the media query to be able to make the site responsive and look different on mobile, tablet and desktop. 

For the <b>hero image</b> I used the <picture> HTML-tag and added three image sources with different resolutions and different breakpoints in order for the hero image to be responsive.

For the <b>signup form</b> I used the <form> HTML-tag and added a lot of different input types and styled them a bit with CSS. 

For the <b>FAQ accordion</b> I created a general structure by adding a lot of <div> HTML-tags and added some styling with CSS. To get the accordion to work (e.g. collapse to show and hide text) was that I used Javascript to modify the DOM. I tried to write the code as short and concise as possible in order to have the option to add more questions. The hard part here was to get only one answer to be shown at a time and close the one open. I solved this by adding an if statement to test whether a question was open and if so, closed it (by removing the active class) if it wasn't the question that was clicked.  

If I had more time, I would have added more animations to the project (the accordion, the hamburger menu) and styled the signup form a bit more (especially the radio buttons and checkboxes).


## View it live

To view the site I've created, check it here: