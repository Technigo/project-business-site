# Business Site

The assignment was to create a business webpage. The basic requirements were that it should contain a responsive hero image or video as its header, as well as a form and an 'accordion'. 

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

I took my design inspiration for the header from the website 'confetti'. I downloaded a program to resize video files to create three different sized videos which would change depending on the browser size and set them to absolute, positioned within a relative header with hidden overflow. I also made the video's z-index -1 so that other text would show on top of it, and set it to a fixed height with width 100%. This proved the biggest challenge of the project. 

I thought the form was very straight-forward, though no doubt I could have spent more time on it to make it more lively, e.g. by adding animation to the valid/invalid pseudo classes. The accordion took longer to animate. I learnt that 'transition' will not apply to display changes, so I needed an alternative to simply switching between display: none and block. I found max-height: 0 w/ overflow hidden a good alternative and used a keyframes animation to change from that to max-height 108px. I wanted to switch to max-height 100% but this made the animation buggy. I also had to use classList.add and remove instead of toggle, as this caused problems with (I think) multiple different classes being added at once. I would liked to have spent more time understanding this and using more JavaScript. 


## View it live
https://lucid-babbage-54df19.netlify.com
