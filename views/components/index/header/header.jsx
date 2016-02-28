var React = require("react"),
    Search = require("./search.jsx"),
    Auth = require("./auth.jsx"),
    authenticator = require('app/authenticator'),
    UserInfo = require('./userinfo.jsx');
var Header = React.createClass({
    render: function () {
        var chooseComponent;
        if (authenticator.login) {
            console.log("true");
            chooseComponent = <UserInfo/>;
        } else {
            chooseComponent = <Auth/>;
            console.log("false");
        }
        return (
            <div className="nav z-depth-2">
                <div className="logo-center left col s12 valign-wrapper">
                    <a href="#" className="brand-logo"><img src="img/landingPage/logo.png" className="valign"
                                                            alt="logo"/></a>
                </div>
                <Search/>
                {chooseComponent}
            </div>
        )
    }
});

module.exports = Header;
