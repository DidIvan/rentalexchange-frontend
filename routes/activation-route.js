var express = require('express');
var reactViews = require('express-react-views');

require("node-jsx").install({
    harmony: true, 
    extension: ".jsx"
});
var React = require("react");

router.get('/', function(req, res) {
    var ContainerActivationClass = require("./activation/activation.jsx");
    var ContainerActivation = React.createFactory(ContainerActivationClass);
    var inputData = {
        uuid: req.query['uuid'],
        url: 'http://localhost:9898/user/activation###'
    }
    var markup = React.renderToString(ContainerActivation(inputData));
    res.render('index-req-conf', {
        title: 'Rental',
        markup: markup
    });
});

module.exports = router;