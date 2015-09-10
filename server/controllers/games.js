var Game = require('mongoose').model('Game');

exports.getGames = function(req, res) {
  Game.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};
