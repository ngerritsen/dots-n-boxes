const webpack = require('webpack')
var config = require('./webpack.config.js')

module.exports = Object.assign(
  {},
  config,
  {
    devtool: undefined,
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            screw_ie8: true
        }
    })
    ]
  }
)
