var nodeExternals = require('webpack-node-externals')
var path = require('path')

module.exports = {
  entry: [
    './todos/create.js',
    './todos/delete.js',
    './todos/get.js',
    './todos/list.js',
    './todos/update.js'
  ],
  externals: [nodeExternals()],
  target: 'node',
  module: {
    loaders: [
      { test: /\.js$/, include: /todos/, loader: 'babel' }
    ]
  }
}
