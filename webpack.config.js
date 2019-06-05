var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html',
    filename: 'index.html'
  })]
}