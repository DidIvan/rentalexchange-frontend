var React = require("react"),
    Container = React.createFactory(require("components/container"));
    
if (typeof window !== "undefined") {
  window.onload = function() {
    React.render(Container(), document.getElementById("container"));
  };
}