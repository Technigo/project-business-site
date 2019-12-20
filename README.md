`PROJECT 3`

# Build a Business Site

This week’s project is to create a site for a company of your choice. You can come up with your own fantasy company or use an excitsting one.

It could look something like this:
![Design](https://github.com/Technigo/project-3/blob/master/business-web.png)

We want you to practise what we've gone through this week so the website should contain these three parts:

| hero image/video | signup form | accordion |
|---------|---------|---------|
| <img src="https://github.com/Technigo/project-3/blob/master/hero-video.png" alt="hero-video" width="300"/> | <img src="https://github.com/Technigo/project-3/blob/master/sign-up.png" alt="signup-form" width="300"/> | <img src="https://github.com/Technigo/project-3/blob/master/FAQ-design.png" alt="FAQ-accordion" width="300"/> |



### Hero image or video
There is a great design trend right now where websites contain a top section with background image or video. It's called hero image or hero video. You should **add a hero image or video** that is responsive.

You can find free images to use on [unsplash](https://unsplash.com/)

We have collected six video files, three .mp4 and three .webm, in three video sizes, if you want to use videos. You can find them in the video folder of this repo. You can of course choose you're own videos as well. Use media queries to display the right video element for each screen size. Hide video elements you don't want to show with `display: none` in your CSS. Video in full width for every screen size. Place the video at to top of your page with no margins. If you want to learn about how to resize a video to fit the header, [check this out](https://www.w3schools.com/css/css3_object-fit.asp)

### Signup form
You should also build a **signup form** and style this according to how you want it to look. In the end you will also post the data from the form into a service called HTTPbin and it should show the data you put in. It is basically a server and will work in the same was as if we posted this data to our own server to for example create a user account.

Build a form that contains all or some of these:

- 2 x Text fields
- 1 x A password field
- 1 x Set of radio buttons
- 1 x Set of checkboxes
- 1 x Submit button

Set the form action to post to `https://httpbin.org/anything` and the method set to `post`. This means that httpbin will show you how this response would look like if you sent this to a server.

Try submitting your form to see how the response from httpbin looks:

- How does the textfields look like?
- What response do you get from the password field?
- Try select one or a few of the radio buttons & submit again. What changes?
- Select none of the radio buttons & submit.
- Check the checkboxes & submit.
- Leave the checkboxes unchecked & submit.

### Accordion
The website should also have an **accordion**, meaning an area that can collapse to show and hide text. These are very often used on FAQ sections, but you can choose what ever you want for your accordion.

You accordion should fulfill the following basic requirements:

1. Click a section title to expand its description.
2. Click the title again to collapse the description.

We've already given you some JavaScript code for this, just make sure that the javascript file is linked from the HTML. Use CSS to show/hide.
Once you have one section showing and hiding, you need to update the JavaScript to call the toggle function for all your sections.

The JavaScript file is set up to add toggle an ".active" class on the title divs when you click the title (use the inspector to see this in action). Use an "adjacent" CSS selector to select the panel next to an ".active" element and set it to display: block; to make it visible. Read [this](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) to learn about the adjacent selector.

## Design Inspiration 🎨

- [Confetti](https://confetti.events/en/) uses a video as their header
- [Signup form design ideas](https://dribbble.com/search?q=signup+form) found on Dribbble
- [Accordion example](https://www.beatsbydre.com/uk/support)

## What you will learn 🧠

- Use image or video in the header, for responsive webpages
- How to use HTML forms and simple requests
- How to modify the DOM using Javascript

## How to get started 💪🏼

1. Fork this repo
2. Clone this repo into your projects folder on your computer
3. Open up VS Code and start coding!

## Requirements 🧪

- Code follows Technigo’s code guidelines.
- Site should have a header with responsive image/video, a signup form, and a FAQ accordion.
- Contribute by helping others with this project on Stackoverflow.
- If selected; demo your solution for your team.
- Deploy your site, when the code review is done.

## How to hand in the code 🎯

- When you’re finished with the project, push your code to GitHub with these commands:

  ```
  git add .
  git commit -m "your commit message"
  git push origin master
  ```

- Navigate to your repo and create a Pull Request into the Technigo repo
- Wait for the code review from your teachers, then deploy the site on Netlify

## How to get help 🆘

Ask for help and share your knowledge about this project with the 'business-site-project' tag on [Stack Overflow](https://stackoverflow.com/c/technigo/questions). Talk to your team on Slack and help each other out. Do some research about your problem, you are surely not the first one with this problem, Google is your friend 🙂. And you can of course also reach out to your teachers.

## Stretch Goals 🏃‍♂

Make sure you've commited and pushed a version of your project before starting with the stretch goals.

**_Design_**

- Add an icon before the title in the accordion indicates whether the section is expanded or collapsed. It should update when the section expands or collapses.
- Try to add some animations on your project. For example a slide-down effect when the accordion expands and collapses.
- On hover, change the mouse cursor to something other than the default.
- Add a focus effect on the input tags (Using the CSS `:focus` pseudo-selector). Make the border or the background of the field change colour and add a glow effect.

**_Deep-dive_**

- Try out some other form elements or input types.
- Add some validation to the form.
- Add a header and/or a button on top of your video, just like Confetti, by using position: absolute and z-index to get everything in the right place.
- Make every other row in the accordion have another background color.

**_Help for stretch goals_**

- [nth-child in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Anth-child)
- [Style the cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
- [Styling HTML forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Styling_HTML_forms)

#### 🚨 Don't forget to add, commit and push the changes to GitHub when you're done. 🏁
