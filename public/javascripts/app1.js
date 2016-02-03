var React = require("react"),
    ActivationContainer = React.createFactory(require("components/activation/activation"));

if (typeof window !== "undefined") {
    window.onload = function() {
        React.render(ActivationContainer(), document.getElementById("container"));
    };
}