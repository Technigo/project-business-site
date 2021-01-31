# Business Site

This is an excercise in forms, hero-images/video and JavaScript accordion. I chose to make a kind of a knockoff of wetransfer (volley.wetransfer.com) - a file transfer service. I liked the idea of a simple site with the "hero" image filling the entire background. 

## The problem

I started with throwing together a Figma (https://www.figma.com/file/w6zXREqVRS47es8lFaQhoM/Business-site?node-id=0%3A1) - i then spent a lot of time getting the background image to work as intended, later on i changed to a background video instead - that had me spending many hours trying to get the video to fill the entire window, until i realized the video i was using har "letterbox" black areas in the top and botttom, so it turned out it was in the source material and not in my code :/ 
I also spent many hours trying to figure out why some accordion elements were not clickable, until i realized it was the hidden accordion content that was in the way even though invisible. So i managed to solve that with z-index. 
I really had hoped to be able to do a lot better with this weeks project, but i guess i didnt plan my time well enough for that. Some things i would have liked to have done are:
- Get the background video to place itself centered horizontally. There is also a bug when you chrome inspect the video element goes out to the sides.
- I did this project not at all mobile first, so that is something i should have planned better from the start. It turned out to be really tricky dowsizing to mobile from this awkward full screen debacle
- I would have liked to do the form much nicer, with animations and effects, i also wanted to do a custom popup info thing and validation feedback as on wetransfer on active inputs. I would have liked to try fieldset and legend on the form. And custom checkbox.


## View it live
https://adoring-hugle-335540.netlify.app/
