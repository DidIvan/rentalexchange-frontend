/**
 * Created by opasichnyk on 2/29/2016.
 */
var React = require("react");
var UserInfo = React.createClass({


    render: function () {
        return (
            <div className="user right hide-on-med-and-down">
                <img src="img/landingPage/Layer-12.png" alt="profile"
                     className="circle responsive-img valign profile-image"/>

                <a className="btn-flat waves-effect waves-light white-text center-align" href="#" onClick={this.props.handleLogout}>Log out</a>

            </div>
        );
    }
});
module.exports = UserInfo;