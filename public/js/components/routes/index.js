var express = require('express');
var router = express.Router();

require("node-jsx").install({
    harmony: true,
    extension: ".jsx"
});

var React = require("react"),
    App = React.createFactory(require("../container"));

/* GET home page. */
router.get('/activation', function(req, res) {
    var markup = React.renderToString(Container());

    res.render('index', {
        title: 'Express',
        markup: markup
    });
});

module.exports = router;