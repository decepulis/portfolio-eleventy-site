---
title: This Website
description: Some fun with SSGs and CSS.
date: 2019-08
dateformat: MonthYear
---
## Development
### Build Pipeline: Webpack & 11ty
The build process used in this project can largely be credited to the 11ty starting point template [deventy](https://github.com/ianrose/deventy), by Ian Rose (who has supremely good web development sensibilities).
That template provided the following technologies for me to hang my hat on.
- [11ty](https://www.11ty.io/)
- [Sass/SCSS](https://github.com/sass/node-sass)
- [Webpack](https://webpack.js.org/), which mainly handles the
- [Babel](https://babeljs.io/), which lets me write in ES6 when I want to.
- [light-server](https://github.com/txchen/light-server), which lets me see my changes without mashing refresh.
- [PostCSS](https://postcss.org/)
- [CSSnano](https://cssnano.co/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)

With that template and eleventy's [great documentation](https://www.11ty.io/docs/), I established the project as you see it here.

### Building and Deploying with Netlify
Yep. This is what I'm doing. [Netlify](http://netlify.com) watches this repo and builds with `npm run build` every time I commit. It's great. Netlify is great.

[![Netlify Status](https://api.netlify.com/api/v1/badges/83a24e36-aae8-43f2-9c18-3195caed5ea3/deploy-status)](https://app.netlify.com/sites/jovial-engelbart-1fa19d/deploys)

## Themes
### Rad
Deserved [its own blog post](./src/posts/blog/2019/portfolio-theme-rad.md)