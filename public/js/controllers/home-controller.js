angular.module('listhero')
	.controller('HomeController', function($scope, $http, $location, $cookies, $rootScope) {
    $rootScope.menuActivated = 'Home';
	});