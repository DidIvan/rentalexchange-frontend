var React = require("react");


var Auth = React.createClass({
    getInitialState: function () {
        return {
            email: '',
            errMessage: '',
            isActivationSuccess: false,
            isLoginForm: false

        }
    },
    handleEmailChange: function (event) {
        this.setState({email: event.target.value});
        this.setState({errMessage: ""});
    },
    handleModalType: function (event) {
        this.setState({isLoginForm: !this.state.isLoginForm});
    },
    handleSubmit: function (event) {
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
                    that.setState({errMessage: ''});
                    that.setState({isActivationSuccess: false});
                } // Callback for Modal close
            });
        });
        $(document).ready(function () {
            $('ul.tabs').tabs();
        });
    },
    render: function () {
        var registrForm;
        var loginForm;

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
                        if ({!this.state.isLoginForm}) {
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
                    } else{  loginForm =
                        <form claassName="login-form">
                            <div className="row center">
                                <h5>Вход на rentalexchange</h5>
                            </div>
                            <div className="row margin">
                                <p className="center">Вход на сайт выполнен!</p>
                            </div>
                        </form>
                    }
                    </div>

                    <div id="test2" className="col s12">

                        if (!this.state.isActivationSuccess) {
                        registrForm =
                            <form claassName="login-form" onSubmit={this.handleSubmit}>

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
                                        корректности
                                        указанного
                                        адреса. В
                                        письме будут
                                        содержаться инструкции по активации учётной записи пользователя с таким
                                        e-mail.</p>
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
                    } else{
                        registrForm =
                        <form claassName="login-form">
                            <div className="row center">
                                <h5>Регистрация учётной записи пользователя</h5>
                            </div>
                            <div className="row margin">
                                <p className="center">Спасибо!
                                    На указаный Вами e-mail <b>{this.state.email}</b> отправлено письмо для проверки
                                    корректности указанного
                                    адреса.
                                    Пожалуйста, следуйте указанным в письме инструкциям для активации учётной записи
                                    пользователя
                                    или повторите попытку регистрации, если вы ошиблись в адресе.</p>
                            </div>
                        </form>
                    }
                    </div>
                </div>
            </div>
        </div>

        var modalForm = this.state.isLoginForm ? loginForm : registrForm;
        return (
            <div>
                <div className="entrance-menu right hide-on-med-and-down valign-wrapper">
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Вход</a>
                </div>
                <div>{modalForm}</div>
            </div>
        )
    }
});
module.exports = Auth;