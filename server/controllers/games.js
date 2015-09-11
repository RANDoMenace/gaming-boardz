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
};

exports.createGame = function(req, res) {

  // var echo = req.body
  // res.json(echo);

  Game.create({
    title:    req.body.title,
    winner:   req.body.winner,
    featured: req.body.featured,
    played:   Date.parse(req.body.date),
    tags:     req.body.tags.split(',')
  }, function(err, game) {
    if (err) res.send(err);

    res.json({status: 'success', data: game});
  });
};
