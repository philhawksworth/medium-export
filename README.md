# Medium Export

An example of how easy it can be to generate a site based on an RSS feed. In this instance focussed on Medium's RSS Feeds


## Quick start

You can get your own version of this site by just clicking the button below, and then providing a suitable Medium RSS feed URL.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/philhawksworth/medium-export)


### What will clicking that button do?

Fair question. After clicking the button, [Netlify](https://www.netlify.com) will ask for your permission to clone this repo into your own GitHub account, and then create a new site for you in Netlify linked to that repo. It will also ask for a feed to ingest at build time (see below if for some to pinch if you need to).

Then it will build and deploy a new site for you, complete with hosting and continuous deployment all configured.

The whole thing should take less than a minute!

### Medium RSS Linkspiration:

- https://medium.com/feed/netlify
- https://medium.com/feed/memory-leak
- https://medium.com/feed/@philhawksworth
- https://medium.com/feed/@addyosmani
- https://m.signalvnoise.com/feed


## Local development

This site is built with [Eleventy](https://11ty.io) and have very few prerequisites:

- Node
- Npm or Yarn

### Install and bootstrap

```bash
# clone this repository (or do that via the button above)
git clone git@github.com:philhawksworth/medium-export.git

# move into the working directory and install dependencies
cd medium-export
yarn

# generate and serve the site while watching for changes
yarn start

# build the site
yarn run build

```
