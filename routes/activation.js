var express = require('express');
var router = express.Router();

require("node-jsx").install({
    harmony: true, 
    extension: ".jsx"
});

var React = require("react");

/* GET activation page. */
var ContainerActivation = React.createFactory(require("../public/javascripts/components/containerActivation"));

router.get('/', function(req, res) {
    var markup = React.renderToString(ContainerActivation());
    res.render('index1', {
        title: 'Rental',
        markup: markup
    });
});

module.exports = router;
