angular.module('listhero')
	.controller('HomeController', function($scope, $http) {
		$http({
			method: "GET",
			url:'api/v1/list'
		}).then(function(body) {
			console.log(body.data);
			$scope.lists = body.data;
		}, function(erro) {
			console.log(erro);
		});
	});