var React = require("react");


var Entrance = React.createClass({
    getInitialState: function () {
        return {
            email: '',
            errMessage: '',
            isLoginForm: false
        }
    },
    render: function () {
        var loginForm;
        if (!this.state.isLoginForm) {
            loginForm =
                <form claassName="login-form" onSubmit={this.handleSubmit}>
                    <div className="row center">
                        <h5>Вход на rentalexchange</h5>
                    </div>
                    <div className="row margin">
                        <div className="input-field col s12">
                            <i className="mdi-communication-email prefix"></i>
                            <input value={this.state.email} id="email" type="email"
                                   onChange={this.handleEmailChange}/>
                            <label for="email" className="center-align">Email</label>
                        </div>
                    </div>
                    <div className="row margin">
                        <div className="input-field col s12">
                            <i className="mdi-action-lock-outline prefix"></i>
                            <input value={this.state.password} id="icon_password" type="password"
                                   className="validate"/>
                            <label for="icon_password">Password</label>
                        </div>
                    </div>

                    <div className="row margin">
                        <img src="img/landingPage/captcha.jpg" alt="captcha"/>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <button className="btn waves-effect waves-light col s12" type="submit"
                                    name="action"><i
                                className="mdi-action-lock-open"></i>
                                Войти
                            </button>
                        </div>
                    </div>
                </form>
        } else {
            loginForm =
                <form claassName="login-form">
                    <div className="row center">
                        <h5>Вход на rentalexchange</h5>
                    </div>
                    <div className="row margin">
                        <p className="center">Вход на сайт выполнен!</p>
                    </div>
                </form>
        }
        return (
            <div>{loginForm}</div>
        )
    }
});

module.exports = Entrance;