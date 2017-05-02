var nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: [
    './todos/create.js',
    './todos/delete.js',
    './todos/get.js',
    './todos/list.js',
    './todos/update.js'
  ],
  externals: [nodeExternals()],
  target: 'node'
}
