/**
 * Created by Shin on 22/10/2016.
 */

var http = require('http');
var app = require('./app');


http.createServer(app.handleRequest).listen(8000);