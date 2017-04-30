var path = require('path');

module.exports = {
  entry: {
    create: './todos/create.js',
    delete: './todos/delete.js,'
    get: './todos/get.js',
    list: './todos/list.js',
    update: './todos/update.js'
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
};
