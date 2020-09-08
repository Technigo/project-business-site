# Business Site

The assignment was to make a business one-pager with a hero image or video, a form and an FAQ accordion. I chose to do my one-pager for my father-in-law's site where he shows his pottery. 


## The problem

I did a quick sketch manually and pinpointed focus-points. In my last project I got lost in the details so it was important for me this time to find a way to keep the bigger picture in mind (so that "has to have" trumps "nice to have" for sure).

I used three different video sizes for my hero video to make the site responsive for different screens. The videos that does not show are set to <display:none> in media queries. The middle screen size has a different video than the others to make the change visible. 

I added a sticky navbar with the help of Javascript. The navbar is below the video, and sticks to the top on scroll.

The main content has a form to book pottery classes for a group of friends,  and a FAQ-accordion. I used flexbox to align all content. The accordion has icons that indicates if the items is collapsed or not. It has a small transitioning on collapse. 

The page also has a footer. Small glimpses of fun are animation on hover on the navbar links, a favicon and an arrow down mouse cursor on the accordion header. 

With more time I would have added a text container in the beginning of the main content, as well as a button on the side of the content to click back up on the page.

EDIT: I have noticed three bugs that I, with more time and less stress, would have wanted to correct:

1. The accordion JS-loop makes one textbox close when another is opened. However, the icon does not follow this pattern, so if a textbox is closed on click of another, the icon won't change back. Hm.
2. The sticky navbar worked fine and dandy in all three media breakpoints in Chrome. But on Netlify, the navbar won't stick until scroll reaches further down the page on mobile and iPad view. Instead it sorts of disappear and then bounces back to the top. A quick guess would be that it bounces to fixed when it reaches the starting point of large screen view? I would have liked to investigate more in this.
3. The hight of the accordion container doesn't always match the form container on laptop/iPad view. It happens because the form container's height is fluid while the accordion's is fixed to try to align it to the form container. On mobile this is not an issue as the layout is different. The quick fix would of course be to set them both to the same height, but I would like them to be fluid. I'm guessing the flex property could've taken care of this.



## View it live
https://malteform-signup.netlify.app/
