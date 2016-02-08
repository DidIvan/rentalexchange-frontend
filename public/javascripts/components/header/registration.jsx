var React = require("react");

var Registration = React.createClass({
    render: function () {
        return (
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
                    <p className="center">На этот e-mail мы отправим письмо для проверки корректности
                        указанного
                        адреса. В
                        письме будут
                        содержаться инструкции по активации учётной записи пользователя с таким e-mail.</p>
                </div>
                <div className="row margin">
                    <img src="img/captcha.jpg" alt="captcha"/>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <button type="submit" className="btn waves-effect waves-light col s12">
                            Зарегистрироваться
                        </button>
                    </div>
                    <br/>

                    <div className="input-field col s12">
                        <a className="btn waves-effect waves-light col s12" onClick={this.handleModalType}>
                            Войти
                        </a>
                    </div>
                </div>
            </form>
        )
    }
});
module.exports = Registration;