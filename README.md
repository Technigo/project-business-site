# Business Site

The purpose this week was to create a business site containing a hero video, a signup form and an accordion.
I chose to keep last week's dog theme, building an application page for a day care center for dogs.

## The problem

I applied the "desktop first" approach, with different media queries for tablet and mobile.
The webpage contains a top section with a hero video in 3 different resolutions, one for each device category. An image is used as fallback in case the video could not be played. I added a header on the video, using position:absolute and z-index. I made the navbar sticky with Javascript.
The signup form contains different types of input, all required (except for the checkboxes) and it has been tested successfully with https://httpbin.org/anything.
The FAQ accordion is built with Javascript, it has been improved with icons, different colors on every other row and some animations (different color and mouse cursor on hover, slide-down on click).

I spent much of my time on layout and responsiveness. I had some difficulties with flexbox (again), especially in the signup form, and I had to simulate different scenarios and solutions in the inspector.

I have tested my web page with good results in Chrome, Edge and on iPad Pro. On iPhone (XR), I get the fall back image instead of the video. Luckily, I spent some time on choosing and editing the fall back image and it looks nice anyway. Still no luck with Internet Explorer.

If I had more time, I would try to apply the BEM methodology. I read about it and tried to use it but it got too disconcerting.

## View it live
You can take a look at the result on https://relaxed-wescoff-d89de7.netlify.app/
You are welcome to visit my pull request https://github.com/Technigo/project-news-site/pull/54 and leave some comments about my code.
Enjoy!
