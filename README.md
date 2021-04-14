# Business Site

The goal for this project was to create an imaginary business site that made use of a hero image or video as the highlight along with implementing a form and accordian style FAQ section using only html, css, and very basic js.

I chose to build an imaginary company called Dog-GO which centers around booking dog and owner friendly vacation adventures!

## What I learned & how I solved it:

- I wanted a hero video that remained fixed in place while the user continues to scroll down. It took some creative google-fu to find the answers I needed. I gave the parent-container of the video a relative position, while giving the video itself a fixed position along with a object-fit: cover, and making sure the video's width and height were set to 100vh/vw.

- I realized just how important it is to build your site responsively mobile first. I originally designed with desktop in mind first and ran into problems with the change in responsive screens for tablet and mobile. I ended up rewriting my css code to build from mobile up to desktop and found it much easier to fix the layout issues I was having before.

- I wanted the mobile view to have a image background instead of a video, keeping in mind that mobile data can be used up to download the video. So I thought an image was a better choice, I had to follow similar styling at the video and make sure that displays were properly turned on and off in the media queries.

- I created an header navigation menu to go over top of the hero video, however I immediately noticed issues with the content not layering properly on the page. By adding a z-index to my hero video of -1 I was able to have my menu, form, accordion, and footer sit comfortably on top.

## View it live

https://doggotravel.netlify.app/


