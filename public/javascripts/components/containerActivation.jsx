var React = require("react"),
    Activation = require("./activation/activation");

var ContainerActivation = React.createClass({
    render: function () {
        console.log("*** From ContainerActivation url: ***  "+this.props.url);
        console.log("*** From ContainerActivation uuid: ***  "+this.props.uuid);
        return (
            <div>
                <Activation url1={this.props.url} uuid1={this.props.uuid}/>
            </div>
        );
    }
});

module.exports = ContainerActivation;
