/**
 * Created by Shin on 29/10/2016.
 */
var assert = require('assert');
var utility = require('../libs/utility');

var User = function(args) {
    assert.ok(args.email, 'Email is a required field');
    var user = {};

    user.email = args.email;
    user.createdAt = args.createdAt || new Date();
    user.status = args.status || 'pending';
    user.signInCount = args.signInCount || 0;
    user.lastLoginAt = args.lastLoginAt || new Date();
    user.currentLoginAt = args.currentLoginAt || new Date();
    user.currentSessionToken = args.currentSessionToken || null;
    user.reminderSentAt = args.reminderSentAt || null;
    user.reminderToken = args.reminderToken || null;
    user.authenticationToken = utility.randomString(2);

    return user;
};

module.exports = User;