/** @jsx React.DOM */

var Activation = React.createClass({

    getInitialState: function () {
    return {password: '', password_1: ''};
}
, handlePasswordChange: function (e) {
    //validation
    this.setState({password: e.target.value});
}
, handlePasswordChange_1: function (e) {
    //validation
    this.setState({password_1: e.target.value});
}
, handleSubmit: function (e) {
    e.preventDefault();

    var password = this.state.password.trim();
    var password_1 = this.state.password_1.trim();

    if(password == "" || password_1 == "") {
        alert("Нужно заполнить поля формы!");
        return;
    } else if(password.length < 6) {
        alert("Пароль должен быть не менее 6 символов!");
        return;
    } else if(password.length > 25) {
        alert("Пароль должен быть не более 25 символов!");
        return;
    } else if(password != password_1) {
        alert("Пароли не совпадают!");
        return;
    }

    $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: {password: password, password_1: password_1},
        success: function (data) {
            alert("SUCCESS POST");
        }.bind(this),
        error: function (xhr, status, err) {
            alert("ERROR POST "+status);
        }.bind(this)
    });

    this.setState({password: '', password_1: ''});
}

, render: function () {
    return (
<form className="registrationForm" onSubmit={this.handleSubmit}>
<div className="row">
<div className="col s3"><p></p></div>
<div className="input-field col s6">
    <input value={this.state.password} onChange={this.handlePasswordChange} id="password" type="password" className="validate"></input>
    <label className="active" for="password">Новый пароль</label>
</div>
</div>
<div className="row">
    <div className="col s3"><p></p></div>
<div className="input-field col s6">
    <input value={this.state.password_1} onChange={this.handlePasswordChange_1} id="password_1" type="password" className="validate"></input>
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
    <button className="btn waves-effect light-blue lighten-1" type="submit" value="Registration">Активировать</button>
    </div>
    </form>
);
}
});

React.render(
<Activation url="http://api.rental-exchange.ua/user/activation"/>,
    document.getElementById('activation_form_id')
);

