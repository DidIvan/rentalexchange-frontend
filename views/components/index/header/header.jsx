var React = require("react"),
    Search = require("./search.jsx"),
    Auth = require("./auth.jsx"),
    authenticator = require('app/authenticator'),
    UserInfo = require('./userinfo.jsx');
var Header = React.createClass({
    getInitialState: function () {
        return {
            isLogined: authenticator.isAuthenticate
        }
    },
    getLogOut: function (event) {
        this.setState({isLogined: false});
  /*      authenticator.errorLoginFunction();*/
    },
    render: function () {
        console.log("3 "+ authenticator.isAuthenticate.valueOf());
        var chooseComponent;
        if (this.state.isLogined) {
            console.log("1 "+ this.state.isLogined.valueOf());
            chooseComponent =
                <div className="user right hide-on-med-and-down">
                    <img src="img/landingPage/Layer-12.png" alt="profile"
                         className="circle responsive-img valign profile-image"/>

                    <a className="btn-flat dropdown-button waves-effect waves-light white-text center-align" href="#"
                       data-activates="dropdown1">Name<i className="mdi-navigation-arrow-drop-down left"></i></a>

                    <ul id="dropdown1" className="dropdown-content">

                        <li><a href="#"><i className="mdi-action-face-unlock"></i> Profile</a></li>
                        <li><a href="#"><i className="mdi-action-settings"></i> Settings</a></li>
                        <li><a href="#"><i className="mdi-communication-live-help"></i> Help</a></li>
                        <li className="divider"></li>
                        <li><a href="#"><i className="mdi-action-lock-outline"></i> Lock</a></li>
                        <li><a href="#"><i className="mdi-hardware-keyboard-tab" onClick={this.getLogOut}></i>
                            Logout</a>
                        </li>

                    </ul>
                </div>;
        } else {
            chooseComponent = <Auth/>;
            console.log("2 "+this.state.isLogined.valueOf());
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
