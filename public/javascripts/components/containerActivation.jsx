var React = require("react"),
    Activation = require("./activation/activation");

var ContainerActivation = React.createClass({
    render: function () {

        return (
            <div>
                <Activation url="http://localhost:9898/user/activation" uuid={this.props.uuid}/>
            </div>
        );
    }
});

module.exports = ContainerActivation;