# Business Site

This project was about building a business one pager site containing a hero image/video (where I chose an image for this project), a sign-up form and an accordion containing FAQ.

## The problem

At first I thought about the theme of the page and since I'm into skiing I decided to create a page where you sign up to take part in a contest to win a cool skiing adventure. I found an image on Unsplash.com that I found to be very appealing in hopefully catching the viewers attention.  

In the form I included different input types (such as text, email, radio, checkbox and submit) in order to receive the right information from the contestant, such as level of experience and also a textarea for the contestant to formulate their desire to win. I also set the fields with name, e-mail, level of experience and the checkbox with Terms & Conditions to required. Since I used the method 'Post' to my form I could check the submitted values in HTTP Bin and I checked to see if the submitted input corresponded with the different input names. To build the accordion I took help from both Technigo and Youtube (this video helped me a lot: https://www.youtube.com/watch?v=dPLHi7tsoFU) where I first created the parent class "accordion" and then sub-classes for each one of the four content boxes. In Javascript I set a constant to "accordion" and for this to "getElementsByClassname", then a for loop.

I designed it mobile first and then did the media queries for tablet and desktop. For all CSS-layout I have used Flexbox.

The most struggling part for me on this project was to get the layout working nicely. In responsive tablet view, I had an issue with the page's content not stretching to fill the entire page, hence you could see a lot of "space" at the bottom of the page, underneath the footer. At first I thought it had something to do with the background-color (and that was something I got as a suggestion too, on Stack Overflow) but that wasn't the issue. The issue was concerning the height of the body that was not set so with help I made a change to the body-element where I added a min height set to 100 vh. This fixed the issue right away and it made me really happy! :) I have also struggled with understanding the very basic concepts of Javascript and the DOM and if I had more time I think I would have tried out the other way of doing the accordion, by using "getElementsById" since it's good practice/common to use ID when it comes to Javascript. 

If I had more time to work on this project I would start with sketching down the parent and child (and maybe children to these) containers on paper in order to see more clearly when it later comes to setting the rules in CSS. I would also, for fun, try out a hero video instead of an image and also try to be better at minimizing my use of media queries. All in all, a very good learning journey and exciting to try out some Vanilla JS!

## View it live
Here's a link to the project: https://fervent-jepsen-be4bb1.netlify.app/ I hope you will enjoy it! Please fill out the form to check if it works for you and also, there's a little surprise if you click the header title! ;)
