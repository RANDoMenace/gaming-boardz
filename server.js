var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
  return stylus(str).set('filename', path);
};

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(stylus.middleware(
{
  src: __dirname + '/public',
  compile: compile
}
));

app.use(express.static(__dirname+ '/public'));

//setup for db
if(env === 'development') {
  mongoose.connect('mongodb://localhost/gaming-boardz');
} else {
  mongoose.connect('mongodb://bgarza:bgarza@ds041613.mongolab.com:41613/gaming-boardz');
}//this is for moving between prod and dev when deployed to heroku
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
  console.log('gaming-boardz db opened');
});

//models for db setup

// var messageSchema = mongoose.Schema({message: String});
// var Message = mongoose.model('Message', messageSchema);
// var mongoMessage;
// Message.findOne().exec(function(err, messageDoc) {
//   mongoMessage = messageDoc.message;
// });

//calling partials from path
app.get('/partials/:partialPath', function(req, res) {
  res.render('partials/' + req.params.partialPath);
});

// instead of faulting back to root goto any index page
app.get('*', function(req, res) {
  res.render('index');
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port ' + port + '...');
