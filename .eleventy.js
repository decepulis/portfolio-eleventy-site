const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Settings
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addCollection("tagList", require("./src/_11ty/getTagList"));
  eleventyConfig.addPassthroughCopy('src/images');

  // Filters
  eleventyConfig.addFilter("dateFormat", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });
  eleventyConfig.addFilter("dateFormatMonthYear", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("LLL yyyy");
  });
  eleventyConfig.addFilter("dateFormatYear", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("yyyy");
  });
  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Return
  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  };
}
