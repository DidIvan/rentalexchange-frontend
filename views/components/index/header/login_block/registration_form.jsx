/**
 * Created by opasichnyk on 2/29/2016.
 */
var React = require("react");

const BACKEND_HOST = 'http://univerpulse.noip.me:8002';

var RegistrationForm = React.createClass({
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
            this.setState({errMessage: "empty field"})
        } else {
            var email = this.state.email.trim();
            var dataJson = {
                "email": email
            };
            var that = this;
            $.ajax({
                url: BACKEND_HOST + "/user/registration",
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                type: 'POST',
                data: JSON.stringify(dataJson),
                success: function (data, textStatus) {
                    that.setState({isSuccess: true});
                },
                error: function (xhr, textStatus, thrownError) {
                    if (xhr.status == 400) {
                        that.setState({uiMessage: xhr.responseText});
                    }
                }
            });
        }
    },
    render: function () {
        var webForm;
        if (this.state.isSuccess) {
            webForm =
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
        } else {
            webForm =
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
                            корректности указанного адреса. В письме будут содержаться инструкции
                            по активации учётной записи пользователя с таким email.</p>
                    </div>
                    <div className="row margin">
                        <div class="g-recaptcha" data-sitekey="6LdkDRoTAAAAANiuKYYpCV-j0H8ECWVFpcya2Rk2"></div>
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
        }
        return (
            <div>
                {webForm}
            </div>
        );
    }
});
module.exports = RegistrationForm;
