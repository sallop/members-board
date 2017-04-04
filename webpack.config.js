'use strict';

var path = require('path');
var webpack = require('webpack');
var js_dist = path.join(__dirname, './dist');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//module.exports = {
const config = {
  context: path.resolve(__dirname, 'app/scripts'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js',
  ],

  output: {
    filename: 'bundle.js',
    //filename: '[name].js',
    path: js_dist,
    //path: path.resolve(__dirname, 'dist'),
    publicPath: path.join(__dirname, "dist"),
  },

  devtool: "source-map",

  module: {
    rules: [
      { 
        test: [/\.(js|jsx)$/],
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: [/\.scss$/],
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true, sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
        //use: ExtractTextPlugin.extract({
        //  use: 'css-loader'
        //})
      },
      {
        test: /\.json/,
        use: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    publicPath: '/',
    port: 8080,
  }
};

module.exports = config;
