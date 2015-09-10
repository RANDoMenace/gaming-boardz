var mongoose = require('mongoose'),
  encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  firstName: {type:String, require: '(PATH) is required'},
  lastName: {type:String, require: '(PATH) is required'},
  username: {
    type: String,
    required: '(PATH) is required',
    unique: true
  },
  salt: {type:String, require: '(PATH) is required'},
  hashed_pwd: {type:String, require: '(PATH) is required'},
  roles: [String]
});
userSchema.methods = {
  authenticate: function(passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  },
  hasRole: function(role) {
    return this.roles.indexOf(role) > -1;
  }
};
var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
  User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'joeb');
      User.create({firstName: 'Joe',lastName: 'Blow',username: 'joeb', salt: salt, hashed_pwd: hash, roles: ['admin']});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'jton');
      User.create({firstName: 'John',lastName: 'Aton',username: 'jton', salt: salt, hashed_pwd: hash, roles: []});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'keif');
      User.create({firstName: 'Jack',lastName: 'Bauer',username: 'keif', salt: salt, hashed_pwd: hash});
    }
  })
};

exports.createDefaultUsers = createDefaultUsers;
