angular.module('app').factory('gbIdentity', function($window, gbUser) {
  var currentUser;
  if(!!$window.bootstrappedUserObject) {
    currentUser = new gbUser();
    angular.extend(currentUser, $window.bootstrappedUserObject);
  }
  return {
    currentUser: currentUser,
    isAuthenticated: function() {
      return !!this.currentUser;
    }
  }
});
