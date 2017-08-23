angular.module('listhero')
	.controller('ListController', function($scope, $http, $routeParams, $location, $rootScope) {
		$http({
			method: "GET",
			url:'api/v1/list/' + $routeParams.id
		}).then(function(body) {
			$scope.list = body.data;
		}, function(erro) {
			console.log(erro);
		});
		$scope.backToHome = function() { $location.path('/'); };
		$rootScope.menuActivated = 'Lists';
		
		$scope.remove = function() {
			$http({
				method: "DELETE",
				url:'api/v1/list/' + $scope.list._id
			}).then(function(body) {
				$location.path( "/" );
			}, function(erro) {
				console.log(erro);
			});
		};

		$scope.addItem = function() {
			$scope.list.items.push($scope.newItem);
			update();
		};

		$scope.removeItem = function(removedItem) {
			var items = $scope.list.items;
			$scope.list.items = items.filter(function(item) {
				return item != removedItem;
			})
			update();
		};

		function update() {
			$http({
				method: "PUT",
				url:'api/v1/list/' + $scope.list._id,
				data: $scope.list
			}).then(function(body) {
				$scope.list = body.data;
				$scope.newItem = "";
			}, function(erro) {
				console.log(erro);
			});
		};
	});