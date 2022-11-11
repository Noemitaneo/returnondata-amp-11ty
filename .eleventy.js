const ampPlugin = require('@ampproject/eleventy-plugin-amp');
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(ampPlugin);

  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};