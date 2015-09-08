angular.module('app')
.controller('gbUserListCtrl', ['$scope', 'gbUser', function($scope, gbUser) {
  $scope.users = gbUser.query();
}]);
