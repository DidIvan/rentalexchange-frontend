var React = require('react');
var Header = require("../index/header/header.jsx");
var Footer = require("../index/footer/footer.jsx");

var Activation = React.createClass({
    getInitialState: function () {
        return {
            password: '',
            password_1: '',
            errMessage: '',
            isActivationSuccess: false
        };
    }
    , handlePasswordChange: function (e) {
        this.setState({password: e.target.value});
    }
    , handlePasswordChange_1: function (e) {
        this.setState({password_1: e.target.value});
    }
    , handleSubmit: function (e) {
        e.preventDefault();
        var password = this.state.password.trim();
        var password_1 = this.state.password_1.trim();

        if (password == "" || password_1 == "") {
            this.setState({errMessage: 'Нужно заполнить поля формы!'});
            return;
        } else if (password.length < 2) {
            this.setState({errMessage: 'Пароль должен быть не менее 2 символов!'});
            return;
        } else if (password.length > 20) {
            this.setState({errMessage: 'Пароль должен быть не более 20 символов!'});
            return;
        } else if (password != password_1) {
            this.setState({errMessage: 'Пароли не совпадают!'});
            return;
        }
        console.log(this.state.password);
        this.setState({errMessage: ''});
        var dataJson = {
            "password": this.state.password,
            "uuid": this.props.uuidForRequest
        };

        var that = this;
        $.ajax({
            url: this.props.urlBackEnd,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            type: 'POST',
            data: JSON.stringify(dataJson),
            success: function (data) {
                that.state.isActivationSuccess = true;
            },
            error: function (xhr, status, err) {
                if (xhr.status == 400) {
                    that.setState({errMessage: xhr.responseText});
                }
               /* if (status == 400) {
                    if (reason == 'InvalidRequest') {
                        that.setState({errMessage: "fail confirmation registration - incoming object is null"})
                    }
                    if (reason == 'EmptyPassword') {
                        that.setState({errMessage: "fail confirmation registration - password field is empty"})
                    }
                    if (reason == 'InvalidPasswordLength') {
                        that.setState({errMessage: "fail confirmation registration - password has inappropriate length"})
                    }
                    if (reason == 'InvalidPasswordFormat') {
                        that.setState({errMessage: "fail confirmation registration - password has inappropriate format"})
                    }
                    if (reason == 'EmptyUuid') {
                        that.setState({errMessage: "fail confirmation registration  - uuid field is empty"})
                    }
                    if (reason == 'InvalidActivationLink') {
                        that.setState({errMessage: "fail confirmation registration - " +
                        "invalid link for activation(expired or doesn't exist). User doesn't exist"})
                    }
                    if (reason == 'UserAlreadyRegistreted') {
                        that.setState({errMessage: "fail confirmation registration - " +
                        "User already registrated and confirmed registration"})
                    }
                    if (reason == 'BlockedAccount') {
                        that.setState({errMessage: "fail confirmation registration - account has blocked or deleted"})
                    }
                }*/
                /* alert(xhr.responseJSON.reason);
                 this.props.errReason = xhr.responseJSON.reason;
                 console.log(this.props.errReason);*/
            }
        });
    }
    , render: function () {

        console.log("OOOOkkk!"+ this.props.urlBackEnd );
        console.log(this.props.uuidForRequest);
        var activationComp = "";
        if (!this.state.isActivationSuccess) {

            activationComp =
                <form className="registrationForm row center" onSubmit={this.handleSubmit}>
                    <h5 className="header center">Активация учетной записи</h5>

                    <div className="row">
                        <div className="input-field col s6">
                            <i className="mdi-action-lock-outline prefix"></i>
                            <input value={this.state.passwowrd} onChange={this.handlePasswordChange} id="password"
                                   type="password" className="validate"></input>
                            <label className="active" for="password">Новый пароль</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <i className="mdi-action-lock-outline prefix"></i>
                            <input value={this.state.password_1} onChange={this.handlePasswordChange_1} id="password_1"
                                   type="password" className="validate"></input>
                            <label className="active" for="password_1">Введите новый пароль еще раз</label>
                        </div>
                    </div>

                    <div className="row margin">
                        <img src="img/landingPage/captcha.jpg" alt="captcha"/>
                    </div>

                    <div className="row">
                        <button className="btn blue lighten-2 waves-effect waves-light col s6" type="submit"
                                name="action"><i className="mdi-action-perm-identity"></i>
                            Активировать
                        </button>
                    </div>
                    <div className="col s12"><p className="red-text">{this.state.errMessage}</p></div>
                </form>;

        } else {
            activationComp =
                <div>
                    <p>Поздравляем!</p>

                    <p>Учётная запись пользователя [%e-mail%] активирована.</p>

                    <p> Добро пожаловать в личный кабинет!</p>

                    <p>(На ваш e-mail отправлено уведомление о выполненной активации).</p>
                </div>;
        }
        return (

            <div className="container">
                <Header/>
                <div className="card-panel">
                    <div className="container">
                        <div className="col s6 offset-s3 grid-example">{activationComp}</div>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
});

module.exports = Activation;