angular.module('app').controller('gbGameDetailsCtrl', function($scope, gbGame, $routeParams) {
  $scope.game = gbGame.get({_id:$routeParams.id})
})
