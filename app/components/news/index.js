let angular = require('angular');
let ngModule = angular.module('app');

require('./news.css');
require('./newsCtrl.js')(ngModule);
