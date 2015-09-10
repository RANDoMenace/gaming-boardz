angular.module('app').controller('gbGameListCtrl', function($scope, gbGame) {
  $scope.games = gbGame.query();

  $scope.sortOptions = [{value:"title", text:"Sort by Title"},
  {value: "played", text: "Sort by Date Played"}];

  $scope.sortOrder = $scope.sortOptions[0].value;
});
