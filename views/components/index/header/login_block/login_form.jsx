/**
 * Created by opasichnyk on 2/29/2016.
 */
var React = require("react"),
    ForgotPasswordForm = require("./forgot_password_form.jsx");

var LoginForm = React.createClass({
    getInitialState: function () {
        return {
            userName: '',
            password: '',
            uiMessage: '',
            isForgotForm: false
        }
    },
    handleSubmit: function (event) {
        event.preventDefault();
        if (this.state.userName == '' || this.state.password == '') {
            this.setState({uiMessage: "Все поля должны быть заполнены!"})
            return;
        }
        var data = {
            'email': this.state.userName.trim(),
            'password': this.state.password.trim()
        }
        console.log("beiveru");
        this.props.handleLogin(data);
    },
    handleLoginChange: function (event) {
        this.setState({userName: event.target.value});
        this.setState({uiMessage: ""});
    },
    handlePasswordChange: function (event) {
        this.setState({password: event.target.value});
        this.setState({uiMessage: ""});
    },
    switchModalForgotPassword: function (event) {
        this.setState({isForgotForm: !this.state.isForgotForm});
    },
    render: function () {
        var webForm;
        if (this.state.isForgotForm) {
            webForm = <ForgotPasswordForm/>
        } else {
            webForm =
                <form claassName="login-form" onSubmit={this.handleSubmit}>
                    <div className="row center">
                        <h5>Вход в rentalexchange</h5>
                    </div>

                    <div className="row margin">
                        <div className="input-field col s12">
                            <i className="mdi-communication-email prefix"></i>
                            <input value={this.state.userName} id="email" type="email"
                                   onChange={this.handleLoginChange}/>
                            <label for="email" className="center-align">Email</label>
                        </div>
                    </div>

                    <div className="row margin">
                        <div className="input-field col s12">
                            <i className="mdi-action-lock-outline prefix"></i>
                            <input value={this.state.password} id="icon_password" type="password" className="validate"
                                   onChange={this.handlePasswordChange}/>
                            <label for="icon_password">Password</label>
                        </div>
                        
                    </div>

                    <div className="row"><p className="red-text">{this.state.uiMessage}</p></div>

                    <div className="row margin">
                        <img src="img/landingPage/captcha.jpg" alt="captcha"/>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <button className="btn waves-effect waves-light col s12" type="submit" name="action">
                                <i className="mdi-action-lock-open"></i>Войти
                            </button>
                        </div>
                    </div>
                    <div className="row center"><a href="#" className="grey-text"
                                                   onClick={this.switchModalForgotPassword}>
                        Забыли пароль?</a></div>
                </form>
        }
        return (
            <div>
                {webForm}
            </div>
        );
    }
});
module.exports = LoginForm;

