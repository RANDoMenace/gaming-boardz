angular.module('app').controller('gbProfileCtrl', function($scope, gbAuth, gbIdentity, gbNotifier) {
  $scope.email = gbIdentity.currentUser.username;
  $scope.fname = gbIdentity.currentUser.firstName;
  $scope.lname = gbIdentity.currentUser.lastName;

  $scope.update = function() {
    var newUserData = {
      username: $scope.email,
      firstName: $scope.fname,
      lastName: $scope.lname
    }
    if($scope.password && $scope.password.length > 0) {
      newUserData.password = $scope.password;
    }

    gbAuth.updateCurrentUser(newUserData).then(function() {
      gbNotifier.notify('Your user account has been updated');
    }, function(reason) {
      gbNotifier.error(reason);
    })
  }
})
