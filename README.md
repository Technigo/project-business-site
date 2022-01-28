# Business Site

The brief was to create a sign-up page consisting of an accordion element, as well as a form element, with a responsive hero header.

## The problem

I started by designing in Figma. That made it a lot easier to set things like border radius, padding, font families, font sizes, etc.

After that I built from mobile -> desktop. I setup the html structure for the page first with placeholder content. After that I attempted to use BEM for CSS class naming.

After I added all the classes, I started styling in CSS. Once I was satisfied with the mobile version styling, I worked on tablet and desktop media queries. I did a lot of googling to find solutions to styling the radio buttons and checkboxes.

Lastly, I moved onto the JavaScript portion. I deleted the provided code and instead used a W3Schools tutorial on accordions.

I really wanted an action to happen when you pushed the Submit button, so I worked on that in JS as well.

At the end, I discovered while testing that there was a problem when flipping between portrait and landscape on mobile - depending on which orientation you first loaded the page in, the hero image vh would remain the same. I spent quite a lot of time trying to create a javascript solution to this.

If I had more time - I would learn how to make a an evil bot, that actually would sign people up to all these newsletters >:D

No actually - if I had more time, I would have made the hero image in different resolutions and used those in the media queries. The file size means it takes a while to load, which is kind of annoying. I would also have added some more validation from JavaScript, as well as <input title=""> title tags on my input as the text of the tooltip for accessibility.

## View it live
https://deathbyspam-week3.netlify.app/
