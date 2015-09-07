var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/gaming-boardz',
    rootPath: rootPath,
    port: process.env.PORT || 3000
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://bgarza:bgarza@ds041613.mongolab.com:41613/gaming-boardz',
    port: process.env.PORT || 80
  }
}
