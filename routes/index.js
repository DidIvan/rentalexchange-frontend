var express = require('express');
var router = express.Router();

require("node-jsx").install({
    harmony: true, 
    extension: ".jsx"
});

var React = require("react");

/* GET home page. */
var Container = React.createFactory(require("../public/javascripts/components/container"));
router.get('/', function(req, res) {
  var markup = React.renderToString(Container());

  res.render('index', { 
    title: 'Rental',
    markup: markup 
  });
});

/* GET activation page. */
var ContainerActivation = React.createFactory(require("../public/javascripts/components/containerActivation"));
router.get('/activation', function(req, res) {
    var markup = React.renderToString(ContainerActivation());

    res.render('index', {
        title: 'Rental',
        markup: markup
    });
});

module.exports = router;
