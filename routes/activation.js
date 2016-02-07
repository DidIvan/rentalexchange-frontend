var express = require('express');
var router = express.Router();

require("node-jsx").install({
    harmony: true, 
    extension: ".jsx"
});
var React = require("react");

//var ContainerActivationClass = require("../public/javascripts/components/containerActivation");

router.get('/', function(req, res) {
    var uuid = req.query['uuid'];

    var ContainerActivation = React.createFactory(require("../public/javascripts/components/containerActivation"));
    console.log(uuid);
    var markup = React.renderToString(ContainerActivation({uuid: uuid}));
    res.render('index1', {
        title: 'Rental',
        markup: markup
    });
});

module.exports = router;
