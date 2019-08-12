module.exports = {
  entry: [
    // 'core-js/modules/es.promise',
    // 'core-js/modules/es.array.iterator',
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
