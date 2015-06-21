let ngModule = angular.module('app', ['ui.router', 'oc.lazyLoad']);

ngModule.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    let hash = window.webpackHash || '';

    $stateProvider
      .state('main', {
        url: '/',
        template: require('./components/main.html')
      })
      .state('news', {
        abstract: true,
        template: '<ui-view></ui-view>',
        resolve: {lazy: ['$ocLazyLoad', $ocLazyLoad => $ocLazyLoad.load(`./${hash}news.js`)]}
      })
      .state('news.main', {
        url: '/news',
        template: '<news-main></news-main>'
      })

      .state('user', {
        abstract: true,
        template: '<ui-view></ui-view>',
        resolve: {lazy: ['$ocLazyLoad', $ocLazyLoad => $ocLazyLoad.load(`./${hash}user.js`)]}
      })
      .state('user.main', {
        url: '/user',
        template: '<user-main></user-main>'
      });
  }
]);

if (ON_TEST) {
  require('angular-mocks/angular-mocks');
}

angular.bootstrap(document, ['app']);
