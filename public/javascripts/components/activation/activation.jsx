var React = require('react');

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
        this.setState({errMessage: ''});
        var dataJson = {
            "password": this.state.password,
            "uuid": this.state.uuid_1
        };
        console.log(dataJson);
        $.ajax({
            url: this.state.url_1,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            type: 'POST',
            data: JSON.stringify(dataJson),
            success: function (data) {
                alert("Success!!!")
            },
            error: function (xhr, status, err) {
                alert("Error!!!")
            }
        });
    }
    , render: function () {
        console.log("---- From Activation  url ///  " + this.props.url1);
        console.log("---- From Activation  uuid  ///  " + this.props.uuid1);
        var activationComp = "";
        if (!this.state.isActivationSuccess) {
            activationComp =
                <form className="registrationForm" onSubmit={this.handleSubmit}>
                    <h5 className="header center blue-text text-lighten-1">Активация учетной записи</h5>

                    <div className="row">
                        <div className="col s3"><p></p></div>
                        <div className="input-field col s6">
                            <input value={this.state.passwowrd} onChange={this.handlePasswordChange} id="password"
                                   type="password" className="validate"></input>
                            <label className="active" for="password">Новый пароль</label>
                        </div>
                        <div className="col s3"><p className="red-text">{this.state.errMessage}</p></div>
                    </div>
                    <div className="row">
                        <div className="col s3"><p></p></div>
                        <div className="input-field col s6">
                            <input value={this.state.password_1} onChange={this.handlePasswordChange_1} id="password_1"
                                   type="password" className="validate"></input>
                            <label className="active" for="password_1">Введите новый пароль еще раз</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s3"><p></p></div>
                        <div className="col l9 s12">
                            <p><img src="../img/captcha.jpg" alt="captcha"></img></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6"><p></p></div>
                        <button type="submit" className="btn waves-effect light-blue lighten-1">
                            Активировать
                        </button>
                    </div>
                </form>;
        } else {
            activationComp =
                <div>
                    <h5 className="header center blue-text text-lighten-1">На указанный email отправлено письмо
                        активации</h5>
                </div>;
        }
        return (
            <div>
                {activationComp}
            </div>
        );
    }
});

module.exports = Activation;