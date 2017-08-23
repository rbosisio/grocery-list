angular.module('listhero')
	.controller('UserController', function($scope, $http, $cookies, $location, $rootScope) {
	  $rootScope.menuActivated = 'Users';
	  
		$http({
			method: "GET",
			url:'api/v1/user/' + $cookies.get('user_id')
		}).then(function(body) {
			$scope.user = body.data;
			$http({
  			method: "GET",
  			url:'api/v1/list'
  		  }).then(function(body) {
  			  $scope.lists = body.data;
  		  }, function(erro) {
  		  	console.log(erro);
  	  	});
		}, function(erro) {
			console.log(erro);
		  $location.path("/login");
		});
		
		$http({
			method: "GET",
			url:'api/v1/user/'
		}).then(function(body) {
		  $scope.users = body.data;
		}, function(erro) {
			console.log(erro);
		  $location.path("/login");
		});
		

		$scope.backToHome = function() { $location.path('/'); };
		$scope.goToList = function(id) { $location.path('/list/' + id); };
		
		$scope.remove = function(user_id) {
			$http({
				method: "DELETE",
				url:'api/v1/user/' + user_id
			}).then(function(body) {
				$location.path("/user");
			}, function(erro) {
				console.log(erro);
			});
		};

		$scope.addUser = function() {
			$http({
  			method: "POST",
  			url:'api/v1/user/',
  			data: $scope.newUser
  		}).then(function(body) {
  			console.log(body.data);
  			var user = body.data;
  			$scope.users.push(user)
  		}, function(erro) {
  			console.log(erro);
  		  $location.path("/login");
  		});
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