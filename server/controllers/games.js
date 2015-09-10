var Game = require('mongoose').model('Game');

exports.getGames = function(req, res) {
  Game.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};

exports.getGameById = function(req, res) {
  Game.findOne({_id:req.params.id}).exec(function(err, game) {
    res.send(game);
  })
}
