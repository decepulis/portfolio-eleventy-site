const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },{
            loader: 'css-loader',
          },{
            loader: 'postcss-loader',
          },{
            loader: 'sass-loader',
          },
        ]
      }
    ]
  }
});