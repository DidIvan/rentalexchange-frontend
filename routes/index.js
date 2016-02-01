var express = require('express');
var router = express.Router();

require("node-jsx").install({
    harmony: true, 
    extension: ".jsx"
});

var React = require("react"),
    Container = React.createFactory(require("../public/javascripts/components/container"));

/* GET home page. */
router.get('/', function(req, res) {
  var markup = React.renderToString(Container());

  res.render('index', { 
    title: 'Rental',
    markup: markup 
  });
});

module.exports = router;
