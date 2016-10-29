/**
 * Created by Shin on 29/10/2016.
 */
var should = require('should');
var Registration = require('../libs/registration');

describe('Registeration', function(){

    describe('a valid application', function() {

        var regResult = {};

        before(function() {
            regResult = Registration.applyForMembership({email: 'test@test.com', password: 'test', confirm: 'test'});
        });

        it('is successful', function() {
            regResult.success.should.equal(true);
        });

        it('user is created', function() {
            regResult.user.should.be.defined;
        });
        it('log is created');
        it('sets user status to approved');
    });

    describe('an empty or null email', function() {
        it('is not successful');
        it('tells user that email is required');
    });

    describe('an empty or null password', function() {
        it('is not successful');
        it('tells user that password is required');
    });

    describe('password and confirm match', function(){
        it('is not successful');
        it('tells user that password confirm does not match original password');
    });

    describe('email already exists', function() {
        it('is not successful');
        it('tells user that email already exists');
    });

});