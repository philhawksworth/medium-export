const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("date", require("./filters/dates.js") );
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });


  return {
    dir: {
      input: "site",
      output: "dist",
      data: "_data"
    },
    feed: process.env.MEDIUM_FEED ||'https://medium.com/feed/netlify'
  };

};
