var nodeExternals = require('webpack-node-externals')
var path = require('path')

module.exports = {
  entry: './todos/index.js',
  externals: [nodeExternals()],
  target: 'node',
  module: {
    loaders: [
      { test: /\.js$/, include: /todos/, loader: 'babel' }
    ]
  }
}
