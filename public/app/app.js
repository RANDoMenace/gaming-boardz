angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
  var routeRoleChecks =  {
    admin: {auth: function(gbAuth) {
      return gbAuth.authorizeCurrentUserForRoute('admin')
    }},
    user: {auth: function(gbAuth) {
      return gbAuth.authorizeAuthenticatedUserForRoute()
    }}
  }

  $locationProvider.html5Mode({enabled: true, requireBase: false});
  $routeProvider
    .when('/', { templateUrl: '/partials/main/main', controller: 'gbMainCtrl'})
    .when('/admin/users', { templateUrl: '/partials/admin/user-list',
      controller: 'gbUserListCtrl', resolve: routeRoleChecks.admin
    })
    .when('/signup', { templateUrl: '/partials/account/signup',
      controller: 'gbSignupCtrl'
    })

    .when('/profile', { templateUrl: '/partials/account/profile',
      controller: 'gbProfileCtrl', resolve: routeRoleChecks.user
    })
    .when('/games', { templateUrl: '/partials/games/game-list',
      controller: 'gbGameListCtrl'
    })
});

angular.module('app').run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  })
})
