/**
 * Created by opasichnyk on 11/21/2015.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');
var log = require('./libs/log')(module);
var React = require('react');
var app = express();

console.log(config.get('port'));

app.set('port', config.get('port'));

app.use('/', express.static(path.join(__dirname, 'public')));

var ActivComp = require('./public/js/components/activation.js');

app.use(function(req, res) {
    var uuid = req.query['uuid'];
    console.log(uuid);

    res.setHeader('Content-Type', 'text/html');
    res.end(React.renderToStaticMarkup(
        React.DOM.body(
            null,
            React.DOM.div({
                id: 'ner',
                dangerouslySetInnerHTML: {
                    __html: React.renderToString(React.createElement(ActivComp, {
                        uuid: uuid
                    }))
                }
            }),
            React.DOM.script({
                'id': 'initial-data',
                'type': 'text/jsx'
            }),
            React.DOM.script({
                //src: 'http://fb.me/react-0.12.2.js',
                //src: 'http://fb.me/JSXTransformer-0.12.2.js',
                //src: 'https://code.jquery.com/jquery-2.1.1.min.js',
                //src: '../js/init.js',
                //src: '../../../bin/materialize.js'

            })
        )
    ));
});

http.createServer(app).listen(config.get('port'), function() {
    log.info('Express server listening on port ' + config.get('port'));
});