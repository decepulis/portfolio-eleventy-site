const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Settings
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addCollection("tagList", require("./src/_11ty/getTagList"));

  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/files');

  // Filters
  eleventyConfig.addFilter("dateFormat", (dateObj, inputDateFormat) => {
    let format = "dd LLL yyyy"

    if (inputDateFormat === "MonthYear") {
      format = "LLL yyyy";
    } else if (inputDateFormat === "Year") {
      format = "yyyy"
    }
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat(format);
  });

  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Return
  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  };
}
