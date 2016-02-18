var React = require("react"),
    ActivationContainer = React.createFactory(require("../../views/components/confirmation/confirmation-registration"));

if (typeof window !== "undefined") {
    window.onload = function() {
        React.render(ActivationContainer(), document.getElementById("container"));
    };
}