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

    createUser: function(newUserData) {
      var newUser = new gbUser(newUserData);
      var dfd = $q.defer();

      newUser.$save().then(function() {
        gbIdentity.currentUser = newUser;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },

    updateCurrentUser: function(newUserData) {
      var dfd = $q.defer();

      var clone = angular.copy(gbIdentity.currentUser);
      angular.extend(clone, newUserData);
      clone.$update().then(function() {
        gbIdentity.currentUser = clone;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
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
    },

    authorizeAuthenticatedUserForRoute: function() {
      if(gbIdentity.isAuthenticated()) {
        return true;
      } else {
        return $q.reject('not authorized');
      }
    }
  }
});
