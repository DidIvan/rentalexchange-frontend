var React = require("react");


var Entrance = React.createClass({
    getInitialState: function () {
        return {
            login: '',
            password: '',
            errMessage: '',
            isLoginForm: false
        }
    },
    handleLoginChange: function (event) {
        this.setState({login: event.target.value});
        this.setState({errMessage: ""});
    },
    handlePasswordChange: function (event) {
        this.setState({password: event.target.value});
        this.setState({errMessage: ""});
    },

    handleSubmit: function (event) {
        event.preventDefault();

        if ((this.state.login || this.state.password) == '') {
            this.setState({errMessage: "Все поля должны быть заполнены!"})
        } else {
            var login = this.state.login.trim();
            var password = this.state.password.trim();
            var dataJson = {
                "login": login,
                "password": password
            };
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                type: 'POST',
                data: JSON.stringify(dataJson),
                success: function (data) {
                    module.setState({isLoginForm: true});
                },
                error: function (xhr, status, err) {
                    if (xhr.status == 400) {
                        module.setState({errMessage: "Неверный логин или пароль."})
                    }
                }
            });
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
                            <input value={this.state.login} id="email" type="email"
                                   onChange={this.handleLoginChange}/>
                            <label for="email" className="center-align">Email</label>
                        </div>
                    </div>

                    <div className="row margin">
                        <div className="input-field col s12">
                            <i className="mdi-action-lock-outline prefix"></i>
                            <input value={this.state.password} id="icon_password" type="password"
                                   className="validate" onChange={this.handlePasswordChange}/>
                            <label for="icon_password">Password</label>
                        </div>
                    </div>

                    <div className="row"><p className="red-text">{this.state.errMessage}</p></div>

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
