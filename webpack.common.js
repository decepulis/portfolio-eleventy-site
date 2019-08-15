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
  }
}
