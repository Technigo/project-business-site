# Instructions

## 🏢 Build a Business Site

Your task is to create a business one-pager website that contains an image or video header and a signup form. The main focus is practising what you've learned about HTML forms. You can make up your own fantasy company or use an existing one.

## Requirements

- A header with responsive image/video
- A signup form with at least three different input types. Examples:
  - Text fields
  - A password field
  - Set of radio buttons
  - Set of checkboxes
  - Submit button
- Style your page
- The page should be fully responsive and work well on mobile as well as tablet and desktop (it should look good on devices from 320px width up to 1600px).
- Follow the guidelines on how to write clean code

## How to get started
**Not a designer?** We then heavily encourage you to find a signup form that you like and use that as inspiration to copy their styling. Why reinvent the wheel (you will also win time on this) when many great designers already have done the job for you? Here's some great resources👇

- [Confetti](https://confetti.events/sv/) (hero video)
- [Spotify signup form](https://www.spotify.com/se/signup) - Copy the link and open in incognito if you are already logged in 😉
- [Dribbble](https://dribbble.com/search/signup-form) (signup form examples)

### Creating the Hero Section

A very common element on websites is the top section with a background image or video. It's called a hero image or hero video. You should add a hero image or video that is responsive.

#### Finding great free images

Check in the [Image resources](https://technigo.notion.site/Image-resources-04237e2fdd624562acd58643dac93016?pvs=4) from the toolbox to find nice images.

#### Finding great free videos

You can for example find free videos to use on [Pexels](https://www.pexels.com/videos/). Use media queries to display the right video element for each screen size. Hide video elements you don't want to show with display: none in your CSS. Place the video at the top of your page with no margins. If you want to learn about how to resize a video to fit the header, [check this out](https://www.w3schools.com/css/css3_object-fit.asp).

### Build the Signup form

You should also build a signup form and style this according to how you want it to look. In the end, you will also post the data from the form into a service called HTTPBin, which should show the data you put in. It is a server and will work in the same way as if we posted this data to our own server to create a user account.

Set the form action to post to `https://httpbin.org/anything` and the method set to `post`.

This means that httpbin will show you what this response would look like if you sent this to a server.

Try submitting your form to see how the response from httpbin looks:

- What do the textfields look like?
- What response do you get from the password field?
- Try selecting one or a few of the radio buttons & submit again. What changes?
- Select none of the radio buttons and then submit.
- Check the checkboxes and then submit.
- Leave the checkboxes unchecked and then submit.
