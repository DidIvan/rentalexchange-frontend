/**
 * Created by opasichnyk on 11/21/2015.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');
var log = require('./libs/log')(module);
var app = express();

console.log(config.get('port'));

app.set('port', config.get('port'));

app.use('/', express.static(path.join(__dirname, 'build')));

app.use('/activation_2', express.static(path.join(__dirname, 'public/activation_2')));

http.createServer(app).listen(config.get('port'), function() {
    log.info('Express server listening on port ' + config.get('port'));
});