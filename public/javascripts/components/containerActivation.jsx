var React = require("react"),
    Activation = require("./activation/activation");

var ContainerActivation = React.createClass({

    render: function () {
        console.log("#########"+this.props.uuid);
        return (
            <div>
                <Activation url="http://demo8099007.mockable.io/activation" uuid={this.props.uuid}/>
            </div>
        );
    }
});

module.exports = ContainerActivation;