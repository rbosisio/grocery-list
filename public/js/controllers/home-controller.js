angular.module('listhero')
	.controller('HomeController', function($scope, $http, $location) {
		$http({
			method: "GET",
			url:'api/v1/list'
		}).then(function(body) {
			console.log(body.data);
			$scope.lists = body.data;
		}, function(erro) {
			console.log(erro);
		});

		$scope.newList = {
			author: "",
			title: "",
			items: []
		};

		$scope.goToList = function(id) { $location.path('/list/' + id); };

		$scope.addNewList = function() {
			$http({
				method: "POST",
				url:'api/v1/list',
				data: $scope.newList
			}).then(function(body) {
				console.log(body.data);
				var list = body.data;
				$location.path('/list/' + list._id);
			}, function(erro) {
				console.log(erro);
			});
		}
	});