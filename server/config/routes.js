

module.exports = function(app) {
  //calling partials from path
  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
  });

  // instead of faulting back to root goto any index page
  app.get('*', function(req, res) {
    res.render('index');
  });
}
