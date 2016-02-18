var React = require("react"),
    Container = React.createFactory(require("../../views/components/index/container"));
    
if (typeof window !== "undefined") {
  window.onload = function() {
    React.render(Container(), document.getElementById("container"));
  };
}