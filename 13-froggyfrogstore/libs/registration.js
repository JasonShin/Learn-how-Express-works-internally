/**
 * Created by Shin on 29/10/2016.
 */
var User = require('../models/User');
var Application = require('../models/application');

var RegResult = function() {
    var result = {
        success: false,
        message: null,
        user: null
    };

    return result;
};

var validateInputs = function(app) {
    if(!app.email || !app.password) {
        app.setInvalid('Email and password are required');
    } else if(app.password !== app.confirm) {
        app.setInvalid('Passwords do not match');
    } else {
        app.validate();
    }
};

exports.applyForMembership = function(args) {
    var regResult = new RegResult();
    var app = new Application(args);

    //Do something interesting..
    //validate inputs
    validateInputs(app);
    //validate password and email
    //create a new user
    //hash the password
    //create a log entry
    if(app.isValid()) {
        regResult.success = true;
        regResult.message = 'Welcome';
        regResult.user = new User(args);
    }
    return regResult;
};