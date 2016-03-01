/**
 * Created by opasichnyk on 2/29/2016.
 */
var React = require("react"),
    sender = require('app/request-sender'),
    LoginComponent = require('./login_comp'),
    UserInfo = require('./user_info');

var Container = React.createClass({
    getInitialState: function () {
        return {
            isLoginForm: true,
            userLogined: false,
            token: ""
        }
    },
    handleLogin: function (data) {
        console.log("fff");
        sender.POST('/user/login', data, this.successLoginFunction, this.errorLoginFunction);
    },
    successLoginFunction: function (data) {
        this.setState({userLogined: true});
        this.setState({token: sender.make_base_auth_token(data.userName, data.password)});
    },
    errorLoginFunction: function () {
        this.setState({userLogined: false});
        this.setState({token: ""});
    },
    handleLogout: function () {
        this.setState({userLogined: false});
        this.setState({token: ""});
    },
    render: function () {
        var webForm;
        if (this.state.userLogined) {
            webForm = <UserInfo handleLogout={this.handleLogout}/>
        } else {
            webForm = <LoginComponent handleLogin={this.handleLogin}/>
        }
        return (
            <div>
                {webForm}
            </div>
        );
    }
});

module.exports = Container;
