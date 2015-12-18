/** @jsx React.DOM */

var LoginForm = React.createClass({

    getInitialState: function () {
    return {
        email: '',
        errMessage: '',
        validIcon: ''
    };
}
, handleEmailChange: function (e) {
    //validation
    this.setState({email: e.target.value});
    this.setState({errMessage: ''});
    if (this.validateEmail(this.state.email)) {
        document.getElementById('icon_email_login').style.color = 'green';
        this.setState({validIcon: 'done'});
    } else {
        document.getElementById('icon_email_login').style.color = 'red';
        this.setState({validIcon: 'close'});
    }
}

    , validateEmail: function (email) {
    var re = /.+@.+\..+/i;
    return re.test(email);
}

, handleSubmit: function (e) {
    e.preventDefault();
    var email = this.state.email.trim();

    if(!this.validateEmail(email))
    {
        this.setState({errMessage: 'Некорректный email!'});
        return;
    }

    this.setState({errMessage: ''});

    $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: email,
        success: function (data) {
            alert("SUCCESS POST");
        }.bind(this),
        error: function (xhr, status, err) {
            alert("ERROR POST "+status);
        }.bind(this)
    });
    this.setState({email: ''});
}

, render: function () {
    return (
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col l9 s12">
              <input type="text" placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}/>
            </div>
            <div className="col l3 s12"><i id="icon_email_login" className="medium material-icons">{this.state.validIcon}</i></div>
            <div className="col l9 s12">
              <p><img src="../img/captcha.jpg" alt="captcha"></img></p>
            </div>
            <div className="col l9 s12">
            <button className="btn waves-effect light-blue lighten-1" type="submit" value="Registration">Войти
               <i className="material-icons right">send</i>
            </button>
            </div>
            <div className="col l12 s12"><p className="red-text">{this.state.errMessage}</p></div>
           </div>
        </form>
);
}
});

React.render(
<LoginForm url="http://api.rental-exchange.ua/user/login"/>,
    document.getElementById('login_form_id')
);

