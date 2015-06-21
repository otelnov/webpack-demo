var path = require('path');
var webpackConfig = require('./webpack.config.js');

var entries = [];
var preprocessors = {};

var fullPath = path.resolve(webpackConfig.context, webpackConfig.entry);
entries.push(fullPath);
preprocessors[fullPath] = ['webpack'];

module.exports = function (config) {
  config.set({
    files: entries,
    webpack: webpackConfig,
    preprocessors: preprocessors,

    basePath: '',
    frameworks: ['mocha', 'chai'],
    exclude: [],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,

    plugins: [
      require('karma-webpack'),
      'karma-chai',
      'karma-mocha',
      'karma-chrome-launcher'
    ]
  });
};
