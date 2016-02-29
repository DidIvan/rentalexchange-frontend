/**
 * Created by opasichnyk on 2/29/2016.
 */
var React = require("react"),
    sender = require('app/request-sender');

const BACKEND_HOST = 'http://localhost:8002';

var ForgotPasswordForm = React.createClass({
    getInitialState: function () {
        return {
            email: '',
            uiMessage: '',
            isSuccess: false
        }
    },
    handleEmailChange: function (event) {
        this.setState({email: event.target.value});
        this.setState({uiMessage: ""});
    },
    handleSubmit: function (event) {
        event.preventDefault();
        if (this.state.email == '') {
            this.setState({uiMessage: "Заполните поле Email"})
        } else {
            var dataJson = {
                "email": this.state.email.trim()
            };
            var success = function (data, textStatus) {
                this.setState({isSuccess: true});
            };
            var error = function (xhr, textStatus, thrownError) {
                if (xhr.status == 400) {
                    this.setState({uiMessage: xhr.responseText});
                }
            };
            sender.POST("/user/change-password", dataJson, success, error);
        }
    },
    render: function () {
        var webForm;
        if (this.state.isSuccess) {
            webForm =
                <form claassName="login-form">
                    <div className="row center">
                        <h5>Восстановление доступа к персональному кабинету.</h5>
                    </div>
                    <div className="row margin">
                        <p className="center">Спасибо!
                            На указаный Вами e-mail <b>{this.state.email}</b> отправлено письмо с ссылкой для
                            восстановления пароля.
                            Для перехода в кабинет перейдите по ссылке из письма.</p>
                    </div>
                </form>
        } else {
            webForm =
                <form claassName="login-form" onSubmit={this.handleSubmitF}>
                    <div className="row center">
                        <h5>Восстановление доступа к персональному кабинету</h5>
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
                        <p className="center">Введите email, указанный при регистрации. На него мы вышлем инструкции по
                            восстановлению пароля.</p>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <button className="btn waves-effect waves-light col s12" type="submit"
                                    name="action"><i className="mdi-action-perm-identity"></i>
                                Вспомнить
                            </button>
                        </div>
                    </div>
                </form>
        }
        return (
            <div>
                {webForm}
            </div>
        );
    }
});
module.exports = ForgotPasswordForm;