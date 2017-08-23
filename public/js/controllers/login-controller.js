angular.module('listhero')
	.controller('LoginController', function($scope, $http, $location, $cookies, $rootScope) {
	  $rootScope.menuActivated = 'Login';

    $scope.credentials = {
      login: "",
      password: ""
    }
    
    $scope.error = "";

		$scope.login = function() {
			$http({
				method: "POST",
				url:'api/v1/auth',
				data: $scope.credentials
			}).then(function(body) {
				var response = body.data;
				console.log(response);
				if (response.success){
				  $cookies.put("token", response.token);
				  $cookies.put("user_login", response.user.login);
				  $cookies.put("user_id", response.user._id);
				  $location.path('/');
				} else {
			    $scope.error = response.message;
				}
			}, function(erro) {
			  $scope.error = erro.data.message;
			});
		}
	});