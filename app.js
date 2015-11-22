/**
 * Created by opasichnyk on 11/21/2015.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(3000, function() {
    console.log('Express server listening on port' + 3000);
});