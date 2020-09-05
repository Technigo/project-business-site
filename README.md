# Business Site

This is my business-site project. 
It's a one-pager created for my sisters art (only a mockup). 
As the assignment said, it contains a hero image, an accordion for FAQ and a form. 

## The problem

I had a hard time getting my accordion to work the way I wanted it to.
I watched several different solutions, and with some help I managed to rewrite the code for the accordion to act as I wished.

The problem was that my accordion opened just fine, but didn't close the previously clicked question when opening a new one.
The solution was a different StackOverflow-users problem - to get the whole accordion to close.
By making sure all other questions were closed when opening a new question a new problem occured:
I couldn't toggle the open question to close again. The solution to that was to store an open question in a new variable and add an if-statement. If no question was containing the class "active" the if-statement said to toggle "active".

If I had more time on this project I would definately add a "for-sale"-section with a grid of cards displaying artwork.
Perhaps I would do it by adding some sort of box containing the art-work and set it to be hidden when not clicked, and displayed when clicked.
I would also have liked to add a nav-bar, but since it's a onepager the links would have directed the user to different parts of the page (for example the forms, the "for sale"-section etc).

## View it live
https://kreatisa.netlify.app/ 
