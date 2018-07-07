'use strict'

module.exports = {
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],
    loaders: [{
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loaders: ['style', 'css?modules']
    }]
  }
}
