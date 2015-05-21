var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, '/app'),

  entry: {
    bundle: './index.js',
    user: './components/user',
    news: './components/news'
  },
  output: {
    path: path.join(__dirname, '/app'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      /*eslint-disable */
      NODE_ENV: process.env.NODE_ENV === 'development'
      /*eslint-enable */
    }),
    new webpack.optimize.CommonsChunkPlugin('bundle', 'bundle.js')
  ],

  //eslint: {
  //  configFile: './www/.eslintrc'
  //},

  module: {
    loaders: [
      //{
      //  test: /\.js$/,
      //  loader: 'babel',
      //  exclude: /node_modules/
      //},
      //{
      //  test: /\.js$/,
      //  loader: 'eslint',
      //  exclude: /node_modules/
      //},
      //{
      //  test: /\.html$/,
      //  loader: 'raw',
      //  exclude: /node_modules/
      //},
      //{
      //  test: /\.css$/,
      //  loader: 'style!css',
      //  exclude: /node_modules/
      //}
    ]
  }
};
