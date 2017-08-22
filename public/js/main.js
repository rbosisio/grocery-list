angular.module('listhero', ['ngRoute', 'ngCookies'])
	.config(function($routeProvider, $locationProvider,  $httpProvider) {

		$routeProvider.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		});

		$routeProvider.when('/list/:id', {
			templateUrl: 'partials/list.html',
			controller: 'ListController'
		});
		
		$routeProvider.when('/login/', {
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		});
		
		$httpProvider.interceptors.push(function($q, $cookies, $location) {
      return {
      'request': function(config) {
          var token = $cookies.get("token")
          
          if (token)
            config.headers["x-access-token"] = token;
          
          return config
        },
    
        'responseError': function(response) {
          console.log(response);
          if (response.status == 403)
            $location.path('/login/');
          return response;
        }
      };
		});
	});
