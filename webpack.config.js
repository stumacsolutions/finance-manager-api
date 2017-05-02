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
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: __dirname,
      exclude: /node_modules/,
    }]
  },
  output: {
    filename: 'handler.js',
    libraryTarget: 'commonjs',
    path: '.webpack'
  },
  target: 'node'
}
