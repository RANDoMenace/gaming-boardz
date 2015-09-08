angular.module('app').controller('gbSignupCtrl', function($scope, gbUser, gbNotifier, $location, gbAuth) {

  $scope.signup = function() {
    var newUserData = {
      username: $scope.email,
      password: $scope.password,
      firstName: $scope.fname,
      lastName: $scope.lname
    };

    gbAuth.createUser(newUserData).then(function() {
      gbNotifier.notify('User account created!');
      $location.path('/');
    }, function(reason) {
      gbNotifier.error(reason);
    })
  }
})
