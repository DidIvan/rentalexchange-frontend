var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var React = require("react");
var reactViews = require('express-react-views');
var config = require('./config');

var app = express();
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const BACKEND_HOST = config.get('backendHost');

app.get('/', function (req, res) {
    var initialState = {
        urlBackEnd: BACKEND_HOST
    };
    res.render('Html-index', {data: initialState});
});
//middleware registration-confirm
app.get('/user-registration-confirm', function (req, res) {
    const uuid = req.query['uuid'];
    var initialState = {
        uuidForRequest: uuid,
        urlBackEnd: (BACKEND_HOST + "/user/registration-confirm")
    };
    res.render('Html-confirm-registration', {data: initialState});
});
//middleware change-password-confirm
app.get('/user-change-password-confirm', function (req, res) {
    const uuid = req.query['uuid'];
    var initialState = {
        uuidForRequest: uuid,
        urlBackEnd: (BACKEND_HOST + "/user/change-password-confirm")
    };
    res.render('Html-confirm-registration', {data: initialState});
});

app.get('/error', function (req, res) {
    var initialState = {
        urlBackEnd: BACKEND_HOST
    };
    res.render('Error', {data: initialState});
});

//���������� ������
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
