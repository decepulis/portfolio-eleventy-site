---
title: Portfolio Themes - Rad
description: Color Theory and Accessibility
date: 2019-08
dateformat: MonthYear
---
Rad was an exploration of two concepts: how can I generate pleasing color palettes, and how can I ensure they remain accessible? The most robust solution ended up being pretty boring: don't go reinventing the (color) wheel&mdash;use well-established color relationships like complementary colors or triads&mdash;and use either light colors with dark text, or dark colors with light text. Let me take you through the journey to get to that answer, though.

## The Color Wheel
First, how does one randomly generate color palettes? Turns out that I learned the answer years ago, in Mrs. Centa's Grade 4 art class: use the color wheel! Many [others](http://www.worqx.com/color/combinations.htm) can explain color combinations on the color wheel better than I can. If you don't know, though, I'll give you the short story: colors a certain distance away from each other look good with each other. Complementary colors are 180° away from each other on the color wheel. Monochromatic colors are all in the same degree; they just vary in brightness and saturation. Analogous colors are all adjacent. Because I wanted three colors&mdash;one for the site background, one for the headers, and one for body text&mdash;I ended up exploring two other relationships: split-complementary and triads.

### Split-Complementary Colors
Split-complementary color schemes are pretty simple: pick two complementary colors, and then replace one of them with two colors on either side. Doing this in JavaScript and CSS was pretty simple: pick a random number between 0 and 360, pick two +/- 20°‚ away, and pick one 180° away. CSS already supports expressing colors in degrees through `hsl()`, so I just set a CSS variable through JavaScript. Bam. Pretty website.
```javascript
const root = document.documentElement;
const randVal = Math.random() * 360;

const sat = 100;

// background (Background)
const bgHue = randVal;
const bgLight = 95;
// headers
const headerHue = randVal - 20;
const headerLight = 30;
// text
const tHue = randVal + 20;
const textLight = 20;
// accent
const accentHue = randVal + 180;
const accentLight = 60;

root.style.setProperty('--background', `hsl(${bgHue}, ${sat}%, ${bgLight}%)`);
root.style.setProperty('--header1', `hsl(${headerHue}, ${sat}%, ${headerLight}%)`);
root.style.setProperty('--text', `hsl(${textHue}, ${sat}%, ${textLight}%)`);
root.style.setProperty('--accent', `hsl(${accentHue}, ${sat}%, ${accentLight}%)`);
``` 

I actually had a variant of this [implemented](https://5d51ca39a2afe30009393cc6--jovial-engelbart-1fa19d.netlify.com) in an early version and really liked it! That version used the -20 hue for H1 and H2, the +20 hue for H3&ndash;H6, and the 0 hue for body text. But then I got distracted by triads.

### Triads and Issues
Triads are a color relationship in which all three colors are equidistant on the color wheel. A responsible triad might mute two of the colors and use one as an accent. But I was feeling _rad_ so I ramped them all up! And quickly ran into an obstacle: no matter if I set the color to black or white, some text remained unreadable.

<img src="/img/projects-portfolio-1.png">

<img src="/img/projects-portfolio-2.png">

When I saw this problem before, in the code quoted above, I simply darkened the colors and lightened the background until the [Firefox Accessibility Inspector](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector) told me that I had enough contrast. However, I wanted bright, saturated, _rad_ colors. While maintaining readable text. It took me three solutions to get to the bottom of that.

## Accessible Text on Randomly Generated Colors
### The 'L' in 'HSL'
My first attempt to get readable text on _rad_ colors was to simply set text color to black if the 'l' in 'hsl' was >50%, and white if not. Seems great, right? Nope. Here's white text on a 50% yellow (same picture as above!), and on a 50% blue.

<img src="/img/projects-portfolio-1.png">

<img src="/img/projects-portfolio-4.png">

So, despite having the same 50% lightness value, the yellow _appears_ a lot brighter than the blue. What gives?

### Calculating Apparent Brightness for HSL

### Giving Up
