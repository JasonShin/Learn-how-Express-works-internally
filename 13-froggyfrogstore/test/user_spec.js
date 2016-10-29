/**
 * Created by Shin on 29/10/2016.
 */
var should = require('should');
var User = require('../models/User');

describe('User', function() {
   describe('Default', function() {
       var user = {};
       before(function() {
            user = new User({name: 'Jason', email: 'test@test.com'});
       });

       it('email is test@test.com', function() {
           user.email.should.equal('test@test.com');
       });

       it('has an authentication token', function() {
           user.authenticationToken.should.be.defined;
       });

       it('status is pending', function() {
           user.status.should.equal('pending');
       });

       it('has a created date', function() {
           user.createdAt.should.be.defined;
       });

   });
});