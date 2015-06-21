let ngModule = angular.module('app', ['ui.router', 'oc.lazyLoad']);

ngModule.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        template: require('./components/main.html')
      })
      .state('news', {
        abstract: true,
        template: '<ui-view></ui-view>',
        resolve: {lazy: ['$ocLazyLoad', $ocLazyLoad => $ocLazyLoad.load('./news.js')]}
      })
      .state('news.main', {
        url: '/news',
        template: '<news-main></news-main>'
      })

      .state('user', {
        abstract: true,
        template: '<ui-view></ui-view>',
        resolve: {lazy: ['$ocLazyLoad', $ocLazyLoad => $ocLazyLoad.load('./user.js')]}
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
