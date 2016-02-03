var React = require("react"),
    Activation = require("./activation/activation");

var ContainerActivation = React.createClass({
    render() {
        return (
            <div>
                <Activation url="http://demo8099007.mockable.io/activation"/>
            </div>
        );
    }
});

module.exports = ContainerActivation;