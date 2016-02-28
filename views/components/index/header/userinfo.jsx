var React = require("react");

var UserInfo = React.createClass({
    render: function () {
        return (
            <div className="user right hide-on-med-and-down">
                <img src="img/landingPage/Layer-12.png" alt="profile" className="circle responsive-img valign profile-image"/>

                <a className="btn-flat dropdown-button waves-effect waves-light white-text center-align" href="#"
                   data-activates="dropdown1">Name<i className="mdi-navigation-arrow-drop-down right"></i></a>

                <ul id="dropdown1" className="dropdown-content">

                    <li><a href="#"><i className="mdi-action-face-unlock"></i> Profile</a></li>
                    <li><a href="#"><i className="mdi-action-settings"></i> Settings</a></li>
                    <li><a href="#"><i className="mdi-communication-live-help"></i> Help</a></li>
                    <li className="divider"></li>
                    <li><a href="#"><i className="mdi-action-lock-outline"></i> Lock</a></li>
                    <li><a href="#"><i className="mdi-hardware-keyboard-tab"></i> Logout</a></li>

                </ul>
            </div>

        )
    }
});
module.exports = UserInfo;