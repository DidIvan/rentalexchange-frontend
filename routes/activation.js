var express = require('express');
var router = express.Router();

require("node-jsx").install({
    harmony: true, 
    extension: ".jsx"
});
var React = require("react");

router.get('/', function(req, res) {
    var ContainerActivationClass = require("../public/javascripts/components/containerActivation.jsx");
    var ContainerActivation = React.createFactory(ContainerActivationClass);
    var markup = React.renderToString(ContainerActivation({
        uuid: req.query['uuid'],
        url: 'http://localhost:9898/user/activation'
    }));
    res.render('index1', {
        title: 'Rental',
        markup: markup,
    });
});

module.exports = router;
