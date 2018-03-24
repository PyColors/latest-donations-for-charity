const hotClient = require('webpack-hot-middleware/client')

// For a few events
hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
