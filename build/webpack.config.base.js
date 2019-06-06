var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
console.log(1111, __dirname)
module.exports = {
  // entry: {
  //   app: ''
  // }
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html',
    filename: 'index.html'
  })]
}