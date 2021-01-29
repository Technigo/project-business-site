# Business Site
This is a project made during the Technigo Bootcamp. The objective was to learn how to use HTML forms and requests, and a bit of Javascript. The site should include a hero video- or image-header, a signup form, and an accordion. 

I made a site for a fictional business that runs an online yogastudio. 

## The problem
I started by making a sketch over the design. I made a quite simple design with a hero-video for the header (that autoplays and loops, but also has controls), also a backup image that shows if the video can't be seen. I chose the video first and made the design for the entire site to match it. I tried using media queries to change video when the site is on different sized devices (one for mobile, one for tablet and one for desktop), but I found out that Chrome doesnt support media queries with the video-element, you have to use Javascript to succeed. So I will save my other two videos for upcoming projects. In the end I also added a sticky header with navbar. If I had dah more time I would have probably added a hamburger instead of navbar in mobile-sized devices. 

I used flexbox to make the site responsive, so the form and accordion move from row to column when looked at in mobile. 

For the accordion I used the toggle and onclick functions to reveal the answer when clicking on the question. To make every other row pink/blue I used the ":nth-of-type(even/odd)"-selector. I also added icons (+ and -) for the questions, that changes when opened/closed. I had some problems with positioning the icons to the right, and solved it by using "display: block" and "float: right". If I had more time I would make the first answer close when you click on another question. 

For the form I added some validation; the input is pink and changes to blue when correct. That also changed the background color for the submit-button, so I had to make a separate "valid"-styling for that. 

## View it live
Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
