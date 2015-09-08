angular.module('app').factory('gbAuth', function($http, gbIdentity, $q, gbUser) {
  return {
    authenticateUser: function(username, password) {
      var dfd = $q.defer();
      $http.post('/login', {username:username, password:password}).then(function(response) {
        if(response.data.success) {
          var user = new gbUser();
          angular.extend(user, response.data.user);
          gbIdentity.currentUser = user;
          dfd.resolve(true);
        } else {
          dfd.resolve(false);
        }
      });
      return dfd.promise;
    },
    logoutUser: function() {
      var dfd = $q.defer();
      $http.post('/logout', {logout:true}).then(function() {
        gbIdentity.currentUser = undefined;
        dfd.resolve();
      });
      return dfd.promise;
    },
    authorizeCurrentUserForRoute: function(role) {
      if(gbIdentity.isAuthorized(role)) {
            return true;
          } else {
            return $q.reject('not authorized');
          }
    }
  }
})
