angular.module('app').controller('gbMainCtrl', function($scope, gbCachedGames) {
  $scope.games = gbCachedGames.query();
});
