// npm script "dev": "webpack -d --watch",
var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.join(__dirname, '/client');
var BUILD_DIR = path.join(__dirname, '/public/bundles');

console.log(APP_DIR, BUILD_DIR);

var config = {
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: APP_DIR,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, 
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        },
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
    ]
  }
}

module.exports = config;