var express = require('express');
var router = express.Router();
var React = require("react");

/* GET home page. */
/*
var Container = React.createFactory(require("./container"));
router.get('/', function(req, res) {
  var markup = React.renderToString(Container());

  res.render('index', {
    title: 'Rental',
    markup: markup 
  });
});
*/

router.get('/', function (req, res) {
    var initialState = {
        uuidForRequest: "88",
        urlForRequest: "http://localhost:8002/user/activation"
    };
    res.render('Html-index', { data: initialState });
});

module.exports = router;
