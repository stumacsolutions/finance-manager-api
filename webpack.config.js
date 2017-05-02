var nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './todos/list.js',
  externals: [nodeExternals()],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: __dirname,
      exclude: /node_modules/,
    }]
  },
  target: 'node'
}
