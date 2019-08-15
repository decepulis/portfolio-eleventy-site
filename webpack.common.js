const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
      './src/scripts/main.js',
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: './src/posts/projects/2019_portfolio_site.md',
        to: '../README.md',
        transform(content, path) {
          return fixUrlsForGitHub(content)
        },
      }
    ])
  ]
}

function fixUrlsForGitHub(content) {
  var siteUrl = 'https://jovial-engelbart-1fa19d.netlify.com'
  var localUrl = /\[(.*)\]\(\/(.*)\/\)/g
  var frontMatter = /---[\s\S]*title[\s\S]*---/
  return content.toString()
    .replace(localUrl, `[$1](${siteUrl}/$2/)`)
    .replace(frontMatter, '');
}
