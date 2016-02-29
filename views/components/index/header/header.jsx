var React = require("react"),
    Search = require("./search.jsx"),
    ContainerLogin=require('./login_block/container.jsx');
var Header = React.createClass({
    render: function () {

        return (
            <div className="nav z-depth-2">
                <div className="logo-center left col s12 valign-wrapper">
                    <a href="#" className="brand-logo"><img src="img/landingPage/logo.png" className="valign"
                                                            alt="logo"/></a>
                </div>
                <Search/>
                <ContainerLogin/>
            </div>
        )
    }
});

module.exports = Header;
