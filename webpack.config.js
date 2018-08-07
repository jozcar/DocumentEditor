var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  devtool: "source-map",
  module: {
    rules: [
        {
            test: /.js?/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['env', 'react']
            }
        },

        {
            test: /\.css$/, loader: 'style-loader!css-loader'
        }

    ],
   
}
};

module.exports = config;