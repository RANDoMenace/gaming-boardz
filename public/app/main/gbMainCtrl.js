angular.module('app').controller('gbMainCtrl', function($scope) {
  $scope.players = [
    {gamertag: 'RANDoMenace', console: 'XBOXOne', featured: true},
    {gamertag: 'Quik IT', console: 'XBOXOne', featured: false}
  ]
});
