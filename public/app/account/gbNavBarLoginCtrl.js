angular.module('app').controller('gbNavBarLoginCtrl', function($scope, $http, gbIdentity, gbNotifier, gbAuth, $location) {
  $scope.identity = gbIdentity;
  $scope.signin = function(username, password) {
    gbAuth.authenticateUser(username, password).then(function(success) {
      if(success) {
        gbNotifier.notify('You have successfully signed in!');
      } else {
        gbNotifier.notify('Username/Password combination incorrect!');
      }
    });
  }

  $scope.signout = function() {
    gbAuth.logoutUser().then(function() {
      $scope.username = "";
      $scope.password = "";
      gbNotifier.notify('You have successfully signed out!');
      $location.path('/');
    })
  }
});
