var React = require("react");
/*var Entrance = require("./entrance.jsx");
 var Registration = require("./registration.jsx");*/
/*var config = require('../../../../config');*/

var backendHost = 'http://univerpulse.noip.me:8080';

var Auth = React.createClass({
    getInitialState: function () {
        return {
            login: '',
            password: '',
            errMessage: '',
            isLoginForm: false,
            email: '',
            isActivationSuccess: false
        }
    },
    handleEmailChange: function (event) {
        this.setState({email: event.target.value});
        this.setState({errMessage: ""});
    },
    handleLoginChange: function (event) {
        this.setState({login: event.target.value});
        this.setState({errMessage: ""});
    },
    handlePasswordChange: function (event) {
        this.setState({password: event.target.value});
        this.setState({errMessage: ""});
    },

    handleSubmitL: function (event) {
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
            var that = this;
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                type: 'POST',
                data: JSON.stringify(dataJson),
                success: function (data) {
                    that.setState({isLoginForm: true});
                },
                error: function (xhr, status, err) {
                    if (xhr.status == 400) {
                        that.setState({errMessage: "Неверный логин или пароль."})
                    }
                }
            });
        }
    },
    handleSubmitR: function (event) {
        event.preventDefault();

        if (this.state.email == '') {
            this.setState({errMessage: "empty field"})
        } else {
            var email = this.state.email.trim();
            var dataJson = {
                "email": email
            };
            var that = this;
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                type: 'POST',
                data: JSON.stringify(dataJson),
                success: function (data) {
                    that.setState({isActivationSuccess: true});
                },
                error: function (xhr, status, err) {
                    if (xhr.status == 400) {
                        that.setState({errMessage: "fail registration - user alredy registered in system"})
                    }
                }
            });
        }
    },
    componentDidMount: function () {
        var that = this;
        $(document).ready(function () {
            // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
            $('.modal-trigger').leanModal({
                complete: function () {
                    that.setState({email: ''});
                    that.setState({login: ''});
                    that.setState({errMessage: ''});
                    that.setState({isActivationSuccess: false});
                    that.setState({isLoginForm: false});
                } // Callback for Modal close
            });
        });
        $(document).ready(function () {
            $('ul.tabs').tabs();
        });
    },
    render: function () {
        /*================================Entrance==========================================*/
        var loginForm;
        if (!this.state.isLoginForm) {
            loginForm =
                <form claassName="login-form" onSubmit={this.handleSubmitL}>
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
        /*================================Registration==========================================*/
        var registrForm;
        if (!this.state.isActivationSuccess) {
            registrForm =
                <form claassName="login-form" onSubmit={this.handleSubmitR}>
                    <div className="row center">
                        <h5>Регистрация учётной записи пользователя</h5>
                    </div>
                    <div className="row margin">
                        <div className="input-field col s12">
                            <i className="mdi-communication-email prefix"></i>
                            <input value={this.state.email} id="email" type="email"
                                   onChange={this.handleEmailChange}/>
                            <label for="email" className="center-align">Email</label>
                        </div>
                    </div>
                    <div className="row"><p className="red-text">{this.state.errMessage}</p></div>
                    <div className="row margin">
                        <p className="center">На этот e-mail мы отправим письмо для проверки
                            корректностиуказанногоадреса. Вписьме будут содержаться инструкции
                            по активации учётной записи пользователя с таким email.</p>
                    </div>
                    <div className="row margin">
                        <img src="img/landingPage/captcha.jpg" alt="captcha"/>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button className="btn waves-effect waves-light col s12" type="submit"
                                    name="action"><i className="mdi-action-perm-identity"></i>
                                Зарегистрироваться
                            </button>
                        </div>
                    </div>
                </form>
        } else {
            registrForm =
                <form claassName="login-form">
                    <div className="row center">
                        <h5>Регистрация учётной записи пользователя</h5>
                    </div>
                    <div className="row margin">
                        <p className="center">Спасибо!
                            На указаный Вами e-mail <b>{this.state.email}</b> отправлено письмо для проверки
                            корректности указанного адреса. Пожалуйста, следуйте указанным в письме инструкциям
                            для активации учётной записи пользователя или повторите попытку регистрации,
                            если вы ошиблись в адресе.</p>
                    </div>
                </form>
        }
        return (
            <div>
                <div className="entrance-menu right hide-on-med-and-down valign-wrapper">
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Вход</a>
                </div>
                <div id="modal1" className="modal">
                    <div className="card-panel">
                        <div className="row">
                            <div className="col s12">
                                <ul className="tabs">
                                    <li className="tab col s3"><a href="#test1">Войти</a></li>
                                    <li className="tab col s3"><a class="active" href="#test2">Регистриция</a></li>
                                </ul>
                            </div>

                            <div id="test1" className="col s12">
                                <div>{loginForm}</div>
                            </div>

                            <div id="test2" className="col s12">
                                <div>{registrForm}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Auth;