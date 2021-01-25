# Business Site

Replace this readme with your own information about your project. 

Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

## View it live
Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.


"This week’s project is to create a site for a company of your choice. You can come up with your own fantasy company or use an existing one.

## Hero Image or Video

There is a great design trend right now where websites contain a top section with background image or video. It's called hero image or hero video. You should **add a hero image or video** that is responsive.

You can find free images to use on [unsplash](https://unsplash.com/).

We have collected six video files, three .mp4 and three .webm, in three video sizes, if you want to use videos. You can find them in the video folder of this repo. You can of course choose your own videos as well. Use media queries to display the right video element for each screen size. Hide video elements you don't want to show with `display: none` in your CSS. Place the video at to top of your page with no margins. If you want to learn about how to resize a video to fit the header, [check this out](https://www.w3schools.com/css/css3_object-fit.asp).

## Signup form

You should also build a **signup form** and style this according to how you want it to look. In the end, you will also post the data from the form into a service called HTTPBin and it should show the data you put in. It is basically a server and will work in the same way as if we posted this data to our own server to for example create a user account.

Build a form that contains all or some of these:

- 2 x Text fields
- 1 x A password field
- 1 x Set of radio buttons
- 1 x Set of checkboxes
- 1 x Submit button

Set the form action to post to `https://httpbin.org/anything` and the method set to `post`. This means that httpbin will show you how this response would look like if you sent this to a server.

Try submitting your form to see how the response from httpbin looks:

- How does the textfields look like?
- What response do you get from the password field?
- Try select one or a few of the radio buttons & submit again. What changes?
- Select none of the radio buttons & submit.
- Check the checkboxes & submit.
- Leave the checkboxes unchecked & submit.

### **Accordion**

The website should also have an **accordion**, meaning an area that can collapse to show and hide text. These are very often used on FAQ sections, but you can choose what ever you want for your accordion.

You accordion should fulfill the following basic requirements:

1. Click a section title to expand its description.
2. Click the title again to collapse the description.

We've already given you some JavaScript code for this, just make sure that the javascript file is linked from the HTML. Use CSS to show/hide. Once you have one section showing and hiding, you need to update the JavaScript to call the toggle function for all your sections.

The JavaScript file is set up to add toggle an ".active" class on the title divs when you click the title (use the inspector to see this in action). Use an "adjacent" CSS selector to select the panel next to an ".active" element and set it to `display: block;` to make it visible. Read [this](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) to learn about the adjacent selector.