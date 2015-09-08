angular.module('app').factory('gbIdentity', function() {
  return {
    currentUser: undefined,
    isAuthenticated: function() {
      return !!this.currentUser;
    }
  }
});
