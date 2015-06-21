let ngModule = angular.module('app');

//if (ON_TEST) {
//  require('./news.test.js')(ngModule);
//}

require('./news.css');
require('./news.js')(ngModule);
