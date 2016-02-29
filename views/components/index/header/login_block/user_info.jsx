/**
 * Created by opasichnyk on 2/29/2016.
 */
var React = require("react");
var UserInfo = React.createClass({

/*    handleLogout: this.props.handleLogout(),*/

    render: function () {
        return (
            <div className="user right hide-on-med-and-down">
                <img src="img/store/test-ava.png" alt="profile"
                     className="circle responsive-img valign profile-image"/>
                <a className="btn-flat dropdown-button waves-effect waves-light white-text center-align" href="#"
                   data-activates="dropdown1">Name<i className="mdi-navigation-arrow-drop-down left"></i></a>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#"><i className="mdi-action-face-unlock"></i>Профайл</a></li>
                    <li><a href="#"><i className="mdi-action-settings"></i>Настройки</a></li>
                    <li><a href="#"><i className="mdi-communication-live-help"></i>Помощь</a></li>
                    <li className="divider"></li>
                    <li><a href="#"><i className="mdi-hardware-keyboard-tab" onClick={this.props.handleLogout}></i>
                        Выйти</a>
                    </li>
                </ul>
            </div>
        );
    }
});
module.exports = UserInfo;