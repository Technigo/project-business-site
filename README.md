# Business Site

This week's project is to build a buisness site with a header with a img or video, a form, a accordion, etc...

I'm going to do a buisness site called metal music festival.

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

PLAN:
I came up with the idea of a metal festival website since I love metal music. Then started doing a jamboard on how it would look.

PROBLEMS: VIDEO & NAVBAR: 
2020-09-02: Wanted to have a title and a navbar on the video, have the video in the background so to say. Googled a lot, but did not find or/and understand really. Then added a navbar with line under links + animation, and I guess the position got it to work on top of the video, even though I don't really understand why. However the function of when you hover over the navbar links doesn't work when on top of the video. With exactly the same code but not in the header, it works. Why? - Problem solved with the z-index.... Asked about this at stack overflow :)

2020-09-05: Tried to minimize the file size of the video, converted it online and also download the VLC and converted there. The video was ~14MB and are now ~2.5MB, but when showing in the browser it takes a long time for it to start playing, it seems like it is no differents in time for it to upload even though it is smaller now. Want the video mp4 also in webm and ogg, googled it and found out I could convert it in VLC, so I did, but it first with the smaller video-mp4 did not work, tried convert the bigger video-mp4 file, worked but was very bad quality. I found a online site to convert it to webm and worked out with much better quality, the ogg did not work out. Found another program, a website to convert my files, still no changes in uploading time if ~2-6MB or 13-14MB, also could convert to webm and ogg in this website.

2020-09-05: I want to have the video all over (widht)... Solved by changing the CSS for the video, max-widht: 100% to widht:100%.

PROBLEMS: ACCORDION:
2020-09-04: So I used one of our teachers code for the accordion, wanted to add more questions + answers than 3, so added two more and the space between question-header 3-5 was none, so it did not look good... Checked the CSS and the JS for something I missed, then noticed I forgotten a </div> in the html, so when I added that it worked out :)

THOUGHTS ABOUT THIS:
Maybe I should had choosen a video from a free video-download-site for better quality and smaller file-size. But I got in love with the colours of my private video (also my love for the band Alcest), and the animation I did in a video-editor... Even though quality not that good/profesional and take some time till it is loaded and plays. Also the design over all could be better, but even though I love designing, I have had the priority that nice coding and learning about code is priority number one. Also time-limit, me working 85% at the same time as studying 50%, I think it is okay. But I aim for better and better of course. So I'll like to in the future go back and make this project better.


## View it live
https://metal-festival-project3.netlify.app/
