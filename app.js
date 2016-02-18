var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var React = require("react");
var reactViews = require('express-react-views');
var app = express();
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    var initialState = {
        uuidForRequest: "88",
        urlForRequest: "http://localhost:8002/user/activation"
    };
    res.render('Html-index', { data: initialState });
});

app.get('/user-registration-confirm', function (req, res) {
    const uuid_r= req.query['uuid']
    var initialState = {
        uuidForRequest: uuid_r,
        urlForRequest: "http://localhost:8002/user/activation"
    };
    res.render('Html-confirm-registration', { data: initialState });
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
