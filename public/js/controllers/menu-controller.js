angular.module('listhero')
.controller('MenuController', ['$scope', '$cookies', '$location', function($scope, $cookies, $location) {
  $scope.userLoged = $cookies.get('token')? true: false;
  $scope.user_login = $cookies.get('user_login');
  
  $scope.logout = function(){
    $cookies.remove('token');
    $cookies.remove('user_id');
    $cookies.remove('user_login');
  }
}])
.directive('menuHero', function() {
  return {
    templateUrl: 'partials/menu.html'
  };
});