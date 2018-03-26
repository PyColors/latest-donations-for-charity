const config = require('./webpack.base')
const webpack = require('webpack')

// add compiler HTML...
// add file for entry
config.entry.app.unshift("./webpack/dev-client.js")

// Hot Module Replacement with node.js AP
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.EnvironmentPlugin(['NODE_ENV']),

// Compile if Error (webpack-hot-middleware)
  new webpack.NoErrorsPlugin()
])

module.exports = config
