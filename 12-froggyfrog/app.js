/**
 * Created by Shin on 29/10/2016.
 */
var utility = require('./libs/utility');

console.log('Hi from app.js');


//Name STARTS
var user = require('./libs/user/user');
var otherUser = require('./libs/user/user');

console.log(user.getName());
console.log(otherUser.getName());

user.setName('Jason');

console.log(otherUser.getName());