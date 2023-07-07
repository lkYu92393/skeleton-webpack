const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Skeleton Webpack',
      filename: 'index.html',
      template: 'src/assets/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'src/assets/static',
        to: 'static'
      }]
  })
  ]
};