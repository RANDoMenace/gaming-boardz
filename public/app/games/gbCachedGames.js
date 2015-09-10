angular.module('app').factory('gbCachedGames', function(gbGame) {
  var gameList;

  return {
    query: function() {
      if(!gameList) {
        gameList = gbGame.query();
      }

      return gameList;
    }
  }
});
