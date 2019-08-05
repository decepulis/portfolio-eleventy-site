module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addCollection("tagList", require("./src/_11ty/getTagList"));
  eleventyConfig.addPassthroughCopy('src/images');

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  };
}
