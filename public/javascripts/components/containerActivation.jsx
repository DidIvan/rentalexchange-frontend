var React = require("react"),
    Activation = require("./activation/activation");

var ContainerActivation = React.createClass({
    render: function () {
        var url1 = this.props.url;
        var uuid1 = this.props.uuid;
        console.log("*** From ContainerActivation ***  "+uuid1);
        console.log("*** From ContainerActivation ***  "+url1);
        return (
            <div>
                <Activation url1={url1} uuid1={uuid1}/>
            </div>
        );
    }
});

module.exports = ContainerActivation;
