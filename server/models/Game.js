var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
  title: {type:String, required:'{PATH} is required'},
  winner: {type:String, required:'{PATH} is required'},
  featured: {type:Boolean, required:'{PATH} is required'},
  played: {type:Date, required:'{PATH} is required'},
  tags: [String]
});
var Game = mongoose.model('Game', gameSchema);

function createDefaultGames() {
  Game.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
    Game.create({title: 'Monopoly', winner: 'Bryan Garza', featured: false, played: new Date('10/5/2014'), tags: ['Monopoly']}),
    Game.create({title: 'Life', winner: 'Bryan Garza', featured: false, played: new Date('11/5/2014'), tags: ['Life']}),
    Game.create({title: 'Chess', winner: 'Bryan Garza', featured: false, played: new Date('12/5/2015'), tags: ['Chess']}),
    Game.create({title: 'Sorry', winner: 'Bryan Garza', featured: false, played: new Date('1/5/2015'), tags: ['Sorry']}),
    Game.create({title: 'Scrabble', winner: 'Bryan Garza', featured: false, played: new Date('2/5/2015'), tags: ['Scrabble']}),
    Game.create({title: 'Checkers', winner: 'Bryan Garza', featured: true, played: new Date('3/5/2015'), tags: ['Checkers']}),
    Game.create({title: 'Operation', winner: 'Bryan Garza', featured: true, played: new Date('6/5/2015'), tags: ['Operation']}),
    Game.create({title: 'Monopoly', winner: 'Bryan Garza', featured: true, played: new Date('7/5/2015'), tags: ['Monopoly']}),
    Game.create({title: 'Go', winner: 'Bryan Garza', featured: true, played: new Date('8/17/2015'), tags: ['Go']}),
    Game.create({title: 'Checkers', winner: 'Bryan Garza', featured: true, played: new Date('9/5/2015'), tags: ['Checkers']}),
    Game.create({title: 'Monopoly', winner: 'Bryan Garza', featured: true, played: new Date('9/9/2015'), tags: ['Monopoly']}),
    Game.create({title: 'Chess', winner: 'Jade Cho', featured: false, played: new Date('9/10/2015'), tags: ['Chess']})
    }
  })
}

exports.createDefaultGames = createDefaultGames;

