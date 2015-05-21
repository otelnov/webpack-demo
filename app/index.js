var ngModule = angular.module('app', ['ui.router']);

ngModule.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('main', {
				url: '/',
				template: '<h1>Hello Valor</h1>' +
				'<p><a ui-sref="news.main">news</a></p>' +
				'<p><a ui-sref="user.main">user</a></p>'
			})
			.state('news', {
				abstract: true,
				template: '<ui-view></ui-view>'
			})
			.state('news.main', {
				url: '/news',
				templateUrl: './components/news/news.html',
				controller: 'NewsCtrl',
				controllerAs: 'vm'
			})

			.state('user', {
				abstract: true,
				template: '<ui-view></ui-view>'
			})
			.state('user.main', {
				url: '/user',
				templateUrl: './components/user/user.html',
				controller: 'UserCtrl',
				controllerAs: 'vm'
			});
	}
]);
