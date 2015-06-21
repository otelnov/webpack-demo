var webpack = require('webpack');
var path = require('path');

var config = {
  context: path.join(__dirname, '/app'),
  devtool: 'eval', //'source-map',

  entry: {
    common: [
      'angular',
      'angular-ui-router',
      'oclazyload',
      './index.js'
    ],
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
      ON_DEV: process.env.NODE_ENV === 'development',
      ON_TEST: process.env.NODE_ENV === 'test'
      /*eslint-enable */
    }),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
        exclude: /node_modules/
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  delete config.devtool;
  config.output.path = path.join(__dirname, '/dist');
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}

module.exports = config;
