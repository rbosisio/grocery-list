angular.module('listhero', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {

		$routeProvider.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		});
	});