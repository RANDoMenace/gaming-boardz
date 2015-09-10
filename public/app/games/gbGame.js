angular.module('app').factory('gbGame', function($resource) {
  var GameResource = $resource('/api/games/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return GameResource;
});
