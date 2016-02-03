var React = require("react"),
    Activation = require("./activation/activation");

var ContainerActivation = React.createClass({
    render() {
        return (
            <div>
                <Activation/>
            </div>
        );
    }
});

module.exports = ContainerActivation;