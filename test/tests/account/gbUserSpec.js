describe('gbUser', function() {
  beforeEach(module('app'));

  describe('isAdmin', function() {
    it('should return false if the role array does not have an admin entry', inject(function(gbUser) {
      var user = new gbUser();
      user.roles = ['not admin'];
      expect(user.isAdmin()).to.be.falsey;
    }));

    it('should return true if the roles array has an admin entry', inject(function(gbUser) {
      var user = new gbUser();
      user.roles = ['admin'];
      expect(user.isAdmin()).to.be.true;
    }))
  })
})
