var React = require("react"),
    Search = require("./search"),
    Auth = require("./auth");
var Header = React.createClass({
    render: function () {
        return (
            <div className="nav z-depth-2">
                <div className="logo-center left col s12 valign-wrapper">
                    <a href="#" className="brand-logo"><img src="../public/img/logo.png" className="valign" alt="logo"/></a>
                </div>
                <Search/>
                <Auth url="http://univerpulse.noip.me:8002/user/registration"/>
            </div>
        )
    }
});

module.exports = Header;
