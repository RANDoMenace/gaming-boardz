angular.module('app').controller('gbGameListCtrl', function($scope, gbCachedGames) {
  $scope.games = gbCachedGames.query();

  $scope.sortOptions = [{value:"title", text:"Sort by Title"},
  {value: "played", text: "Sort by Date Played"}];

  $scope.sortOrder = $scope.sortOptions[0].value;
});
