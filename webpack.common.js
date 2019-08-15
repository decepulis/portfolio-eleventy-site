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
  var localPostUrl = /\[(.*)\]\(\/posts\/(.*)\/\)/
  return content.toString()
    .replace(localPostUrl, "[$1](./src/posts/$2.md)");
}
