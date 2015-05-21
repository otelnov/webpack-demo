let angular = require('angular');
require('angular-ui-router');
require('oclazyload');

var ngModule = angular.module('app', ['ui.router', 'oc.lazyLoad']);

ngModule.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        template: `<h1>Hello Valor</h1>
				<p><a ui-sref="news.main">news</a></p>
				<p><a ui-sref="user.main">user</a></p>`
      })
      .state('news', {
        abstract: true,
        template: '<ui-view></ui-view>',
        resolve: ['$ocLazyLoad', $ocLazyLoad=>$ocLazyLoad.load('./news.js')]
      })
      .state('news.main', {
        url: '/news',
        template: require('./components/news/news.html'),
        controller: 'NewsCtrl',
        controllerAs: 'vm'
      })

      .state('user', {
        abstract: true,
        template: '<ui-view></ui-view>',
        resolve: ['$ocLazyLoad', $ocLazyLoad=>$ocLazyLoad.load('./user.js')]
      })
      .state('user.main', {
        url: '/user',
        template: require('./components/user/user.html'),
        controller: 'UserCtrl',
        controllerAs: 'vm'
      });
  }
]);
