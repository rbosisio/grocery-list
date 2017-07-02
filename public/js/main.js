angular.module('listhero', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {

		$routeProvider.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		});

		$routeProvider.when('/list/:id', {
			templateUrl: 'partials/list.html',
			controller: 'ListController'
		});
	});
