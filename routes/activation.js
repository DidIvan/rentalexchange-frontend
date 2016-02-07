var express = require('express');
var router = express.Router();

require("node-jsx").install({
    harmony: true, 
    extension: ".jsx"
});
var React = require("react");

router.get('/', function(req, res) {
    var ContainerActivation = React.createFactory(require("../public/javascripts/components/activation/activation.jsx"));
    var markup = React.renderToString(ContainerActivation({
        uuid: req.query['uuid'],
        url: 'http://localhost:9898/user/activation'
    }));
    res.render('index1', {
        title: 'Rental',
        markup: markup
    });
});

module.exports = router;
