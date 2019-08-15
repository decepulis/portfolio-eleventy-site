const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },{
            loader: 'css-loader',
            options: { sourceMap: true }
          },{
            loader: 'postcss-loader',
            options: { sourceMap: true }
          },{
            loader: 'sass-loader',
            options: { sourceMap: true }
          },
        ]
      }
    ]
  }
});