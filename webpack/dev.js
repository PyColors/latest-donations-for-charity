/*
File for Dev
*/
const webpack = require('webpack')
const config = require('./webpack.dev.js')
const chokidar = require('chokidar')
const webpackDevServer = require('webpack-dev-server')
const port = 8080;

// Add compiler
const compiler = webpack(config);
const hotMiddleWare = require('webpack-hot-middleware')(compiler)

// Listen all HTML files
chokidar.watch('./*.html').on('all', function() {
  hotMiddleWare.publish({ action: 'reload' })
})

// Get configuration by webpack
let server = new webpackDevServer(compiler, {
  hot: true,
  historyApiFallback: true,
  contentBase: './',
  host: process.env.IP,
  port: process.env.PORT,
  /*
  * As I am using Cloud9 ide, this is for the "Invalid Host header", HTTPS
  * You must have to change it
  */
  "public": "latest-donations-for-charity-pycolors.c9users.io", // - no trailing slash
  contentBase: './',
  quiet: false,
  noInfo: false,
  publicPath: config.output.publicPath,
  stats: { colors: true }
});

// Add hot-middleware to the server (MHR)
// Can see Errors on the front end
server.use(hotMiddleWare)

server.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Listen on the port: " + port)
  }
})
