var React = require('react');
var ReactDOM = require('react-dom');
var Content = require('./components/activation/activation-registration.jsx');

module.exports = function (data) {
    var container = document.getElementById('content');
    ReactDOM.render(
        <Content {...data} />,
        container
    );

};
