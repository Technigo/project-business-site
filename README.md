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
3. T̶h̶e̶ h̶ei̶g̶h̶t̶ o̶f̶ t̶h̶e̶ a̶c̶c̶o̶r̶d̶i̶o̶n̶ c̶o̶n̶t̶a̶i̶n̶e̶r̶ d̶o̶e̶s̶n̶'̶t̶ a̶l̶w̶a̶y̶s̶ m̶a̶t̶c̶h̶ t̶h̶e̶ f̶o̶r̶m̶ c̶o̶n̶t̶a̶i̶n̶e̶r̶ o̶n̶ l̶a̶p̶t̶o̶p̶/̶i̶P̶a̶d̶ v̶i̶e̶w̶.̶ I̶t̶ h̶a̶p̶p̶e̶n̶s̶ b̶e̶c̶a̶u̶s̶e̶ t̶h̶e̶ f̶o̶r̶m̶ c̶o̶n̶t̶a̶i̶n̶e̶r̶'̶s̶ h̶e̶i̶g̶h̶t̶ i̶s̶ f̶l̶u̶i̶d̶ w̶h̶i̶l̶e̶ t̶h̶e̶ a̶c̶c̶o̶r̶d̶i̶o̶n̶'̶s̶ i̶s̶ f̶i̶x̶e̶d̶ t̶o̶ t̶r̶y̶ t̶o̶ a̶l̶i̶g̶n̶ i̶t̶ t̶o̶ t̶h̶e̶ f̶o̶r̶m̶ c̶o̶n̶t̶a̶i̶n̶e̶r̶.̶ O̶n̶ m̶o̶b̶i̶l̶e̶ t̶h̶i̶s̶ i̶s̶ n̶o̶t̶ a̶n̶ i̶s̶s̶u̶e̶ a̶s̶ t̶h̶e̶ l̶a̶y̶o̶u̶t̶ i̶s̶ d̶i̶f̶f̶e̶r̶e̶n̶t̶.̶ T̶h̶e̶ q̶u̶i̶c̶k̶ f̶i̶x̶ w̶o̶u̶l̶d̶ o̶f̶ c̶o̶u̶r̶s̶e̶ b̶e̶ t̶o̶ s̶e̶t̶ t̶h̶e̶m̶ b̶o̶t̶h̶ t̶o̶ t̶h̶e̶ s̶a̶m̶e̶ h̶e̶i̶g̶h̶t̶,̶ b̶u̶t̶ I̶ w̶o̶u̶l̶d̶ l̶i̶k̶e̶ t̶h̶e̶m̶ t̶o̶ b̶e̶ f̶l̶u̶i̶d̶.̶ I̶'̶m̶ g̶u̶e̶s̶s̶i̶n̶g̶ t̶h̶e̶ f̶l̶e̶x̶ p̶r̶o̶p̶e̶r̶t̶y̶ c̶o̶u̶l̶d̶'̶v̶e̶ t̶a̶k̶e̶n̶ c̶a̶r̶e̶ o̶f̶ t̶h̶i̶s̶.̶ Changed the flex-direction to column on iPad and laptop view. Look better!



## View it live
https://malteform-signup.netlify.app/
