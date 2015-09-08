var auth = require('./auth');

module.exports = function(app) {
  //calling partials from path
  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

  // instead of faulting back to root goto any index page
  app.get('*', function(req, res) {
    res.render('index');
  });
}
