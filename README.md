# Business Site

This project was to create a buisness site (I've chosen to make it for a made up company) with a hero header, responsiveness, a form and an accordion section.

## The problem

I started with sketching the layout on paper and listed all main features. After that I did a CSS grid for the header, main section and footer. I did change later tho to flexboxes, as I didn't feel grids to be needed and flexbox is more compatible with different software. 

Then I put up the layout for the form, the different input and buttons and a very simple section of divs in the accordion section.

After that I started working on the hero header. I went with different pictures and animation of those, some buzzwords that reveals under the pictures when they move and a animated logo on top. The logo and buzzwords where set to position:absolute and the header to position:relative, I could after that with positioning and z-index place them in the desired levels.
I also made the picture resolutions responsive later on and made the number of pictures change depending on screen/device sizes.

For the form section I put a responsive picture next to it for some color (that changes to on top on mobile view) and styled the form. I also, after the site was functional and meet the main requirements, custom styled the radiobuttons and checkboxes and later styled the text-input with the help of fieldset and legends. 

The accordions was where I spent most time as I wanted to create loops, if/else statements and things like collapsing of one accordion when opening another and a dynamic +/- button. 
At first I had a lot of code in the JS file, but as time passed and I learned more I managed to usse CSS .active class more optimal and cut down on JS code.
I created functions as I prefered the feeling of order it gives in the code.
I also sed JS to have a drop-down menu on mobile devices.

Most of the time was spent tweaking the code to be as structured and neat as possible. I also tried to implement BEM namig as much as I could. 

Techniques: Flexbox, keyframes animation, picture/img/source, :before, fieldset + legend, active class, js functions, js loops, js if-statements

Tools: Stack overflow (learn a lot from helping), photoshop, vs code, live server, codepen, slack, lectures, netlify, google

## View it live

https://nano-colors.netlify.app/
